/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./Profile.css";
import edit from ".././Images/profile/Myprofile/editicon.svg";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";

export default function MyProfile({ name, setName }) {
  // const [updateInfo, setUpdateInfo] = useState({});
  const [email, setEmail] = useState({
    value: "",
    editable: false,
  });
  const [gender, setGender] = useState({
    value: "",
    editable: false,
  });
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProfileInfo = async () => {
    try {
      const response = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // setProfileInfo(response.data.user);
      setName((prev) => {
        return { ...prev, value: response.data.user.name, editable: false };
      });
      setEmail((prev) => {
        return { ...prev, value: response.data.user.email, editable: false };
      });

      setGender((prev) => {
        return { ...prev, value: response.data.user.gender, editable: false };
      });
      // console.log(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };
  const updateInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.patch(
        "/users/me",
        {
          name: name.value,
          email: email.value,
          gender: gender.value,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
      // console.log(response.data);
      setEmail((prev) => {
        return { ...prev, value: response.data.user.email, editable: false };
      });
      setName((prev) => {
        return { ...prev, value: response.data.user.name, editable: false };
      });
      setGender((prev) => {
        return { ...prev, value: response.data.user.gender, editable: false };
      });

      setLoading(false);
      setShowUpdateButton(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  // useEffect(() => {
  //   setShowUpdateButton(true);
  // }, [name.editable, email.editable, gender.editable]);

  return (
    <div>
      <div className="w-100">
        <div className="border-bottom px-md-5 px-4 pt-4 pt-md-5 order-bg bg-light w-100 mx-auto">
          <div className="w-100 d-flex flex-column flex-lg-row border-bottom mb-5">
            <div className="w-50 text-start ">
              <>
                <div className="d-flex pt-md-3">
                  <p className="text-16 mb-0 border-end pe-2">Name</p>
                  <img
                    style={{
                      cursor: "pointer",
                    }}
                    src={edit}
                    className="ms-2"
                    alt="this is an icon"
                    onClick={() => {
                      setName((prev) => {
                        return { ...prev, editable: !prev.editable };
                      });
                      setShowUpdateButton(true);
                    }}
                  />
                </div>
                {name.editable ? (
                  <input
                    type="email"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none w-50"
                    placeholder="Email"
                    value={name.value}
                    onChange={(e) => {
                      setName((prev) => {
                        return { ...prev, value: e.target.value };
                      });
                    }}
                  />
                ) : (
                  <p className="text-30 fw-bold">{name.value}</p>
                )}
              </>

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
                      setEmail((prev) => {
                        return { ...prev, editable: !prev.editable };
                      });
                      setShowUpdateButton(true);
                    }}
                  />
                </div>
                {email.editable ? (
                  <input
                    type="email"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none w-50"
                    placeholder="Email"
                    value={email.value}
                    onChange={(e) => {
                      setEmail((prev) => {
                        return { ...prev, value: e.target.value };
                      });
                    }}
                  />
                ) : (
                  <p className="text-16 fw-bold">{email.value}</p>
                )}
              </>
            </div>
            <div className="w-50 ps-2 text-start">
              <>
                <div className="d-flex pt-4">
                  <p className="text-16 mb-0 border-end pe-2">Gender</p>
                  <img
                    style={{
                      cursor: "pointer",
                    }}
                    src={edit}
                    className="ms-2"
                    alt="this is an icon"
                    onClick={() => {
                      setGender((prev) => {
                        return { ...prev, editable: !prev.editable };
                      });
                      setShowUpdateButton(true);
                    }}
                  />
                </div>
                {gender.editable ? (
                  <select
                    value={gender.value}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      setGender((prev) => {
                        return { ...prev, value: e.target.value };
                      });
                    }}
                  >
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                ) : (
                  <p className="text-16 fw-bold">{gender.value}</p>
                )}
                {/* <p className="text-18">Male</p> */}
              </>
            </div>
          </div>

          {showUpdateButton && (
            <div
              className="w-100 pb-5 px-5 mx-auto"
              style={{ marginTop: "20px" }}
            >
              {loading ? (
                <PulseLoader />
              ) : (
                <button
                  className="bg-themeYellow btn text-light fw-bold mr-auto ml-auto px-5"
                  onClick={() => {
                    updateInfo();
                  }}
                >
                  Update
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
