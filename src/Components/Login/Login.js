/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../Images/logoblack.png";
import "../globalcss/style.css";
import "./Login.css";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import AuthContext from "../../Contexts/AuthContext";
import { PulseLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";
import flogo from "../Images/login/facebookicon.svg";
import glogo from "../Images/login/gmailicon.svg";
import logbanner from "../Images/login/login.png";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig.js";

// import {auth,provider} from './config.js'
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
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

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log("credentials from success", credential);
        // console.log("user", user);
        const { uid, email } = user;
        axios
          .post("/auth/login", {
            email,
            password: uid,
          })
          .then((response) => {
            Cookies.set("jwt", response.data.token);
            window.location.reload();
          })
          .catch((e) => {
            // console.log(e);\
            axios
              .post("/auth/signup", {
                email,
                password: uid,
                passwordConfirm: uid,
                name: user?.displayName,
                verified: user?.emailVerified,
              })
              .then((response) => {
                Cookies.set("jwt", response.data.token);
                window.location.reload();
              })
              .catch((e) => {
                console.log(e);
                toast.error(e?.response?.data?.message);
              });
          });

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

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
                src={logbanner}
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
                      <img
                        style={{
                          cursor: "pointer",
                        }}
                        src={glogo}
                        className="me-2"
                        onClick={() => {
                          googleLogin();
                        }}
                      />
                      {/* <GoogleLogin
                        onSuccess={responseMessage}
                        onError={errorMessage}
                      /> */}
                      <img src={flogo} className="" />
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
