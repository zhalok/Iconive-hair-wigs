/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Customize.css";
import Subscription from "../../Components/Subscription/Subscription";
import BackupIcon from "@mui/icons-material/Backup";
import banner from "../../.././src/Components/Images/joinus/customize.webp";

export default function Customize() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>

      {/* signup */}
      <div id="signup" className=" bg-wholesale">
        <div className="w-50 m-auto rounded-theme11">
          <div className="pt-5 w-100 text-center ">
            <p className="pt-5  fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              CUSTOM A HAIR SYSTEM
            </p>
            <p className="text-16 pt-4 px-5 text-just">
              At Iconive Hair Wigs, our custom section provides a personalized
              and luxurious experience. With our custom-made products service,
              you can tailor your wig to meet your unique desires. Simply share
              your preferences and expectations with our customer care
              specialist, and they will guide you through the entire process,
              ensuring you find the perfect wig that is exclusively designed for
              you.
            </p>

            <div className="p-5 ">
              <form className="text-start">
                <input
                  type="text"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 text-black border-dark outline-none   mx-auto"
                  placeholder="Client  Name"
                  // value={email}
                  // onChange={handleEmailchange}
                />{" "}
                <br />
                <div className="w-100 d-flex gap-2">
                  <input
                    type="text"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="Order Quantity"
                    //   value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //   }}
                  />
                  <input
                    type="text"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="Base Size"
                    //   value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //   }}
                  />
                </div>
                <br />
                <div className="d-flex w-100">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Base Material</p>
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
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Length </p>
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
                </div>
                <div className="w-100 text-start my-3">
                  <p className="text-14 pt-1 mb-2 ms-3">Hair Material</p>
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
                  <p className="text-14 pt-1 mb-2 ms-3">Hair Colour</p>
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
                <div className="d-flex w-100 my-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Style</p>
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
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Density </p>
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
                </div>
                <div className="d-flex w-100 ">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Base Wave</p>
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
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">
                      Percentage of Grey Hair{" "}
                    </p>
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
                </div>
                <div className="my-4 w-100">
                  <textarea
                    className="w-100 border-0 mb-auto p-3 text-wrap h-333"
                    placeholder="Special Instructions"
                  />
                </div>
                {/* {loading ? (
                    <PulseLoader />
                  ) : ( */}
                <button
                  type="submit"
                  className=" btn-theme-up btn  text-light px-5 py-2 my-4 me-auto"
                  value="Sign Up"
                  // onClick={handleSignup}
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     signup();
                  //   }}
                >
                  SUBMIT
                </button>
                {/* )} */}
                {/* <small className="text-success">{message}</small>
                  <small className="text-danger">{error}</small> */}
              </form>

              <p className="text-just py-4">
                Custom orders at Iconive are specifically crafted to meet your
                unique needs and preferences. Due to the personalized nature of
                these orders, returns or exchanges are not accepted. We strongly
                advise you to take accurate measurements to ensure a perfect fit
                for your custom hair system. With Iconive, achieving your dream
                of a customized hair system that fulfills all your requirements
                and expectations is within reach.
              </p>
              <div className="d-flex justify-content-between px-5 my-4">
                <button className="btn-theme-up btn text-light px-5">
                  Download custom sheet
                </button>
                <button
                  onClick={() => {
                    navigate("/repair");
                  }}
                  className="btn btn-theme-up px-5 text-light"
                >
                  Apply for repair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscription />
    </>
  );
}
