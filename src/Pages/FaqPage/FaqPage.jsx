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
            <p className="faq_menu_title m-0 ps-5">Inhaltsverzeichnis</p>
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
                  fill-rule="evenodd"
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
                  Allgemeines
                </a>
              </li>
              <li className="mb-3">
                <a href="#verein" className="text-dark fw-semibold">
                  Verein/Vorhaben eintragen und verwalten
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-dark fw-semibold">
                  Kontakt aufnehmen / Mitglied werden
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="faq_text text-start p-5">
          <section className="faq_text_section" id="allgemeines">
            <h3 className="faq_text_section_title">Allgemeines</h3>
            <p className="faq_text_section_question">
              Welche Vorteile habe ich mit einem CSC Maps Account?
            </p>
            <div className="faq_text_section_answer">
              <p>
                Einen CSC Maps Account benötigst du in jedem Fall, wenn du
                deinen Verein bzw. dein Vorhaben bei uns eintragen möchtest. Die
                Registrierung geht ganz schnell
              </p>
              <p>
                – dein Name, deine E-Mail-Adresse und ein Alias genügen dafür.
                Neben dem Anlegen von Vereinsprofilen kannst du dann folgende
                Funktionen nutzen:
              </p>
              <ul>
                <li>
                  <a
                    className="text-dark"
                    href="https://csc-maps.de/community/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Unser CSC-Forum
                  </a>{" "}
                  (hierfür benötigst du den Alias)
                </li>
                <li>
                  Die Kommentarfunktion unter den Blog-Beiträgen (hierfür
                  ebenfalls)
                </li>
                <li>
                  Bewertung von Vereinen (noch nicht am Start, aber geplant)
                </li>
                <li>Abspeichern von Favoriten</li>
                <li>
                  Umfangreiches Dashboard mit Statistiken zu deinen Einträgen
                </li>
              </ul>
              <p>
                Außerdem haben wir noch jede Menge Ideen für weitere
                interessante Features, die wir registrierten Usern in naher
                Zukunft zur Verfügung stellen wollen. Lass dich überraschen!
              </p>
            </div>
            <p className="faq_text_section_question">
              Ist das alles kostenlos?
            </p>
            <p className="faq_text_section_answer">
              Ja, unser CSC-Verzeichnis und die Funktionen drumherum sind sowohl
              für die Vereine als auch für alle interessierten Privatleute
              kostenlos. Wir verstehen uns als neutrale Plattform und verkaufen
              keine „Premium-Pakete“, damit Einträge in der Liste weiter oben
              stehen o.ä. Mehr über uns und unsere Motivation kannst du hier
              nachlesen. Um unsere Arbeit zu finanzieren, sind wir natürlich auf
              Partner und Sponsoren angewiesen, die zum Beispiel weiterführende
              Services für CSCs anbieten. Bei der Einbindung solcher Partner und
              Sponsoren sind wir vollkommen transparent. Wenn du dazu Fragen
              hast, sprich uns gern an!
            </p>
          </section>
          <section className="faq_text_section" id="verein">
            <h3 className="faq_text_section_title">
              Verein/Vorhaben eintragen und verwalten
            </h3>
            <p className="faq_text_section_question">
              Wie genau funktioniert die Eintragung eines Vereins/Vorhabens?
            </p>
            <p className="faq_text_section_answer">
              Klicke oben auf Verein/Vorhaben eintragen. Wenn du noch keinen CSC
              Maps Account hast, registriere dich bitte mit deinem Namen, deiner
              E-Mail-Adresse und einem Alias. Dann kannst du das Formular für
              Vereine/Vorhaben aufrufen und die wichtigsten Informationen
              eintragen. Je konkreter du deinen Verein bzw. dein Vorhaben
              beschreibst, desto besser! Klicke dann auf „Eintrag
              veröffentlichen“, um deinen Eintrag an das CSC Maps Team zur
              Prüfung und Freigabe zu übermitteln. Du kannst deine Eingaben auch
              „als Entwurf speichern“ und erst später zur Veröffentlichung
              abschicken.
            </p>
            <p className="faq_text_section_question">
              Warum ist mein Eintrag nicht sofort sichtbar?
            </p>
            <p className="faq_text_section_answer">
              Nachdem du auf „Eintrag veröffentlichen“ geklickt hast, wird dein
              Eintrag an das CSC Maps Teams zur Prüfung übermittelt. Bitte habe
              etwas Geduld, je nach Aufkommen kann dies bis zu 24 Stunden dauern
              (in Ausnahmefällen auch mal länger). Sobald dein Eintrag
              freigegeben und veröffentlicht wurde, informieren wir dich per
              E-Mail. Und falls wir Rückfragen haben, werden wir dich
              selbstverständlich kontaktieren. Bitte beachte: Einträge, die
              lediglich als Entwurf gespeichert wurden, werden von uns nicht
              geprüft und also auch nicht veröffentlicht.
            </p>
            <p className="faq_text_section_question">
              Wie kann ich Änderungen/Aktualisierungen an meinem Eintrag
              vornehmen?
            </p>
            <p className="faq_text_section_answer">
              Solange dein Eintrag noch nicht freigegeben wurde, kannst du über
              das „Dashboard“ in deinem Account jederzeit Änderungen daran
              vornehmen. Diese werden dann bei der Prüfung und Freigabe
              berücksichtigt. Wenn du Änderungen an einem bereits
              veröffentlichten Eintrag vornimmst, wird dieser vorübergehend
              deaktiviert und erst wieder angezeigt, wenn das CSC Maps Team die
              Änderungen freigegeben hat.
            </p>
            <p className="faq_text_section_question">
              Kann ich auch mehrere Vereine/Vorhaben eintragen?
            </p>
            <p className="faq_text_section_answer">
              Ja, über einen CSC Maps Account können auch mehrere Einträge
              übermittelt und verwaltet werden, wenn du als Ansprechpartner für
              mehrere Vereine/Vorhaben fungierst. Bitte verzichte aber darauf,
              mehrere Einträge für ein und denselben Verein anzulegen (z.B. um
              verschiedene Postleitzahlen abzudecken). Interessenten finden
              euren Verein über die Umkreis-Suche auch ohne solche „Tricks“. Wir
              behalten uns vor, identische Einträge zu deaktivieren.
            </p>
            <p className="faq_text_section_question">
              Was bedeutet der blaue Haken bei manchen Vereinsprofilen?
            </p>
            <p className="faq_text_section_answer">
              Die Vereinsprofile, die von den jeweiligen Vereinen selbst
              verwaltet werden, erhalten von uns einen blauen Haken. Dies
              betrifft die überwiegende Mehrzahl der Einträge bei CSC Maps, denn
              wir legen Wert darauf, dass ihr euch als Aktive selbst
              präsentiert. Falls ein Profil vom CSC Maps Team angelegt und
              (noch) nicht vom Verein selbst übernommen wurde, hat dieses keinen
              blauen Haken.
            </p>
            <p className="faq_text_section_question">
              Was mache ich, wenn mein Vorhaben noch nicht so konkret ist?
            </p>
            <p className="faq_text_section_answer">
              Wenn du noch nicht soweit bist, einen Eintrag für dein Vorhaben
              anzulegen, ist unser CSC-Forum genau das Richtige für dich! Hier
              kannst du Fragen stellen, deine Ideen zu platzieren, Feedback
              sammeln und andere Interessierte finden. Um das Forum zu nutzen,
              registriere dich einfach mit deinem Namen, deiner E-Mail-Adresse
              und einem Alias für einen CSC Maps Account – und dann leg‘ los!
            </p>
          </section>
          <section className="faq_text_section" id="kontakt">
            <h3 className="faq_text_section_title">
              Kontakt aufnehmen / Mitglied werden
            </h3>
            <p className="faq_text_section_question">
              Wie komme ich am besten mit meinem Wunsch-Verein in Kontakt?
            </p>
            <p className="faq_text_section_answer">
              Am besten nutzt du dafür das Kontaktformular unter „Verein
              kontaktieren“ im Vereinsprofil. Dort musst du einige Angaben
              machen, die für die Vereine wichtig sind, um deine Anfrage
              einzuordnen. Je konkreter du zu deiner Motivation und/oder deinen
              Erfahrungen schreibst, desto eher kannst du auch mit einer
              konkreten Antwort rechnen.
            </p>
            <p className="faq_text_section_question">
              Bei wem landen die Daten aus dem Kontaktformular?
            </p>
            <p className="faq_text_section_answer">
              Wenn du das Kontaktformular abschickst, werden die Daten per
              E-Mail an den hinterlegten Ansprechpartner des jeweiligen Vereins
              übermittelt, eine Kopie wird bei CSC Maps gespeichert. Du erhältst
              die Anfrage außerdem in Kopie an deine angegebene E-Mail-Adresse.
              Bitte beachte, dass der angefragte Verein deine Daten nutzen wird,
              um mit dir in Kontakt zu treten. Diese Kommunikation findet direkt
              zwischen euch und ohne CSC Maps statt. Mehr dazu findest du in
              unserer Datenschutzerklärung (siehe unten im Footer).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
