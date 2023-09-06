import React from "react";
import "./Login.css";

import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import personIcon from "../../assets/icons/person.png";
import keyIcon from "../../assets/icons/key.png";

import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";

export default function Login() {
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
            // handleRegistration(e);
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
                placeholder="User name..."
                className="rounded-right"
                onChange={(e) => {
                  //   onFnameChange(e);
                }}
                // value={fname}
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
                type="text"
                placeholder="Passwort..."
                className="rounded-right"
                onChange={(e) => {
                  //   onFnameChange(e);
                }}
                // value={fname}
              />
            </InputGroup>
          </Form.Group>
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
            type="button"
            // disabled={
            //   fname === "" ||
            //   lname === "" ||
            //   uname === "" ||
            //   email === "" ||
            //   telephone === "" ||
            //   selectedRegion === "" ||
            //   btnLock
            //     ? true
            //     : false
            // }
          >
            {/* {btnLock ? "..." : "Registrieren"} */}
            Einloggen
          </button>
        </Form>
      </div>
    </main>
  );
}
