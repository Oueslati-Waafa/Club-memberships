import React from "react";
import "./RegulationPage.css";
import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function RegulationPage() {
  return (
    <main className="regulation_container">
      <div className="background_box">
        <div className="background d-flex flex-column justify-content-between align-items-center">
          <div className="regulation_logo">
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
      </div>
      <div className="regulation_content">
        <div className="regulation_box py-5">
          <h2 className="my-5 fw-bold">Impressum</h2>
          <p className="text-start px-5 mb-3">
            Jameal care e.v.
            <br />
            Hariksee Str 53
            <br />
            41372 Niederkrüchten
            <br />
            Steuernummer: 102/5113/2499
          </p>
          <p className="extra_bold text-start px-5">Disclaimer :</p>
          <p className="text-start px-5 mb-5">
            Die Artikel und Informationen auf Hanfpioniere sind nach bestem
            Wissen und Gewissen sorgfältig zusammengestellt. Sie erheben jedoch
            keinen Anspruch auf Vollständigkeit und Ausschließlichkeit, stellen
            keine Rechtsauskunft dar und ersetzen in keinem Fall eine
            individuelle Rechtsberatung. Ebenso übernehmen wir keinerlei Gewähr
            für die Aktualität, Korrektheit oder Qualität der bereitgestellten
            Informationen. Eine Haftung für Schäden materieller oder ideeller
            Art, die durch die Nutzung oder Nichtnutzung der dargebotenen
            Informationen bzw. durch die Nutzung fehlerhafter und
            unvollständiger Informationen verursacht wurden, ist grundsätzlich
            ausgeschlossen, sofern auf unserer Seite kein nachweislich
            vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
        </div>
      </div>
    </main>
  );
}
