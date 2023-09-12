import React from "react";
import "./Login.css";
import emailjs from "emailjs-com";

import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import personIcon from "../../assets/icons/person.png";
import keyIcon from "../../assets/icons/key.png";

import { Link, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [btnLock, setBtnLock] = useState(false);

  const onUnameChange = (e) => {
    const unameTemp = e.target.value;
    setUname(unameTemp);
    // console.log(unameTemp);
  };

  const onPasswordChange = (e) => {
    const passwordTemp = e.target.value;
    setPassword(passwordTemp);
    // console.log(fname);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setBtnLock(true); // Disable the login button

    try {
      const response = await axios.post(
        "https://hanfpioniere.onrender.com/admin/login",
        {
          username: uname,
          password,
        }
      );

      if (response.status === 200) {
        // Successful login
        const data = response.data;
        console.log(data.admin);

        // Store the token in local storage
        localStorage.setItem("admin", JSON.stringify(data.admin));

        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        // Failed login
        console.error("Login failed:", response.data.error);
        // Handle the error, e.g., display an error message to the user
        toast.error(
          "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle the error, e.g., display an error message to the user
      toast.error(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setBtnLock(false); // The login button is not re-enabled in this case
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendMessage = () => {
    // Send an email using emailjs-com
    emailjs
      .send(
        "service_e1lwpxr",
        "template_s823pb8",
        {
          message: message,
          from_email: email,
        },
        "YP1G-xa_iZ9fhYFzS"
      )
      .then(
        function (response) {
          console.log("Email sent successfully!", response);
          toast.success("E-Mail erfolgreich versendet!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setMessage("");
          setEmail("");
        },
        function (error) {
          console.error("Email sending failed:", error);
          toast.error(
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      );
    setShowModal(false); // Close the modal after sending the message
  };

  return (
    <main className="login_container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="background d-flex flex-column justify-content-between align-items-center">
        <div className="login_logo">
          <Link to="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </div>
        <img
          src={SectionBottom}
          alt=""
          className="img-fluid background_bottom"
        />
      </div>
      <div className="login_form_container py-5">
        <h2 className="mb-5 fw-bold">Einloggen</h2>
        <Form
          className="login_form"
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <img
                  src={personIcon}
                  alt="person icon"
                  width="20px"
                  className="icon-img"
                />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Benutzername..."
                className="rounded-right"
                onChange={(e) => {
                  onUnameChange(e);
                }}
                value={uname}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <img
                  src={keyIcon}
                  alt="key icon"
                  width="20px"
                  className="icon-img"
                />
              </InputGroup.Text>

              <Form.Control
                type="password"
                placeholder="Passwort..."
                className="rounded-right"
                onChange={(e) => {
                  onPasswordChange(e);
                }}
                value={password}
              />
            </InputGroup>
          </Form.Group>
          <div className="w-100 d-flex justify-content-end mb-2">
            <button
              className="btn btn-link help_link"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Brauchen Sie Hilfe? Kontaktieren Sie uns.
            </button>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Nachricht senden</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <img
                      src={personIcon}
                      alt="email icon"
                      width="20px"
                      className="icon-img"
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Ihre E-Mail..."
                    className="rounded-right border-start-0"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Nachricht:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Ihre Nachricht hier..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Schließen
              </Button>
              <Button variant="primary" onClick={sendMessage}>
                Senden
              </Button>
            </Modal.Footer>
          </Modal>
          <p className="login_form_text text-muted">
            Wir verwenden deine personenbezogenen Daten, um eine möglichst gute
            Benutzererfahrung auf dieser Website zu ermöglichen, den Zugriff auf
            dein Konto zu verwalten und für weitere Zwecke, die in unserer{" "}
            <Link to={"/policy"} className="text-dark fw-bold">
              Datenschutzerklärung
            </Link>{" "}
            beschrieben sind.
          </p>
          <button
            className="login_form_button btn text-uppercase"
            type="submit"
            disabled={uname === "" || password === "" || btnLock ? true : false}
          >
            {btnLock ? "..." : "Einloggen"}
          </button>
        </Form>
      </div>
    </main>
  );
}
