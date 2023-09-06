import React, { useState } from "react";
import "./Dashboard.css";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Button, Form, InputGroup } from "react-bootstrap";

import logoSmall from "../assets/logo-small.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // const [password, setPassword] = useState("");
  // const [showForm, setShowForm] = useState(false);

  // const handlePasswordSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === "SmokeWeed23") {
  //     setShowForm(true);
  //   } else {
  //     alert("Incorrect password");
  //   }
  // };

  function PersonIcon() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 27 28"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5 0C16.3565 0 19.6692 1.8458 19.6584 5.53733C19.6544 6.92446 20.6611 6.25425 20.6611 8.23164C20.6611 9.25853 20.6182 9.93434 19.749 10.5095C19.149 11.1561 18.7261 11.9052 18.4802 12.7581C18.1777 13.8016 17.3537 14.6845 16.3158 15.3684V17.418C16.3158 17.9413 16.5635 18.4211 17.043 18.6512C22.9166 21.4697 27 21.8355 27 28H13.5H0C0 21.8355 4.08329 21.4697 9.95693 18.6512C10.4365 18.4211 10.6841 17.9413 10.6841 17.418V15.3684C9.6462 14.6845 8.82216 13.8016 8.51971 12.7581C8.27385 11.9053 7.85094 11.1561 7.25097 10.5095C6.38166 9.93434 6.33889 9.25853 6.33889 8.23164C6.33889 6.25425 7.34558 6.92452 7.34151 5.53733C7.3308 1.84586 10.6435 0 13.5 0Z"
          fill="#000"
        />
      </svg>
    );
  }

  const users = [
    {
      uname: "Unknown",
      fname: "Unknown",
      lname: "Unknown",
      region: "Aachen",
      email: "unknown@gmail.com",
      telephone: "+4917683174731",
    },
    {
      uname: "Unknown",
      fname: "Unknown",
      lname: "Unknown",
      region: "Aachen",
      email: "unknown@gmail.com",
      telephone: "+4917683174731",
    },
    {
      uname: "Unknown",
      fname: "Unknown",
      lname: "Unknown",
      region: "Aachen",
      email: "unknown@gmail.com",
      telephone: "+4917683174731",
    },
    {
      uname: "Unknown",
      fname: "Unknown",
      lname: "Unknown",
      region: "Aachen",
      email: "unknown@gmail.com",
      telephone: "+4917683174731",
    },
  ];

  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  //   if (!showForm) {
  //     return (
  //       <div className="password_container">
  //         <div className="password_field">
  //           <div className="w-100">
  //             <h1 className="fw-bold">Enter Password</h1>
  //             <Form onSubmit={handlePasswordSubmit} className="dashboard__form">
  //               <Form.Group controlId="password">
  //                 <InputGroup className="w-50 mx-auto">
  //                   <Form.Control
  //                     type={showPassword ? "text" : "password"}
  //                     value={password}
  //                     onChange={(e) => setPassword(e.target.value)}
  //                   />
  //                   <Button
  //                     type="button"
  //                     onClick={togglePasswordVisibility}
  //                     className="btn btn-success"
  //                   >
  //                     {showPassword ? (
  //                       <AiFillEyeInvisible size={25} />
  //                     ) : (
  //                       <AiFillEye size={25} />
  //                     )}
  //                   </Button>
  //                 </InputGroup>
  //               </Form.Group>
  //               <Button type="submit" variant="success" className="w-25">
  //                 Submit
  //               </Button>
  //             </Form>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  return (
    <main className="dashboard_container">
      <section className="users_dash row">
        <div className="sidebar p-0 col-2">
          <div className="sidebar_logo d-flex align-items-center">
            <Link to={"/"}>
              <img src={logoSmall} alt="logo" className="img-fluid" />
            </Link>
          </div>
          <div className="sidebar_links">
            <ul>
              <li>
                <div className="sidebar_link_icon me-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 27 28"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5 0C16.3565 0 19.6692 1.8458 19.6584 5.53733C19.6544 6.92446 20.6611 6.25425 20.6611 8.23164C20.6611 9.25853 20.6182 9.93434 19.749 10.5095C19.149 11.1561 18.7261 11.9052 18.4802 12.7581C18.1777 13.8016 17.3537 14.6845 16.3158 15.3684V17.418C16.3158 17.9413 16.5635 18.4211 17.043 18.6512C22.9166 21.4697 27 21.8355 27 28H13.5H0C0 21.8355 4.08329 21.4697 9.95693 18.6512C10.4365 18.4211 10.6841 17.9413 10.6841 17.418V15.3684C9.6462 14.6845 8.82216 13.8016 8.51971 12.7581C8.27385 11.9053 7.85094 11.1561 7.25097 10.5095C6.38166 9.93434 6.33889 9.25853 6.33889 8.23164C6.33889 6.25425 7.34558 6.92452 7.34151 5.53733C7.3308 1.84586 10.6435 0 13.5 0Z"
                      fill="#FDFEFD"
                    />
                  </svg>
                </div>
                <span>Nutzer</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="users_list_container col-10 px-5 pt-5">
          <h2 className="users_list_header text-start fw-bold">NUTZER</h2>
          <div className="users_list_filters d-flex justify-content-end">
            <Form.Select className="users_list_filter me-5 border rounded-5">
              <option>Region</option>
              <option className="users_list_filter_option" value="Aachen">
                Aachen
              </option>
              <option className="users_list_filter_option" value="Düsseldorf">
                Düsseldorf
              </option>
              <option className="users_list_filter_option" value="Erkelenz">
                Erkelenz
              </option>
              <option className="users_list_filter_option" value="Köln">
                Köln
              </option>
              <option
                className="users_list_filter_option"
                value="Mönchengladbach"
              >
                Mönchengladbach
              </option>
            </Form.Select>
            <button className="btn btn-success border rounded-5 users_list_filters_button">
              Suchen
            </button>
          </div>
          <div className="users_list mt-5">
            {users.map((usr, index) => (
              <div className="user_box row p-3" key={index}>
                <p className="user_info col-1 border-end">
                  <div className="user_icon">
                    <PersonIcon />
                  </div>
                </p>
                <p className="user_info col border-end">{usr.uname}</p>
                <p className="user_info col border-end">{usr.fname}</p>
                <p className="user_info col border-end">{usr.lname}</p>
                <p className="user_info col border-end">{usr.region}</p>
                <p className="user_info col-1">
                  <button className="btn user_info_btn">
                    <IoIosArrowDroprightCircle size={30} color={"#198754"} />
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
