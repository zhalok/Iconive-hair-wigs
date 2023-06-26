/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./Profile.css";
import pps from ".././Images/profile/pps.svg";
import edit from ".././Images/profile/Myprofile/editicon.svg";
import add from ".././Images/profile/Myprofile/addicon.svg";
import axios from "../../utils/axios";
import Cookies from "js-cookie";

export default function MyProfile() {
  const [updateInfo, setUpdateInfo] = useState({});
  const [profileInfo, setProfileInfo] = useState({});

  const getProfileInfo = async () => {
    try {
      const response = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      setProfileInfo(response.data.user);
      console.log(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);
  return (
    <div>
      <div className="w-100 ">
        <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
          <div className="w-100 d-flex border-bottom ">
            <div className="w-50 text-start ">
              <>
                <div className="d-flex pt-3">
                  <p className="text-16 mb-0 border-end pe-2">Name</p>
                  <img
                    style={{
                      cursor: "pointer",
                    }}
                    src={edit}
                    className="ms-2"
                    alt="this is an icon"
                    onClick={() => {
                      setUpdateInfo((prev) => {
                        if (prev.name) {
                          return { ...prev, name: null };
                        } else {
                          return { ...prev, name: profileInfo.name };
                        }
                      });
                    }}
                  />
                </div>
                {updateInfo.name ? (
                  <input
                    type="email"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none w-fit"
                    placeholder="Email"
                    value={updateInfo.name}
                    onChange={(e) => {
                      setUpdateInfo({
                        ...updateInfo,
                        name: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <p className="text-30 fw-bold">{profileInfo.name}</p>
                )}
              </>

              {/* <div className="d-flex pt-3">
                <p className="text-16 mb-0 border-end pe-2">Shipping Address</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">
                221B Baker Street, London United Kingdom
              </p>
              <div className="d-flex pt-3">
                <p className="text-16 mb-0 border-end pe-2">Date of Birth</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">16 December, 1921</p> */}

              <>
                <div className="d-flex pt-3">
                  <p className="text-16 mb-0 border-end pe-2">E-mail Address</p>
                  <img
                    style={{
                      cursor: "pointer",
                    }}
                    src={edit}
                    className="ms-2"
                    alt="this is an icon"
                    onClick={() => {
                      setUpdateInfo((prev) => {
                        if (prev.email) {
                          return { ...prev, email: null };
                        } else {
                          return { ...prev, email: profileInfo.email };
                        }
                      });
                    }}
                  />
                </div>
                {updateInfo.email ? (
                  <input
                    type="email"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none w-fit"
                    placeholder="Email"
                    value={updateInfo.email}
                    onChange={(e) => {
                      setUpdateInfo({
                        ...updateInfo,
                        email: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <p className="text-16 fw-bold">{profileInfo.email}</p>
                )}
              </>
            </div>
            <div className="w-50 ps-2 text-start">
              <div className="d-flex pt-4">
                <p className="text-16 mb-0 border-end pe-2">Mobile Number</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">+44-20-7224-3688</p>
              <div className="d-flex pt-4">
                <p className="text-16 mb-0 border-end pe-2">Gender</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">Male</p>
            </div>
          </div>
          {/* <p className="text-start text-22 fw-bold mt-4 mb-0 pb-0">
            Address Book
          </p> */}

          {/* <div className="w-100 d-flex justify-content-between pb-5">
            <div className="w-40 text-start">
              <div className="d-flex pt-4">
                <p className="text-16 mb-0 border-end pe-2">Home</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">
                221B Baker Street, London United Kingdom
              </p>
            </div>
            <div className="w-40 text-start">
              <div className="d-flex pt-4">
                <p className="text-16 mb-0 border-end pe-2">Work</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">
                221B Baker Street, London United Kingdom
              </p>
            </div>
            <div className="w-20 text-start">
              <div className="pt-4">
                <p className="text-16 mb-0 border-end pe-2">
                  Add Another Address
                </p>
                <button className="btn">
                  <img src={add} className="ms-2" alt="this is an icon" />
                </button>
              </div>
            </div>
          </div> */}

          {Object.keys(updateInfo).length && (
            <div
              className="w-25 pb-5 px-5 mx-auto"
              style={{ marginTop: "20px" }}
            >
              <button
                className="w-100 bg-themeYellow btn text-light fw-bold mr-auto ml-auto"
                onClick={() => {
                  updateInfo();
                }}
              >
                Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
