/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import "../globalcss/style.css";
import "./Login.css";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [googlelog, setGooglelog] = useState("");
  const [user, setUser] = useState("");

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("proceeedToCheckout"));

  const login = async () => {
    if (!email || !pass) {
      alert("Fill necessary Information");
      return;
    }
    try {
      setLoading(true);
      const loginInfo = {
        email,
        password: pass,
      };
      const response = await axios.post("/auth/login", loginInfo);
      Cookies.set("jwt", response.data.token);
      setLoading(false);
      if (searchParams.get("proceeedToCheckout") == "true") {
        navigate("/checkout");
        return;
      } else if (searchParams.get("redirect") == "wholesale") {
        navigate("/wholesale");
      }
      window.location.reload();
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
      // setError("Invalid Credentials");
      setLoading(false);
    }
  };

  const handleEmailchange = (e) => {
    setemail(e.target.value);
    // console.log(email);
  };
  const handlePassChange = (e) => {
    setpass(e.target.value);
    // console.log(pass);
  };

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      navigate("/Home");
    }
  }, []);

  useEffect(() => {
    setGooglelog(localStorage.getItem("email"));
  });

  const googleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <ToastContainer />
      <div className="text-center d-flex ">
        <div className="w-50p  d-flex flex-column flex-md-row shadow-theme-sign mx-auto my-5 bg-signup marginTopBot">
          <div className="row mx-auto w-100 p-4 p-md-0">
            <div className="col-12 col-md-6 d-flex p-0">
              <img
                src="./Image/login/login.png"
                alt="login img"
                className="m-auto "
                width="100%"
              />
            </div>
            <div className="col-12 col-md-6  rounded-theme11 my-auto ">
              <div className="marginTopLog w-100 text-start p-2">
                <p className="pt-5 ps-md-5 pb-0 mb-0 text-theme-dark  text-28 mx-auto ">
                  Login Here
                </p>
                <p className="ps-md-5 pt-1">
                  New to Iconive ?
                  <Link
                    to="/signup"
                    className="text-dark pb-1 border-bottom border-dark text-decoration-none pb-1 ms-2 text-shadow"
                  >
                    Sign Up
                  </Link>
                </p>
                <div className="text-center px-md-5 py-5 ">
                  <form>
                    <input
                      type="email"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailchange}
                    />
                    <br />
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto"
                      value={pass}
                      onChange={handlePassChange}
                    />
                    <br />
                    {loading ? (
                      <PulseLoader />
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-theme-up px-5 py-2 my-4 text-light "
                        value="Login"
                        // onClick={handleLogin}
                        onClick={() => {
                          login();
                        }}
                      >
                        Log in
                      </button>
                    )}
                  </form>
                  <small className="text-danger">{error}</small>

                  <div className="d-flex mx-auto text-center">
                    <span
                      // onClick={handleGoogleLogin}
                      className="mx-auto"
                    >
                      <img src="./Image/login/gmailicon.svg" className="me-2" />
                      <img src="./Image/login/facebookicon.svg" className="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
        googlelog?<button className="btn btn-primary px-4 py-2 my-5 rounded" onClick={googleLogout}>Google Log out</button>:<h2 className="my-4 text-center pt-5"></h2>
     } */}
    </>
  );
};

export default Login;
