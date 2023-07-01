/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Customize.css";
import T1 from "../../.././src/Components/Images/wholesale/section1/Group (1).png";
import T2 from "../../.././src/Components/Images/wholesale/section1/Group (8).png";
import T3 from "../../.././src/Components/Images/wholesale/section1/Group (2).png";
import T4 from "../../.././src/Components/Images/wholesale/section1/Group (3).png";
import T5 from "../../.././src/Components/Images/wholesale/section1/Group (4).png";
import T6 from "../../.././src/Components/Images/wholesale/section1/Group (5).png";
import T7 from "../../.././src/Components/Images/wholesale/section1/Group (6).png";
import T8 from "../../.././src/Components/Images/wholesale/section1/Group (7).png";
import TT1 from "../../.././src/Components/Images/wholesale/section2/Group (1).png";
import TT8 from "../../.././src/Components/Images/wholesale/section2/Group (8).png";
import TT2 from "../../.././src/Components/Images/wholesale/section2/Group (2).png";
import TT3 from "../../.././src/Components/Images/wholesale/section2/Group (3).png";
import TT4 from "../../.././src/Components/Images/wholesale/section2/Group (4).png";
import TT5 from "../../.././src/Components/Images/wholesale/section2/Group (5).png";
import TT6 from "../../.././src/Components/Images/wholesale/section2/Group (6).png";
import TT7 from "../../.././src/Components/Images/wholesale/section2/Group (7).png";
import TTT1 from "../../.././src/Components/Images/wholesale/section3/Group (1).png";
import TTT8 from "../../.././src/Components/Images/wholesale/section3/Group (8).png";
import TTT2 from "../../.././src/Components/Images/wholesale/section3/Group (2).png";
import TTT3 from "../../.././src/Components/Images/wholesale/section3/Group (3).png";
import TTT4 from "../../.././src/Components/Images/wholesale/section3/Group (4).png";
import TTT5 from "../../.././src/Components/Images/wholesale/section3/Group (5).png";
import TTT6 from "../../.././src/Components/Images/wholesale/section3/Group (6).png";
import TTT7 from "../../.././src/Components/Images/wholesale/section3/Group (7).png";
import Subscription from "../../Components/Subscription/Subscription";
import BackupIcon from "@mui/icons-material/Backup";
import banner from "../../.././src/Components/Images/joinus/joinusBanner.png";

export default function Customize() {
  return (
    <>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>

      {/* signup */}
      <div id="signup" className=" mt-5 bg-wholesale">
        <div className="w-50 m-auto rounded-theme11">
          <div className="pt-5 w-100 text-center ">
            <p className="pt-5  pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              Create Your Wholesale Account
            </p>

            <div className="p-5 text-center">
              <form>
                <div className="w-100 d-flex gap-2">
                  <input
                    type="text"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="First Name"
                    //   value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //   }}
                  />
                  <input
                    type="text"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="Last Name"
                    //   value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //   }}
                  />
                </div>
                <br />
                <input
                  type="email"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none   mx-auto"
                  placeholder="Enter Email"
                  // value={email}
                  // onChange={handleEmailchange}
                />{" "}
                <br />
                <input
                  type="password"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                  placeholder="Password"
                  // value={pass}
                  // onChange={handlePassChange}
                />
                <br />
                <input
                  type="password"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                  placeholder="Confirm Password"
                  // value={confirmPass}
                  // onChange={(e) => {
                  //   setConfirmPass(e.target.value);
                  // }}
                />
                <br />
                <input
                  type="number"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                  placeholder="Phone Number"
                  // value={confirmPass}
                  // onChange={(e) => {
                  //   setConfirmPass(e.target.value);
                  // }}
                />
                <br />
                <input
                  type="text"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none  mx-auto"
                  placeholder="Your Salon/Store Name"
                  // value={confirmPass}
                  // onChange={(e) => {
                  //   setConfirmPass(e.target.value);
                  // }}
                />
                <br />
                <div className="w-100 text-start">
                  <p className="text-14 pt-1 mb-2 ms-3">Country</p>
                  <div class="btn-group w-100">
                    <button
                      type="button"
                      class="btn btn-light w-100 dropdown-toggle text-start"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-100 text-start">
                  <p className="text-14 pt-3 mb-2 ms-3">Your Business is</p>
                  <div class="btn-group w-100 ">
                    <button
                      type="button"
                      class="btn btn-light w-100 dropdown-toggle text-start"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-100 text-start">
                  <p className="text-14 pt-3 mb-2 ms-3">
                    {" "}
                    The products you are interested in
                  </p>
                  <div class="btn-group w-100 ">
                    <button
                      type="button"
                      class="btn btn-light w-100 dropdown-toggle text-start"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-4 p-5 border-dotted mb-4">
                  <BackupIcon className="text-dark fs-2" />
                  <p className="my-1">Drag and Drop file here</p>
                  <p className="my-0 pb-4">File Supported : PNG , JPEG , JPG</p>
                  <input
                    accept=".jpg, .jpeg, .png"
                    type="file"
                    className=" "
                    placeholder="CHOOSE FILE"
                  />
                  <p className="pt-4">Maximum Size : 5 MB</p>
                </div>
                <p className="my-3 pb-2 text-14 text-theme-gray ">
                  <input
                    class="form-check-input me-2 bg-theme-check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  I accept terms and conditions and privacy policy.
                </p>
                {/* {loading ? (
                    <PulseLoader />
                  ) : ( */}
                <button
                  type="submit"
                  className=" btn-theme-up btn  text-light px-5 py-2 mb-3 "
                  value="Sign Up"
                  // onClick={handleSignup}
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     signup();
                  //   }}
                >
                  Sign Up
                </button>
                {/* )} */}
                {/* <small className="text-success">{message}</small>
                  <small className="text-danger">{error}</small> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Subscription />
    </>
  );
}
