/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Customize.css";
import Subscription from "../../Components/Subscription/Subscription";
import BackupIcon from "@mui/icons-material/Backup";
import banner from "../../.././src/Components/Images/joinus/customize.webp";
import Select from "react-select";

const dropItemBusinessType = [
  {
    value: 1,
    label: "Professional salon",
  },
  {
    value: 2,
    label: "Stylists",
  },
  {
    value: 3,
    label: "Online store",
  },
  {
    value: 4,
    label: "Offline store",
  },

  {
    value: 5,
    label: "Others",
  },
];

export default function Customize() {
  const navigate = useNavigate();
  const [value, setValue] = useState(dropItemBusinessType.value);
  const DropAction = (e) => {
    setValue(e.label);
  };
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
            <p className="text-16 pt-4 px-md-5 px-3 text-just">
              At Iconive Hair Wigs, our custom section provides a personalized
              and luxurious experience. With our custom-made products service,
              you can tailor your wig to meet your unique desires. Simply share
              your preferences and expectations with our customer care
              specialist, and they will guide you through the entire process,
              ensuring you find the perfect wig that is exclusively designed for
              you.
            </p>

            <div className="p-md-5 p-3 pt-5">
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
                <div className="d-flex w-100 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Base Material</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Length </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 text-start my-3">
                  <p className="text-14 pt-1 mb-2 ms-3">Hair Material</p>
                  <div class="btn-group w-100">
                    <Select
                      className="w-100 text-14"
                      options={dropItemBusinessType}
                      onChange={DropAction}
                    />
                  </div>
                </div>
                <div className="w-100 text-start">
                  <p className="text-14 pt-1 mb-2 ms-3">Hair Colour</p>
                  <div class="btn-group w-100 ">
                    <Select
                      className="w-100 text-14"
                      options={dropItemBusinessType}
                      onChange={DropAction}
                    />
                  </div>
                </div>
                <div className="d-flex w-100 my-3 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Style</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Density </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex w-100 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Base Wave</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">
                      Percentage of Grey Hair{" "}
                    </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={dropItemBusinessType}
                        onChange={DropAction}
                      />
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
                these orders,{" "}
                <span className="fw-bold">
                  returns or exchanges are not accepted
                </span>
                . We strongly advise you to take accurate measurements to ensure
                a perfect fit for your custom hair system.{" "}
                <span className="fw-bold">
                  For a more Personalized Customization, please download Custom
                  Sheet
                </span>
                .
              </p>
              <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between px-5 my-4">
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
