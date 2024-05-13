import React, { useRef, useState } from "react";
import "./Subscription.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function Subscription() {
  const form = useRef();
  const [email, setemail] = useState(" ");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const templeteParams = {
      from_name: "user",
      from_email: email,
      to_name: "Iconive wigs",
      message: "SUBBSCRIPTION",
    };

    emailjs
      .send(
        "service_lnqsscx",
        "template_335e44l",
        templeteParams,
        "Ag41kIaMsu1Uqj2Cu"
      )
      .then((response) => {
        // console.log("sended", response);
        setemail("your e-mail address");
        toast.success("Your mail has been recieved");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="my90 d-flex flex-column p-3">
        <div className="d-flex flex-column overflow-hidden">
          <h2 className="fw-bold headingHover">
            WANT $ <span className="fs-1">10</span> OFF ?
          </h2>
          <p className="text-16 text-theme-gray pt-3 pb-4">
            Join us and get the exclusive sales, product launches, wig tips &
            more directly delivered to your inbox.
          </p>
        </div>
        <div class="d-flex justify-center mx-auto w-100">
          <div className="mx-auto w-100">
            <input
              class="w-200 me-2 border-top-0 border-start-0 border-end-0 border-bottom border border-secondary text-10p ps-2"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Your e-mail address"
            />
            <button onClick={sendEmail} class="btn btnsub  px-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
