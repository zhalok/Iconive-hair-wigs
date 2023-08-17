/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import flogo from "../Images/login/facebookicon.svg";
import glogo from "../Images/login/gmailicon.svg";
import logbanner from "../Images/login/signup.png";
import "../globalcss/style.css";
import "./Signup.css";
import { PulseLoader } from "react-spinners";
import axios from "../../utils/axios";
// import { auth, provider } from "../Login/config.js";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
export default function Signup() {
  const [googlelog, setGooglelog] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleEmailchange = (e) => {
    setemail(e.target.value);
  };

  const handlePassChange = (e) => {
    setpass(e.target.value);
    //console.log(pass);
  };

  // const handleSignup = e => {
  //     e.preventDefault();
  //        //console.log(email);
  //        //console.log(pass);

  //       createUserWithEmailAndPassword(auth,email,pass)
  //       .then((user)=>{
  //         setUser(user.user);
  //       }).catch((error)=>{
  //         console.log(error)
  //       })

  //   }
  // const handleGoogleLogin = (e) => {
  //   // console.log(email);
  //   // console.log(pass);
  //   signInWithPopup(auth, provider).then((data) => {
  //     setGooglelog(data.user.email);
  //     localStorage.setItem("email", data.user.email);
  //     console.log('login kor')
  //   });

  // };

  useEffect(() => {
    setGooglelog(localStorage.getItem("email"));
  });

  const googleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const signup = async () => {
    if (!firstName || !lastName || !email || !pass || !confirmPass) {
      alert("Please fill all necessary informations");
      return;
    }

    const signupInfo = {
      name: firstName + " " + lastName,
      email,
      password: pass,
      passwordConfirm: confirmPass,
    };

    try {
      setLoading(true);
      const response = await axios.post("/auth/signup", signupInfo);
      setLoading(false);
      setMessage("Please check email and confirm");
      // console.log(response.data);
    } catch (e) {
      // console.log()
      setLoading(false);
      setMessage("Email already exists");
      // alert(e);
    }
  };
  return (
    <>
      {/* {googlelog ? (
        <h2 className=" my-4 pt-5 text-center ">
          <span className="text-danger">Congratulation</span> Google lognin is
          Done !!!!
        </h2>
      ) : (
        <h2 className="my-4 text-center pt-5"> </h2>
      )}
      {
        user&&<><h2>Sign up successfully log in</h2> <button className="btn btn-info rounded-pill"><a className="text-decoration-none text-light px-3" href="/login">Now</a></button></>
      } */}
      <div className="text-center d-flex ">
        <div className="d-flex shadow-theme-sign mx-auto my-5 marginTopBot bg-signup">
          <div className="row mx-auto w-100 p-4 p-md-0">
            <div className="col-12 col-md-6 d-flex">
              <img
                src={logbanner}
                alt="login img"
                className="m-auto"
                width="100%"
              />
            </div>
            <div className="col-12 col-md-6 my-auto rounded-theme11">
              <Container className=" w-100 text-start">
                <p className="pt-5 ps-md-5 pb-0 mb-0 text-theme-dark  text-28 mx-auto ">
                  Create Your Account
                </p>
                <p className="ps-md-5">
                  Already a member?{" "}
                  <Link
                    to="/login"
                    className="text-dark pb-1 border-bottom border-dark text-decoration-none pb-1 ms-2 text-shadow"
                  >
                    Login Here
                  </Link>
                </p>
                <div className="px-md-5 py-5  text-center">
                  <form>
                    <div className="w-100 d-flex gap-2">
                      <input
                        type="text"
                        className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                    <br />
                    <input
                      type="email"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none   mx-auto"
                      placeholder="Enter Email"
                      value={email}
                      onChange={handleEmailchange}
                    />{" "}
                    <br />
                    <input
                      type="password"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                      placeholder="Password"
                      value={pass}
                      onChange={handlePassChange}
                    />
                    <br />
                    <input
                      type="password"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                      placeholder="Confirm Password"
                      value={confirmPass}
                      onChange={(e) => {
                        setConfirmPass(e.target.value);
                      }}
                    />
                    <br />
                    <p className="my-3 pb-2 text-14 text-theme-gray ">
                      <input
                        class="form-check-input me-2 bg-theme-check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      I accept terms and conditions and privacy policy.
                    </p>
                    {loading ? (
                      <PulseLoader />
                    ) : (
                      <button
                        type="submit"
                        className=" btn-theme-up btn  text-light px-5 py-2 mb-3 "
                        value="Sign Up"
                        // onClick={handleSignup}
                        onClick={(e) => {
                          e.preventDefault();
                          signup();
                        }}
                      >
                        Sign Up
                      </button>
                    )}
                    <div>
                      <small className="text-success">{message}</small>
                      <small className="text-danger">{error}</small>
                    </div>
                  </form>
                  <p className="my-3 text-14 text-theme-gray pb-2 ">
                    Or, sign up using
                  </p>
                  <div className="d-flex mx-auto text-center">
                    <span
                      // onClick={handleGoogleLogin}
                      className="mx-auto"
                    >
                      <img src={glogo} className="me-2" />
                      <img src={flogo} className="" />
                    </span>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      {/* {googlelog ? (
        <button
          className="btn btn-primary px-4 py-2 my-5 rounded"
          onClick={googleLogout}
        >
          Google Log out
        </button>
      ) : (
        <h2 className="my-4 text-center pt-5"></h2>
      )} */}
    </>
  );
}
