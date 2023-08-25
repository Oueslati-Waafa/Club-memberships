import React from "react";
import "./WelcomeSection.css";
import welcomeDivider from "../../assets/section_bottom2.png";
import welcomeDivider2 from "../../assets/section_bottom3.png";

export default function WelcomeSection() {
  return (
    <main className="welcome_container">
      <div className="welcome_divider mt-5">
        <img src={welcomeDivider} alt="" className="img-fluid" />
      </div>
      <div className="welcome_content">
        <h2 className="fw-semibold my-5">
          Willkommen bei den{" "}
          <span className="text-darkgreen">Hanfpionieren</span> ,
        </h2>
        <div className="welcome_content_text">
          <p>
            Einer Gemeinschaft, die den Weg für eine neue Ära der
            Cannabis-Legalisierung ebnet! Unser Anliegen ist es, nicht nur die
            Begeisterung für den Cannabisanbau und -konsum zu teilen, sondern
            auch verantwortungsbewusst über potenzielle Gefahren aufzuklären.
          </p>
          <p>
            In einer Zeit, in der die Legalisierung von Cannabis in vielen
            Teilen der Welt fortschreitet, setzen wir uns dafür ein, eine
            unterstützende Gemeinschaft zu schaffen. Wir möchten Menschen
            zusammenbringen, die sich für den verantwortungsvollen Umgang mit
            Cannabis interessieren und dabei auch auf die möglichen Risiken
            hinweisen.
          </p>
          <p>
            Uns ist bewusst, dass während die Akzeptanz von Cannabis wächst,
            auch die Bedeutung von Aufklärung über den verantwortungsvollen
            Konsum und die potenziellen gesundheitlichen Auswirkungen zunimmt.
            Daher bieten wir eine Plattform, auf der wir nicht nur Wissen über
            den Anbau, die medizinischen Anwendungen und die kulturelle
            Bedeutung von Cannabis teilen, sondern auch ehrlich über mögliche
            Gefahren sprechen.
          </p>
          <p>
            Unsere Mission reicht jedoch noch weiter. Wir sind fest
            entschlossen, nicht nur eine Community zu formen, die sich
            austauscht und wächst, sondern auch eine positive Veränderung in der
            Gesellschaft herbeizuführen. Durch Bildung und Aufklärung wollen wir
            dazu beitragen, dass die Welt ein realistischeres Bild von Cannabis
            erhält und mögliche Vorurteile abgebaut werden.
          </p>
          <p>
            Schließt euch den Hanfpionieren an, um Teil einer Bewegung zu sein,
            die nicht nur die Chancen, sondern auch die Herausforderungen von
            Cannabis anerkennt. Gemeinsam gestalten wir eine Zukunft, in der
            verantwortungsbewusster Umgang und Aufklärung im Mittelpunkt stehen.
            Seid dabei, wenn wir gemeinsam eine neue Ära prägen!
          </p>
        </div>
      </div>
      <div className="welcome_divider mt-5">
        <img src={welcomeDivider2} alt="" className="img-fluid" />
      </div>
    </main>
  );
}
