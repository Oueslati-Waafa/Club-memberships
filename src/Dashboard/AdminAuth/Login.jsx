import React from "react";
import "./Login.css";

import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import personIcon from "../../assets/icons/person.png";
import keyIcon from "../../assets/icons/key.png";

import { Link, useNavigate } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

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
      const response = await axios.post("http://127.0.0.1:9090/admin/login", {
        username: uname,
        password,
      });

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
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle the error, e.g., display an error message to the user
    } finally {
      setBtnLock(false); // The login button is not re-enabled in this case
    }
  };

  return (
    <main className="login_container">
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
            <button className="btn btn-link help_link">
              Brauchen Sie Hilfe? Kontaktieren Sie uns.
            </button>
          </div>
          <p className="login_form_text text-muted">
            Wir verwenden deine personenbezogenen Daten, um eine möglichst gute
            Benutzererfahrung auf dieser Website zu ermöglichen, den Zugriff auf
            dein Konto zu verwalten und für weitere Zwecke, die in unserer{" "}
            <a
              href="https://csc-maps.de/datenschutz/"
              target={"_blank"}
              rel="noreferrer"
              className="text-dark fw-bold"
            >
              Datenschutzerklärung
            </a>{" "}
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
