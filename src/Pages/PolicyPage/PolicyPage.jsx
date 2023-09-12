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
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">1) Lorem Ipsum</p>
            <p className="policy_rule_content ps-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit lectus ut ante imperdiet, in commodo elit blandit.
                Curabitur eget felis odio. Donec rhoncus dolor ac vestibulum.
              </p>
              <p>
                Pellentesque at congue velit. Vestibulum id justo eu elit
                malesuada bibendum. Nullam nec urna quis quam iaculis
                scelerisque. Vestibulum tincidunt vehicula fermentum. Nulla
                facilisi.
              </p>
              <p>
                Nulla facilisi. Maecenas condimentum tincidunt nulla, vel
                bibendum justo volutpat id. Proin varius erat nec tellus
                bibendum, quis venenatis quam volutpat. Duis iaculis urna eget
                libero finibus, sit amet vestibulum erat vulputate. Proin non
                varius erat, eget venenatis lorem.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">2) Lorem Ipsum</p>
            <p className="policy_rule_content ps-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit lectus ut ante imperdiet, in commodo elit blandit.
                Curabitur eget felis odio. Donec rhoncus dolor ac vestibulum.
              </p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <p>
                Nulla facilisi. Maecenas condimentum tincidunt nulla, vel
                bibendum justo volutpat id. Proin varius erat nec tellus
                bibendum, quis venenatis quam volutpat. Duis iaculis urna eget
                libero finibus, sit amet vestibulum erat vulputate. Proin non
                varius erat, eget venenatis lorem.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">3) Lorem Ipsum</p>
            <p className="policy_rule_content ps-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit lectus ut ante imperdiet, in commodo elit blandit.
                Curabitur eget felis odio. Donec rhoncus dolor ac vestibulum.
              </p>
              <p>
                Nulla facilisi. Maecenas condimentum tincidunt nulla, vel
                bibendum justo volutpat id. Proin varius erat nec tellus
                bibendum, quis venenatis quam volutpat. Duis iaculis urna eget
                libero finibus, sit amet vestibulum erat vulputate. Proin non
                varius erat, eget venenatis lorem.
              </p>
            </p>
          </div>
          <div className="policy_rule text-start px-sm-5 px-3">
            <p className="policy_rule_title">4) Lorem Ipsum</p>
            <p className="policy_rule_content ps-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit lectus ut ante imperdiet, in commodo elit blandit.
                Curabitur eget felis odio. Donec rhoncus dolor ac vestibulum.
              </p>
              <p>
                Nulla facilisi. Maecenas condimentum tincidunt nulla, vel
                bibendum justo volutpat id. Proin varius erat nec tellus
                bibendum, quis venenatis quam volutpat. Duis iaculis urna eget
                libero finibus, sit amet vestibulum erat vulputate. Proin non
                varius erat, eget venenatis lorem.
              </p>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
