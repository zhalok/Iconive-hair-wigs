import React from "react";
import "./Subscription.css";

export default function Subscription() {
  return (
    <>
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
              class="w-200 me-2 border-top-0 border-start-0 border-end-0 border-bottom border border-secondary text-10p"
              type="search"
              placeholder="  Your e-mail address"
              aria-label="Search"
            />
            <button class="btn btnsub  px-3" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
