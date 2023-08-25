import React from "react";
import "./PolicyPage.css";
import SectionBottom from "../../assets/section_bottom3.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function PolicyPage() {
  return (
    <main className="policy_container">
      <div className="background_box">
        <div className="background d-flex flex-column justify-content-between align-items-center">
          <div className="policy_logo">
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
      <div className="policy_content">
        <div className="policy_box py-5">
          <h2 className="my-5 fw-bold">Datenschutz</h2>
          <h6 className="text-start px-sm-5 px-3 fw-bold">
            Datenschutzerklärung
          </h6>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">
              1) Einleitung und Kontaktdaten des Verantwortlichen
            </p>
            <p className="policy_rule_content ps-3">
              <p>
                1.1 Wir freuen uns, dass Sie unsere Website besuchen und
                bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie
                über den Umgang mit Ihren personenbezogenen Daten bei der
                Nutzung unserer Website. Personenbezogene Daten sind hierbei
                alle Daten, mit denen Sie persönlich identifiziert werden
                können.
              </p>
              <p>
                1.2 Verantwortlicher für die Datenverarbeitung auf dieser
                Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
                Greenrise GmbH, Ringbahnstr. 22-30, 12099 Berlin, Deutschland,
                Tel.: 030/62856518, E-Mail: info@csc-maps.de. Der für die
                Verarbeitung von personenbezogenen Daten Verantwortliche ist
                diejenige natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
              <p>
                1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz
                der Übertragung personenbezogener Daten und anderer
                vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
                Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können
                eine verschlüsselte Verbindung an der Zeichenfolge „https://“
                und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">
              2) Datenerfassung beim Besuch unserer Website
            </p>
            <p className="policy_rule_content ps-3">
              <p>
                Bei der bloß informatorischen Nutzung unserer Website, also wenn
                Sie sich nicht registrieren oder uns anderweitig Informationen
                übermitteln, erheben wir nur solche Daten, die Ihr Browser an
                den Seitenserver übermittelt (sog. „Server-Logfiles“). Wenn Sie
                unsere Website aufrufen, erheben wir die folgenden Daten, die
                für uns technisch erforderlich sind, um Ihnen die Website
                anzuzeigen: Unsere besuchte Website Datum und Uhrzeit zum
                Zeitpunkt des Zugriffes Menge der gesendeten Daten in Byte
                Quelle/Verweis, von welchem Sie auf die Seite gelangten
                Verwendeter Browser Verwendetes Betriebssystem Verwendete
                IP-Adresse (ggf.: in anonymisierter Form) Die Verarbeitung
                erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                berechtigten Interesses an der Verbesserung der Stabilität und
                Funktionalität unserer Website. Eine Weitergabe oder
                anderweitige Verwendung der Daten findet nicht statt. Wir
                behalten uns allerdings vor, die Server-Logfiles nachträglich zu
                überprüfen, sollten konkrete Anhaltspunkte auf eine
                rechtswidrige Nutzung hinweisen.
              </p>
              <ul>
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
              </ul>
              <p>
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
                Basis unseres berechtigten Interesses an der Verbesserung der
                Stabilität und Funktionalität unserer Website. Eine Weitergabe
                oder anderweitige Verwendung der Daten findet nicht statt. Wir
                behalten uns allerdings vor, die Server-Logfiles nachträglich zu
                überprüfen, sollten konkrete Anhaltspunkte auf eine
                rechtswidrige Nutzung hinweisen.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">3) Cookies</p>
            <p className="policy_rule_content ps-3">
              <p>
                Um den Besuch unserer Website attraktiv zu gestalten und die
                Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir
                Cookies, also kleine Textdateien, die auf Ihrem Endgerät
                abgelegt werden. Teilweise werden diese Cookies nach Schließen
                des Browsers automatisch wieder gelöscht (sog.
                „Session-Cookies“), teilweise verbleiben diese Cookies länger
                auf Ihrem Endgerät und ermöglichen das Speichern von
                Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren
                Fall können Sie die Speicherdauer der Übersicht zu den
                Cookie-Einstellungen Ihres Webbrowsers entnehmen.
              </p>
              <p>
                Sofern durch einzelne von uns eingesetzte Cookies auch
                personenbezogene Daten verarbeitet werden, erfolgt die
                Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur
                Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im
                Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit.
                f DSGVO zur Wahrung unserer berechtigten Interessen an der
                bestmöglichen Funktionalität der Website sowie einer
                kundenfreundlichen und effektiven Ausgestaltung des
                Seitenbesuchs.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und einzeln über deren Annahme
                entscheiden oder die Annahme von Cookies für bestimmte Fälle
                oder generell ausschließen können.
              </p>
              <p>
                Bitte beachten Sie, dass bei Nichtannahme von Cookies die
                Funktionalität unserer Website eingeschränkt sein kann.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">4) Kontaktaufnahme</p>
            <p className="policy_rule_content ps-3">
              <p>
                Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular
                oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten
                im Falle der Nutzung eines Kontaktformulars erhoben werden, ist
                aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten
                werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens
                bzw. für die Kontaktaufnahme und die damit verbundene technische
                Administration gespeichert und verwendet.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
                berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß
                Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den
                Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage
                für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten
                werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht.
                Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt,
                dass der betroffene Sachverhalt abschließend geklärt ist und
                sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">
              5) Registrierung beim Portal bzw. Forum
            </p>
            <p className="policy_rule_content ps-3">
              <p>
                Sie können sich auf unserer Website unter Angabe von
                personenbezogenen Daten registrieren. Welche personenbezogenen
                Daten für die Registrierung verarbeitet werden, ergibt sich aus
                der Eingabemaske, die für die Registrierung verwendet wird. Wir
                verwenden für die Registrierung das sog.
                Double-opt-in-Verfahren, d. h. Ihre Registrierung ist erst
                abgeschlossen, wenn Sie zuvor Ihre Anmeldung über eine Ihnen zu
                diesem Zweck zugesandte Bestätigungs-E-Mail durch Klick auf den
                darin enthaltenem Link bestätigt haben. Falls Ihre
                diesbezügliche Bestätigung nicht binnen 24 Stunden erfolgt, wird
                Ihre Anmeldung automatisch aus unserer Datenbank gelöscht. Die
                Angabe der zuvor genannten Daten ist verpflichtend. Alle
                weiteren Informationen können Sie freiwillig durch Nutzung
                unseres Portals bereitstellen.
              </p>
              <p>
                Wenn Sie unser Portal nutzen, speichern wir Ihre zur
                Vertragserfüllung erforderlichen Daten, auch evtl. Angaben zur
                Zahlungsweise, bis Sie Ihren Zugang endgültig löschen. Weiterhin
                speichern wir die von Ihnen angegebenen freiwilligen Daten für
                die Zeit Ihrer Nutzung des Portals, soweit Sie diese nicht zuvor
                löschen. Alle Angaben können Sie im geschützten Kundenbereich
                verwalten und ändern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                DSGVO.
              </p>
              <p>
                Darüber hinaus speichern wir alle von Ihnen veröffentlichten
                Inhalte (wie z.B. öffentliche Beiträge, Pinnwandeinträge,
                Gästebucheintragungen, etc.), um die Website zu betreiben. Wir
                haben ein berechtigtes Interesse an der Bereitstellung der
                Website mit dem vollständigen User-Generated-Content. Die
                Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO. Wenn Sie
                Ihren Account löschen, bleiben Ihre öffentlichen Äußerungen,
                insbesondere im Forum, weiterhin für alle Leser sichtbar, Ihr
                Account ist jedoch nicht mehr abrufbar. Alle übrigen Daten
                werden in diesem Fall gelöscht.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">6) Kommentarfunktion</p>
            <p className="policy_rule_content ps-3">
              <p>
                Im Rahmen der Kommentarfunktion auf dieser Website werden neben
                Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des
                Kommentars und der von Ihnen gewählte Kommentatorenname
                gespeichert und auf dieser Website veröffentlicht. Ferner wird
                Ihre IP-Adresse mitprotokolliert und gespeichert. Diese
                Speicherung der IP-Adresse erfolgt aus Sicherheitsgründen und
                für den Fall, dass die betroffene Person durch einen abgegebenen
                Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte
                postet. Ihre E-Mailadresse benötigen wir, um mit Ihnen in
                Kontakt zu treten, falls ein Dritter Ihren veröffentlichten
                Inhalt als rechtswidrig beanstanden sollte.
              </p>
              <p>
                Rechtsgrundlagen für die Speicherung Ihrer Daten sind die Art. 6
                Abs. 1 lit. b und f DSGVO. Wir behalten uns vor, Kommentare zu
                löschen, wenn sie von Dritten als rechtswidrig beanstandet
                werden.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">
              7) Nutzung von Kundendaten zur Direktwerbung
            </p>
            <p className="policy_rule_content ps-3">
              <p>7.1 Anmeldung zu unserem E-Mail-Newsletter</p>
              <p>
                Wenn Sie sich zu unserem E-Mail Newsletter anmelden, übersenden
                wir Ihnen regelmäßig Informationen zu unseren Angeboten.
                Pflichtangabe für die Übersendung des Newsletters ist allein
                Ihre E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und
                wird verwendet, um Sie persönlich ansprechen zu können. Für den
                Versand des Newsletters verwenden wir das sog. Double Opt-in
                Verfahren. Dies bedeutet, dass wir Ihnen erst dann einen E-Mail
                Newsletter übermitteln werden, wenn Sie uns ausdrücklich
                bestätigt haben, dass Sie in den Empfang von Newsletter
                einwilligen. Wir schicken Ihnen dann eine Bestätigungs-E-Mail,
                mit der Sie gebeten werden durch Anklicken eines entsprechenden
                Links zu bestätigen, dass Sie künftig den Newsletter erhalten
                wollen.
              </p>
              <p>
                Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre
                Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß
                Art. 6 Abs. 1 lit. a DSGVO. Bei der Anmeldung zum Newsletter
                speichern wir Ihre vom Internet Service-Provider (ISP)
                eingetragene IP-Adresse sowie das Datum und die Uhrzeit der
                Anmeldung, um einen möglichen Missbrauch Ihrer E-Mail- Adresse
                zu einem späteren Zeitpunkt nachvollziehen zu können. Die von
                uns bei der Anmeldung zum Newsletter erhobenen Daten werden
                ausschließlich für Zwecke der werblichen Ansprache im Wege des
                Newsletters benutzt. Sie können den Newsletter jederzeit über
                den dafür vorgesehenen Link im Newsletter oder durch
                entsprechende Nachricht an den eingangs genannten
                Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Ihre
                E-Mailadresse unverzüglich in unserem Newsletter-Verteiler
                gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung
                Ihrer Daten eingewilligt haben oder wir uns eine darüber
                hinausgehende Datenverwendung vorbehalten, die gesetzlich
                erlaubt ist und über die wir Sie in dieser Erklärung
                informieren.
              </p>
              <p>7.2 Klaviyo</p>
              <p>
                Der Versand unserer E-Mail-Newsletter erfolgt über diesen
                Anbieter: Klaviyo, 225 Franklin St, Boston, MA 02110, USA
              </p>
              <p>
                Auf Basis unseres berechtigten Interesses an einem effektiven
                und nutzerfreundlichen Newsletter-Marketing geben wir Ihre bei
                der Newsletter-Anmeldung bereitgestellten Daten gem. Art. 6 Abs.
                1 lit. f DSGVO an diesen Anbieter weiter, damit dieser den
                Newsletterversand in unserem Auftrag übernimmt. Vorbehaltlich
                Ihrer ausdrücklichen Einwilligung gem. Art. 6 Abs. 1 lit. a
                DSGVO führt der Anbieter darüber hinaus eine statistische
                Erfolgsauswertung von Newsletter-Kampagnen mittels Web Beacons
                bzw. Zählpixel in den versendeten E-Mails durch, die
                Öffnungsraten und spezifische Interaktionen mit den Inhalten des
                Newsletters messen können. Dabei werden auch
                Endgeräteinformationen (z.B. Zeitpunkt des Aufrufs, IP-Adresse,
                Browsertyp und Betriebssystem) erhoben und ausgewertet, aber
                nicht mit anderen Datenbeständen zusammengeführt.
              </p>
              <p>
                Ihre Einwilligung zum Newsletter-Tracking können Sie jederzeit
                mit Wirkung für die Zukunft widerrufen. Wir haben mit dem
                Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der die
                Daten unserer Seitenbesucher schützt und eine Weitergabe an
                Dritte untersagt.
              </p>
              <p>
                Für die Übermittlung von Daten in die USA beruft sich der
                Anbieter auf Standardvertragsklauseln der Europäischen
                Kommission, welche die Einhaltung des europäischen
                Datenschutzniveaus sicherstellen sollen.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">8) Webanalysedienste</p>
            <p className="policy_rule_content ps-3">
              <p>
                MatomoDiese Webseite nutzt einen Webanalysedienst des folgenden
                Anbieters: InnoCraft Ltd., 150 Willis St, 6011 Wellington,
                Neuseeland, („Matomo“)Zum Schutz der Seitenbesucher verwendet
                Matomo eine sog. „config_id“, um verschiede Analysen der
                Seitennutzung innerhalb eines kurzen Zeitfensters von bis zu 24
                Stunden zu ermöglichen. Die „config_id“ des Seiten ist ein
                zufällig gesetzter, zeitlich begrenzter Hash einer begrenzten
                Menge von Einstellungen und Attributen des Besuchers. Die
                config_id oder der config-Hash ist eine Zeichenkette, die für
                einen Besucher auf der Grundlage seines Betriebssystems, seines
                Browsers, seiner Browser-Plugins, seiner IP-Adresse und seiner
                Browsersprache berechnet wird. Matomo verwendet kein Device
                Fingerprinting und verwendet für die Erstellung der „config_id“
                eine anonymisierte IP-Adresse des Seitenbesuchers.Sofern die so
                verarbeiteten Informationen personenbezogene Nutzerdaten
                umfassen, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. f
                DSGVO auf Basis unseres berechtigten Interesses an der
                statistischen Analyse des Nutzerverhaltens zu Optimierungs- und
                Marketingzwecken. Um einer Datenverarbeitung Ihrer Besucherdaten
                für die Zukunft zu widersprechen, stellen wir Ihnen eine
                gesonderte Widerspruchsmöglichkeit auf unserer Website
                bereit.Wir haben mit dem Anbieter einen
                Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                Weitergabe an Dritte untersagt.
              </p>
              <p>
                Sofern mit der Matomo-Technologie erhobene Daten (einschließlich
                Ihrer pseudonymisierten IP-Adresse) auf Servern von Matomo in
                Neuseeland übertragen und zu Nutzungsanalysezwecken verarbeitet
                werden, teilen wir mit, dass die Europäische Kommission für
                Neuseeland einen sog. Angemessenheitsbeschluss erlassen hat, der
                die Einhaltung europäischer Datenschutzstandards bei
                internationalen Datentransfers attestiert.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">9) Seitenfunktionalitäten</p>
            <p className="policy_rule_content ps-3">
              <p>Google Web Fonts</p>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                sogenannte Web Fonts des folgenden Anbieters: Google Ireland
                Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
              </p>
              <p>
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web
                Fonts in ihren Browser-Cache, um Texte und Schriftarten korrekt
                anzuzeigen und stellt eine direkte Verbindung zu den Servern des
                Anbieters her. Hierbei werden bestimmte Browserinformationen,
                einschließlich Ihrer IP-Adresse, an den Anbieter übermittelt.
                Daten können zudem übermittelt werden an: Google LLC, USA
              </p>
              <p>
                Die Verarbeitung von personenbezogenen Daten im Zuge der
                Verbindungsaufnahme mit dem Anbieter der Schriftarten wird nur
                dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO
                dazu Ihre ausdrückliche Einwilligung erteilt haben. Sie können
                Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen, indem Sie diesen Dienst über das auf der Webseite
                bereitgestellte „Cookie-Consent-Tool“ deaktivieren. Falls Ihr
                Browser keine Web Fonts unterstützt, wird eine Standardschrift
                von Ihrem Computer genutzt.
              </p>
              <p>
                Für die Übermittlung von Daten in die USA beruft sich der
                Anbieter auf Standardvertragsklauseln der Europäischen
                Kommission, welche die Einhaltung des europäischen
                Datenschutzniveaus sicherzustellen sollen.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">10) Tools und Sonstiges</p>
            <p className="policy_rule_content ps-3">
              <p>10.1 Google Maps</p>
              <p>
                Diese Webseite nutzt einen Online-Kartendienst des folgenden
                Anbieters: Google Maps (API) von Google Ireland Limited, Gordon
                House, 4 Barrow St, Dublin, D04 E5W5, Irland
              </p>
              <p>
                Google Maps ist ein Webdienst zur Darstellung von interaktiven
                (Land-)Karten, um geographische Informationen visuell
                darzustellen. Über die Nutzung dieses Dienstes wird Ihnen unser
                Standort angezeigt und eine etwaige Anfahrt erleichtert.
              </p>
              <p>
                Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte
                von Google Maps eingebunden ist, werden Informationen über Ihre
                Nutzung unserer Website (wie z.B. Ihre IP-Adresse) an Server von
                Google übertragen und dort gespeichert, hierbei kann es auch zu
                einer Übermittlung an die Server der Google LLC. in den USA
                kommen. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto
                bereitstellt, über das Sie eingeloggt sind oder ob ein
                Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden
                Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung
                mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor
                Aktivierung des Buttons ausloggen. Google speichert Ihre Daten
                (selbst für nicht eingeloggte Nutzer) als Nutzungsprofile und
                wertet diese aus.
              </p>
              <p>
                Die Erhebung, Speicherung und die Auswertung erfolgen gemäß Art.
                6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von
                Google an der Einblendung personalisierter Werbung,
                Marktforschung und/oder der bedarfsgerechten Gestaltung von
                Google-Websites. Ihnen steht ein Widerspruchsrecht gegen die
                Bildung dieser Nutzerprofile zu, wobei Sie sich für dessen
                Ausübung an Google wenden müssen. Wenn Sie mit der künftigen
                Übermittlung Ihrer Daten an Google im Rahmen der Nutzung von
                Google Maps nicht einverstanden sind, besteht auch die
                Möglichkeit, den Webdienst von Google Maps vollständig zu
                deaktivieren, indem Sie die Anwendung JavaScript in Ihrem
                Browser ausschalten. Google Maps und damit auch die
                Kartenanzeige auf dieser Internetseite kann dann nicht genutzt
                werden.
              </p>
              <p>
                Soweit rechtlich erforderlich, haben wir zur vorstehend
                dargestellten Verarbeitung Ihrer Daten Ihre Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können Ihre erteilte
                Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                Um Ihren Widerruf auszuüben, befolgen Sie bitte die vorstehend
                geschilderte Möglichkeit zur Vornahme eines Widerspruchs.
              </p>
              <p>10.2 FiboSearch</p>
              <p>
                Diese Webseite nutzt den Suchtechnologie-Dienst des folgenden
                Anbieters: Damian Góra Web Development, Dr. Adama Bilika 2/28,
                42-500 Będzin, Polen Für die Bereitstellung der Suchfunktion für
                Artikel über das Suchfeld und für die Navigation und Filter
                erhebt und speichert der Anbieter gewisse Nutzerinformationen
                (etwa die User- bzw. Session-ID) in anonymisierter Form.
              </p>
              <p>
                Sofern hierbei auch personenbezogene Daten verarbeitet werden,
                erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO auf
                Basis unseres berechtigten Interesses an der
                Zurverfügungstellung einer fehlertoleranten Suche nach Artikeln
                und mithin an einer optimalen Vermarktung unseres Angebots.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">11) Rechte des Betroffenen</p>
            <p className="policy_rule_content ps-3">
              <p>
                11.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem
                Verantwortlichen hinsichtlich der Verarbeitung Ihrer
                personenbezogenen Daten die nachstehenden Betroffenenrechte
                (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
                Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage
                verwiesen wird:
              </p>
              <ul>
                <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
                <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;
                </li>
                <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
                <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
                <li>
                  Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs.
                  3 DSGVO;
                </li>
                <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
              </ul>
              <p>11.2 Widerspruchsrecht</p>
              <p className="text-lowercase">
                WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE
                PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN
                BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE
                RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
                ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR
                DIE ZUKUNFT EINZULEGEN.
              </p>
              <p className="text-lowercase">
                MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
                VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG
                BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE
                FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN,
                GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE
                VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                RECHTSANSPRÜCHEN DIENT.
              </p>
              <p className="text-lowercase">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN
                AUSÜBEN. MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH,
                BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU
                DIREKTWERBEZWECKEN.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">
              12) Dauer der Speicherung personenbezogener Daten
            </p>
            <p className="policy_rule_content ps-3">
              <p>
                Die Dauer der Speicherung von personenbezogenen Daten bemisst
                sich anhand der jeweiligen Rechtsgrundlage, am
                Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand
                der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels-
                und steuerrechtliche Aufbewahrungsfristen). Bei der Verarbeitung
                von personenbezogenen Daten auf Grundlage einer ausdrücklichen
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die
                betroffenen Daten so lange gespeichert, bis Sie Ihre
                Einwilligung widerrufen.
              </p>
              <p>
                Existieren gesetzliche Aufbewahrungsfristen für Daten, die im
                Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher
                Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                verarbeitet werden, werden diese Daten nach Ablauf der
                Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht
                mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich
                sind und/oder unsererseits kein berechtigtes Interesse an der
                Weiterspeicherung fortbesteht. Bei der Verarbeitung von
                personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr
                Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei
                denn, wir können zwingende schutzwürdige Gründe für die
                Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                Freiheiten überwiegen, oder die Verarbeitung dient der
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
                Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                werden diese Daten so lange gespeichert, bis Sie Ihr
                Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.
              </p>
              <p>
                Sofern sich aus den sonstigen Informationen dieser Erklärung
                über spezifische Verarbeitungssituationen nichts anderes ergibt,
                werden gespeicherte personenbezogene Daten im Übrigen dann
                gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf
                sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
              </p>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
