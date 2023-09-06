import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./FooterSection.css";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const hideFooter =
    location.pathname === "/dashboard" || location.pathname === "/login";

  if (hideFooter) {
    return null;
  }

  return (
    <footer className="footer_container mt-5 py-5">
      <div className="footer_logo">
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <ul className="footer_links text-light p-0">
        {/* Links with scroll-to-top behavior */}
        <li>
          <Link
            to="/regulation"
            className="text-light text-decoration-none"
            onClick={scrollToTop}
          >
            Impressum
          </Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link
            to="/policy"
            className="text-light text-decoration-none"
            onClick={scrollToTop}
          >
            Datenschutz
          </Link>
        </li>
        <li className="mx-2">|</li>
        <li>
          <Link
            to="/faq"
            className="text-light text-decoration-none"
            onClick={scrollToTop}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </footer>
  );
}
