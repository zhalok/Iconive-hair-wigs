import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../Images/logoblack.png";
import "../globalcss/style.css";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import AuthContext from "../../Contexts/AuthContext";
import { PulseLoader } from "react-spinners";
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
      window.location.reload();
    } catch (e) {
      console.log(e);
      setError("Invalid Credentials");
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
      <div className="text-center d-flex ">
        <div className="d-flex shadow-lg mx-auto my-5 marginTopBot">
          <div className="w-50 d-flex mx-4">
            <img src={logo} alt="login img" className="m-auto" width="50%" />
          </div>
          <div className="w-50">
            <Container className="border-start p-5">
              <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">
                Log-In
              </h4>
              <div className="my-5 ">
                <form>
                  <input
                    type="email"
                    className="form-control mx-auto"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailchange}
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control mx-auto"
                    placeholder="Password"
                    value={pass}
                    onChange={handlePassChange}
                  />
                  <br />
                  {loading ? (
                    <PulseLoader />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-dark px-5 py-2 text-light rounded-0"
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
                <p className="my-4 ">
                  New to Iconive ?
                  <Link to="/signup" className="ms-2">
                    Sign Up
                  </Link>
                </p>
                <button
                  // onClick={handleGoogleLogin}
                  className="btn-light my-2 px-5 py-2 btn shadow mb-5"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>
              </div>
            </Container>
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
