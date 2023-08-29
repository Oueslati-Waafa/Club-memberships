import React from "react";
import "./HomeSection.css";
import logo from "../../assets/logo.png";
import homeCenter from "../../assets/homeCenter.jpg";
import homeLeft from "../../assets/homeLeft.png";
import homeRight from "../../assets/homeRight.png";
import homeBottmRight from "../../assets/section_bottom_right.png";
import homeBottmLeft from "../../assets/section_bottom_left.png";

export default function HomeSection() {
  return (
    <main className="home_container container-fluid">
      <section className="home_text">
        <div className="home_text_logo">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
        <div className="home_text_divider my-5"></div>
        <div className="home_text_content">
          <h1>
            Werde Mitglied bei den{" "}
            <span className="text-green">Hanfpionieren</span> !
          </h1>
          <p className="mt-5 fw-semibold">
            Registrieren Sie sich jetzt für unseren bevorstehenden
            Cannabis-Verein und entdecken Sie die Welt des Hanfanbaus
            und der Forschung
          </p>
        </div>
      </section>
      <section className="home_images d-flex align-items-end">
        <div className="home_images_container">
          <div className="home_image_side">
            <img src={homeLeft} className="img-fluid" alt="home img" />
          </div>
          <div className="home_image_center">
            <img src={homeCenter} className="img-fluid" alt="home img" />
          </div>
          <div className="home_image_side">
            <img src={homeRight} className="img-fluid" alt="home img" />
          </div>
        </div>
        <div className="home_bottom">
          <img src={homeBottmLeft} className="img-fluid w-50" alt="home img" />
          <img src={homeBottmRight} className="img-fluid w-50" alt="home img" />
        </div>
      </section>
    </main>
  );
}
