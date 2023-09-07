import React, { useState } from "react";
import "./FaqPage.css";
import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import faqImg from "../../assets/faq.png";

export default function FaqPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main className="faq_container">
      <div className="background d-flex flex-column justify-content-between align-items-center">
        <div className="faq_logo">
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
      <div className="faq_content container">
        <h2 className="fw-bold my-5">
          Hanfpioniere Maps <span className="text-darkgreen">FAQ</span>
        </h2>
        <img
          src={faqImg}
          alt=""
          className="faq_img img-fluid border rounded-5 w-100"
        />
        <div className="faq_menu mt-5">
          <div className="d-flex justify-content-between align-items-center py-3">
            <p className="faq_menu_title m-0 ps-5">Lorem Ipsum</p>
            <div
              className={`faq_menu_icon me-3 p-1 ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#127910"
                className="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
            </div>
          </div>
          <div
            className={`faq_menu_elements ps-5 ${
              menuOpen ? "faq_menu_elements_open" : "faq_menu_elements_close"
            }`}
          >
            <ul className="text-start">
              <li className="mb-3">
                <a href="#allgemeines" className="text-dark fw-semibold">
                  Lorem Ipsum
                </a>
              </li>
              <li className="mb-3">
                <a href="#verein" className="text-dark fw-semibold">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-dark fw-semibold">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="faq_text text-start p-5">
          <section className="faq_text_section" id="allgemeines">
            <h3 className="faq_text_section_title">Lorem Ipsum</h3>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="faq_text_section_answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae eleifend urna, at euismod orci. Aliquam erat volutpat.
              </p>
              <p>
                Integer eu pharetra massa. Sed vel purus sed tortor luctus
                dignissim ac ut lectus.
              </p>
              <ul>
                <li>
                  <a className="text-dark" href="#">
                    Lorem Ipsum Forum
                  </a>{" "}
                  (Lorem Ipsum)
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Nulla vitae eleifend urna, at euismod orci.</li>
                <li>
                  Integer eu pharetra massa. Sed vel purus sed tortor luctus
                  dignissim ac ut lectus.
                </li>
                <li>Nulla vitae eleifend urna, at euismod orci.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                purus sed tortor luctus dignissim ac ut lectus.
              </p>
            </div>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eu pharetra massa. Sed vel purus sed tortor luctus dignissim ac ut
              lectus.
            </p>
          </section>
          <section className="faq_text_section" id="verein">
            <h3 className="faq_text_section_title">Lorem Ipsum</h3>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae eleifend urna, at euismod orci. Aliquam erat volutpat.
            </p>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Integer eu pharetra massa. Sed vel purus sed tortor luctus
              dignissim ac ut lectus.
            </p>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Nulla vitae eleifend urna, at euismod orci. Sed vel purus sed
              tortor luctus dignissim ac ut lectus.
            </p>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Integer eu pharetra massa. Sed vel purus sed tortor luctus
              dignissim ac ut lectus.
            </p>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Nulla vitae eleifend urna, at euismod orci. Sed vel purus sed
              tortor luctus dignissim ac ut lectus.
            </p>
          </section>
          <section className="faq_text_section" id="kontakt">
            <h3 className="faq_text_section_title">Lorem Ipsum</h3>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae eleifend urna, at euismod orci. Aliquam erat volutpat.
            </p>
            <p className="faq_text_section_question">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="faq_text_section_answer">
              Integer eu pharetra massa. Sed vel purus sed tortor luctus
              dignissim ac ut lectus.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
