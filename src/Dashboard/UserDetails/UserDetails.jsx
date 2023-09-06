import React, { useEffect, useState } from "react";
import "./UserDetails.css";

import { BsFillTrashFill } from "react-icons/bs";

import logoSmall from "../../assets/logo-small.png";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserDetails() {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const parts = path.split("/");
    setMemberId(parts[2]);
  }, [location]);

  const [memberData, setMemberData] = useState();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("admin")) || null;
    const fetchUserDetails = async () => {
      try {
        const bearerToken = savedUser?.token;
        const response = await axios.get(
          `http://127.0.0.1:9090/admin/dashboard/members-list/${memberId}`,
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        setMemberData(response.data.member);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };
    fetchUserDetails();
  }, [memberId]);

  const deleteMember = async () => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("admin")) || null;
      const bearerToken = savedUser?.token;

      await axios.delete(
        `http://127.0.0.1:9090/admin/dashboard/members/delete/${memberId}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      toast.success("Member deleted successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Redirect to a different page or perform any necessary action after deletion
      navigate("/dashboard"); // Redirect to the dashboard, for example
    } catch (error) {
      console.error("Failed to delete member:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main className="dashboard_container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                <Link to={"/dashboard"}>Nutzer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="users_list_container col-10 px-5 pt-5 d-flex align-items-center justify-content-center">
          <div className="user_details_box d-flex flex-column align-items-center">
            <div className="user_img mb-5">
              {/* <img src="" alt="" className="img-fluid" /> */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 27 28"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 0C16.3565 0 19.6692 1.8458 19.6584 5.53733C19.6544 6.92446 20.6611 6.25425 20.6611 8.23164C20.6611 9.25853 20.6182 9.93434 19.749 10.5095C19.149 11.1561 18.7261 11.9052 18.4802 12.7581C18.1777 13.8016 17.3537 14.6845 16.3158 15.3684V17.418C16.3158 17.9413 16.5635 18.4211 17.043 18.6512C22.9166 21.4697 27 21.8355 27 28H13.5H0C0 21.8355 4.08329 21.4697 9.95693 18.6512C10.4365 18.4211 10.6841 17.9413 10.6841 17.418V15.3684C9.6462 14.6845 8.82216 13.8016 8.51971 12.7581C8.27385 11.9053 7.85094 11.1561 7.25097 10.5095C6.38166 9.93434 6.33889 9.25853 6.33889 8.23164C6.33889 6.25425 7.34558 6.92452 7.34151 5.53733C7.3308 1.84586 10.6435 0 13.5 0Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="user_details_content mt-2">
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Öffentlicher Alias</span>
                <span className="user_detail_info">{memberData?.username}</span>
              </p>
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Vorname</span>
                <span className="user_detail_info">
                  {memberData?.firstname}
                </span>
              </p>
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Nachname</span>
                <span className="user_detail_info">{memberData?.lastname}</span>
              </p>
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Region</span>
                <span className="user_detail_info">{memberData?.region}</span>
              </p>
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Email</span>
                <span className="user_detail_info">{memberData?.email}</span>
              </p>
              <p className="user_detail row row-cols-2">
                <span className="user_detail_label">Telefonnummer</span>
                <span className="user_detail_info">
                  {memberData?.telephone}
                </span>
              </p>
            </div>
            <button
              className="btn user_delete_btn rounded-5 px-5 py-2 d-flex align-items-center text-light fw-semibold"
              onClick={deleteMember}
            >
              <BsFillTrashFill className="me-2" />
              LÖSCHEN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
