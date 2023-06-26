/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Profile.css";
import pps from ".././Images/profile/pps.svg";
import edit from ".././Images/profile/Myprofile/editicon.svg";
import add from ".././Images/profile/Myprofile/addicon.svg";

export default function MyProfile() {
  return (
    <div>
      <div className="w-100 ">
        <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
          <div className="w-100 d-flex border-bottom ">
            <div className="w-50 text-start ">
              <div className="d-flex pt-3">
                <p className="text-16 mb-0 border-end pe-2">Client Name</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-30 fw-bold">Clint Eastwood</p>

              <div className="d-flex pt-3">
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
              <p className="text-18">16 December, 1921</p>
            </div>
            <div className="w-50 ps-2 text-start">
              <div className="d-flex pt-3">
                <p className="text-16 mb-0 border-end pe-2">E-mail Address</p>
                <img src={edit} className="ms-2" alt="this is an icon" />
              </div>
              <p className="text-18">Eastwood2255@gmail.com</p>
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
          <p className="text-start text-22 fw-bold mt-4 mb-0 pb-0">
            Address Book
          </p>
          <div className="w-100 d-flex justify-content-between pb-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
