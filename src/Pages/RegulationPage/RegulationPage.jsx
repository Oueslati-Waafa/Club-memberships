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
          <p className="text-start contacts px-5 mb-3">
            XXXXXXX XXXXX
            <br />
            XXXXXXXXXXX XXX-XX XXXXX
            <br />
            XXXXX XXXXXXXXX
            <br />
            Tel.: XXX/XXXXXXXX
            <br />
            E-Mail: XXXX@XXXXXXXX.XX
            <br />
            Registergericht: Amtsgericht Charlottenburg
            <br />
            Registernummer: HRB XXXXXX
            <br />
            Geschäftsführer: XXXXXXXX XXXXX, XXXXXXXX XXXXX, Dr. XXXXX XXXXXXXXX
            <br />
            Umsatzsteuer-Identifikationsnummer: DEXXXXXXXXXX
            <br />
            MStV:XXXXXXXXX XXXXX
          </p>
          <p className="extra_bold text-start px-5">Lorem ipsum :</p>
          <p className="text-start px-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ultrices ipsum et hendrerit. Nullam euismod tellus eget justo
            vulputate, ut aliquam odio viverra. Fusce eleifend varius quam, vel
            feugiat arcu interdum ut. Proin eu sapien eu orci ultrices
            ullamcorper. Sed nec tincidunt lorem, in suscipit erat. Nulla
            facilisi. Curabitur efficitur leo in eros luctus, sit amet varius
            massa suscipit. Donec vehicula purus ut libero posuere, ac
            vestibulum felis ullamcorper. Aliquam ut urna non ex sodales
            malesuada. Duis laoreet, metus ut vestibulum cursus, nulla erat
            feugiat velit, at tempus nisi dui ac velit. Aenean ut tristique
            sapien. Nulla facilisi. Sed a dolor sapien. Suspendisse potenti.
          </p>
        </div>
      </div>
    </main>
  );
}
