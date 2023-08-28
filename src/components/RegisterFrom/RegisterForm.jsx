import React, { useState } from "react";
import "./RegisterForm.css";
import Form from "react-bootstrap/Form";
import personIcon from "../../assets/icons/person.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";
import { InputGroup } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const [regionSelectOpen, setRegionSelectOpen] = useState(false);
  const toggleSelect = () => {
    setRegionSelectOpen(!regionSelectOpen);
  };
  const [selectedRegion, setSelectedRegion] = useState("");
  const [fname, setFname] = useState("");
  const [isValidFname, setIsValidFname] = useState(false);
  const [lname, setLname] = useState("");
  const [isValidLname, setIsValidLname] = useState(false);
  const [uname, setUname] = useState("");
  const [isValidUname, setIsValidUname] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [telephone, setTelephone] = useState("+49");
  const [isValidTelephone, setIsValidTelephone] = useState(false);

  const [btnLock, setBtnLock] = useState(false);

  /* input change handling */

  const onFnameChange = (e) => {
    const tfname = e.target.value;
    setFname(tfname);
    setIsValidFname(tfname.length >= 3);
    // console.log(fname);
  };

  const onLnameChange = (e) => {
    const tlname = e.target.value;
    setLname(tlname);
    setIsValidLname(tlname.length >= 3);
    // console.log(lname);
  };

  const onUnameChange = (e) => {
    const tuname = e.target.value;
    setUname(tuname);
    setIsValidUname(tuname.length >= 5);
    // console.log(uname);
  };

  const onEmailChange = (e) => {
    const temail = e.target.value;
    setEmail(temail);

    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailPattern.test(temail));
    // console.log(email);
  };

  const onTelephoneChange = (e) => {
    const inputTelephone = e.target.value;
    const cleanedTelephone = inputTelephone.replace(/[^0-9+]/g, ""); // Remove non-digit characters except "+"
    setTelephone(cleanedTelephone);

    // German phone number validation: +49 followed by 11 digits
    const telephonePattern = /^\+49\d{11}$/;
    setIsValidTelephone(telephonePattern.test(cleanedTelephone));
  };

  /* form submit handler*/

  const handleRegistration = async (event) => {
    event.preventDefault();

    const firstname = fname;
    const lastname = lname;
    const username = uname;
    const region = selectedRegion;

    // Prepare request data
    const requestData = {
      firstname,
      lastname,
      username,
      email,
      telephone,
      region,
    };

    if (!isValidFname) {
      toast.error("Invalid first name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!isValidLname) {
      toast.error("Invalid last name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!isValidUname) {
      toast.error("Invalid user name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (selectedRegion === "") {
      toast.error("Please select your region", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!isValidEmail) {
      toast.error("Invalid email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!isValidTelephone) {
      toast.error("Invalid phone number", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (
      isValidFname &&
      isValidLname &&
      isValidUname &&
      isValidEmail &&
      isValidTelephone &&
      selectedRegion !== ""
    ) {
      setBtnLock(true);
      try {
        const response = await fetch(
          "https://clubregistration.onrender.com/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          }
        );

        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
          toast.success("Registration successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setFname("");
          setLname("");
          setUname("");
          setEmail("");
          setTelephone("+49");
          setSelectedRegion("");
          setBtnLock(false);
        } else {
          toast.error(responseData.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setBtnLock(false);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setBtnLock(false);
      }
    }
  };
  return (
    <main className="container-sm register_container p-sm-5 py-5 ">
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
      <div className="register_form_container py-5">
        <h2 className="mb-5">Registrieren</h2>
        <Form
          className="register_form"
          onSubmit={(e) => {
            handleRegistration(e);
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
                placeholder="Vorname..."
                className="rounded-right"
                onChange={(e) => {
                  onFnameChange(e);
                }}
                value={fname}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <img src={personIcon} alt="key icon" width="20px" />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Nachname..."
                onChange={(e) => {
                  onLnameChange(e);
                }}
                value={lname}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <img src={personIcon} alt="key icon" width="20px" />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Öffentlicher Alias..."
                onChange={(e) => {
                  onUnameChange(e);
                }}
                value={uname}
              />
            </InputGroup>
          </Form.Group>
          <div
            className={`p-3 ${
              regionSelectOpen ? "region_select_box_green" : "region_select_box"
            }`}
          >
            <div
              className="region_select_initial d-flex justify-content-between align-items-center"
              onClick={toggleSelect}
            >
              <div className="region_select_initial_label d-flex w-50">
                <div className="region_select_initial_label_icon me-4">
                  <img src={locationIcon} alt="key icon" width="20px" />
                </div>
                <p className="region_select_initial_label_text m-0">
                  {selectedRegion === "" ? "Region" : selectedRegion}
                </p>
              </div>
              <div className="region_select_initial_trigger">
                {regionSelectOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#127910"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#127910"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`region_select_options ${
                regionSelectOpen
                  ? "faq_menu_elements_open p-3 mt-3"
                  : "faq_menu_elements_close"
              }`}
            >
              <div className="region_select_option">
                <p
                  onClick={() => {
                    setSelectedRegion("Aachen");
                    toggleSelect();
                  }}
                >
                  Aachen
                </p>
              </div>
              <div className="region_select_option">
                <p
                  onClick={() => {
                    setSelectedRegion("Düsseldorf");
                    toggleSelect();
                  }}
                >
                  Düsseldorf
                </p>
              </div>
              <div className="region_select_option">
                <p
                  onClick={() => {
                    setSelectedRegion("Köln");
                    toggleSelect();
                  }}
                >
                  Köln
                </p>
              </div>
              <div className="region_select_option">
                <p
                  onClick={() => {
                    setSelectedRegion("Mönchengladbach");
                    toggleSelect();
                  }}
                >
                  Mönchengladbach
                </p>
              </div>
              <div className="region_select_option">
                <p
                  onClick={() => {
                    setSelectedRegion("And Erkelenz");
                    toggleSelect();
                  }}
                >
                  Erkelenz
                </p>
              </div>
            </div>
          </div>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <img src={mailIcon} alt="key icon" width="20px" />
              </InputGroup.Text>

              <Form.Control
                type="email"
                placeholder="E-Mail-Adresse..."
                onChange={(e) => {
                  onEmailChange(e);
                }}
                value={email}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#01000252"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </InputGroup.Text>

              <Form.Control
                type="tel"
                placeholder="Telefonnummer"
                value={telephone}
                onChange={(e) => {
                  onTelephoneChange(e);
                }}
                minLength={14}
                maxLength={14}
              />
            </InputGroup>
          </Form.Group>
          <p className="register_form_text text-muted">
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
            className="register_form_button btn"
            type="submit"
            disabled={
              fname === "" ||
              lname === "" ||
              uname === "" ||
              email === "" ||
              telephone === "" ||
              selectedRegion === "" ||
              btnLock
                ? true
                : false
            }
          >
            {btnLock ? "..." : "Registrieren"}
          </button>
        </Form>
      </div>
    </main>
  );
}
