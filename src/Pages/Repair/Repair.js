/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom";
import Subscription from "../../Components/Subscription/Subscription";
import banner from "../../.././src/Components/Images/joinus/repair.webp";
import banner1 from "../../.././src/Components/Images/repair/repair1.png";

import "./Repair.css";

export default function Repair() {
  const usenavigate = useNavigate();
  return (
    <>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>

      {/* signup */}
      <div id="signup" className=" bg-wholesale">
        <div className="w-50 m-auto rounded-theme11">
          <div className="pt-5 w-100 text-center ">
            <h3 className="pt-5  fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              We made your wig, so we know exactly how to get it feeling just
              right once again.
            </h3>
            <p className="text-18 pt-4 px-5  mt-5">
              One of the perks of providing an end-to-end wig repair service
              here in Melbourne, is that we have the expertise to make any
              adjustments and repairs needed – on-site, without delay. You can
              kiss interstate/international wig services goodbye!
            </p>
            <p className="text-18 pt-4 px-5 ">
              At Iconive Wigs, we’re here to listen and correct any issues you
              are experiencing ASAP so that you can go back to feeling beautiful
              and confident in your wig.
            </p>

            <button
              type="button"
              className="mx-auto px-5 btn btn-theme-up text-light my-5"
              data-bs-toggle="modal"
              data-bs-target="#repairModal1"
            >
              Schedule wig repair
            </button>

            <div
              class="modal fade"
              id="repairModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title " id="exampleModalLabel">
                      REPAIR WITH US!!!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-start d-flex flex-column">
                    <h5 className=" my-4">
                      When it comes to wig repairs, trust us to revitalize and
                      renew your wigs.
                    </h5>
                    <p className="fw-bold mt-4">Step 1: Document the Issues</p>
                    <p>
                      <small>
                        Gather the wig or wigs that you want to repair. Make
                        sure they are clean and free from any styling products
                        or adhesives. Before you proceed, carefully examine your
                        wig(s) and document the specific issues that need
                        repair. This might include hair loss, tears in the lace,
                        damaged cap, or any other problems. provide a detailed
                        description of the problems you documented. Be as
                        specific as possible so that our team can understand the
                        issues clearly. If possible, attach clear photos of the
                        wig(s) from different angles to help us assess the
                        condition more accurately. Photos are highly recommended
                        but not mandatory.
                      </small>
                    </p>
                    <p className="fw-bold mt-4">
                      Step 2: Send the Email or WhatsApp us
                    </p>
                    <p>
                      <small>
                        Make sure to include your full name, phone number,
                        address and any other relevant contact information so
                        that we can reach out to you. Provide a detailed
                        description of the problems you documented. Be as
                        specific as possible so that our team can understand the
                        issues clearly. If possible, attach clear photos of the
                        wig(s) from different angles to help us assess the
                        condition more accurately. Double-check your email to
                        ensure that you have provided all the necessary
                        information. Send your mail with all the necessary
                        information at repair@iconivewigs.com.
                      </small>
                    </p>
                    <p className="fw-bold mt-4">Step 3:Await Our Response</p>
                    <p>
                      <small>
                        After sending the email or texting in WhatsApp, our team
                        will review your request and get in touch with you. We
                        will discuss the repair process, provide a cost estimate
                        (if applicable), and guide you on how to send your
                        wig(s) to us safely.
                      </small>
                    </p>
                    <button class="btn btn-primary px-5 mx-auto mt-3 rounded-1">
                      <a
                        href="https://mail.google.com/mail/"
                        className="text-decoration-none text-dark"
                        type="button"
                      >
                        Go for Mail
                      </a>
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <p className="mx-auto text-secondary pt-5 mt-5">01</p>
        <h3 className=" mt-2 fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
          Adding Hair to a Skin Top Wig
        </h3>
        <p className="text-18 pt-3 px-5  ">
          Adding hair to a skin top wig can bring your wig back to life, and
          often looking almost brand new! We do this by adding each hair with
          utmost precision. This service is available for wigs made by Iconive
          Wigs as well as wigs purchased externally.
        </p>

        <p className="mx-auto text-secondary pt-5 mt-5">02</p>
        <h3 className=" mt-2 fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
          Adding Hair to a Lace Top Wig
        </h3>
        <p className="text-18 pt-3 px-5  ">
          Adding hair to a lace top wig is a practiced skill and must to be done
          carefully to maximise the most natural look. The complexity and time
          required is largely dependant on the condition of the lace and the
          area that needs to be filled. We recommend that you bring your wig in
          for repair as soon as you begin to notice the lace balding, before the
          area to fill in becomes too large.
        </p>

        <p className="mx-auto text-secondary pt-5 mt-5">03</p>
        <h3 className=" mt-2 fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
          Lace Wig Repair
        </h3>
        <p className="text-18 pt-3 px-5  ">
          The repair of ripped lace is assessed on a case-by-case basis. The
          possibility of repair depends on the placement of the rip. We will
          advise you if the lace can be repaired or if it is best to invest in a
          new lace piece. This service is only available for wigs made by
          Iconive Wigs.
        </p>

        <p className="mx-auto text-secondary pt-5 mt-5">04</p>
        <h3 className=" mt-2 fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
          Resizing or Amending Cap
        </h3>
        <p className="text-18 pt-3 px-5  pb-5">
          Few people are trained in resizing a wig in a seamless manner for the
          most natural look and fit. This is a skill we have been professionally
          trained in and take much pride in offering to customers of Iconive
          Wigs.
        </p>
      </div>
      <div className="w-100 bg-wholesale">
        <div className="d-flex mx-auto container py-5 flex-column flex-lg-row">
          <div className="w-50 pb-5 ws-100">
            <img src={banner1} alt="This is an image" className="w-100" />
          </div>
          <div className="w-50 my-auto px-md-5 px-3 text-start ws-100">
            <h3 className="fw-bold mb-4 text-center">Colouring Your Wig</h3>
            <p className="pb-2">
              Once we’ve achieved the ideal colour for your wig as part of our
              bespoke Iconive Wigs process, colour maintenance is recommended
              over the lifetime of your wig.
            </p>
            <p>
              Just like with your bio hair, colour naturally fades or loses tone
              with regular use and sun exposure. We’re here when you need us to
              take the colour right back to its original state, or make any
              necessary repairs.
            </p>

            <h5 className="fw-bold text-lightY fst-italic">
              I can’t tell you how much I love my colour, thank you!
            </h5>
            <p>- Stacy, client of Iconive Wigs</p>
          </div>
        </div>
      </div>

      <div className="bg-repair d-flex mx-auto  ">
        <div className="container row d-flex  justify-content-end">
          <div className="col-12 col-md-4 ws-100 my-auto bg-light p-5 text-start rounded-3 position-box ">
            <h3 className="fw-bold pb-3">Ask us a question</h3>
            <p>
              If you have any questions at all, big or small, please feel free
              to ask us.
            </p>

            <button className="btn btn-theme-up px-5 text-light text-uppercase rounded-3 mt-4 w-100 t">
              Get in touch
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#repairModal12"
              className="btn btn-secondary text-uppercase mt-4 px-5 w-100"
            >
              schedule appointment
            </button>

            <div
              class="modal fade"
              id="repairModal12"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title " id="exampleModalLabel">
                      REPAIR WITH US!!!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-start d-flex flex-column ">
                    <h5 className=" my-4">
                      When it comes to wig repairs, trust us to revitalize and
                      renew your wigs.
                    </h5>
                    <p className="fw-bold mt-4">Step 1: Document the Issues</p>
                    <p>
                      <small>
                        Gather the wig or wigs that you want to repair. Make
                        sure they are clean and free from any styling products
                        or adhesives. Before you proceed, carefully examine your
                        wig(s) and document the specific issues that need
                        repair. This might include hair loss, tears in the lace,
                        damaged cap, or any other problems. provide a detailed
                        description of the problems you documented. Be as
                        specific as possible so that our team can understand the
                        issues clearly. If possible, attach clear photos of the
                        wig(s) from different angles to help us assess the
                        condition more accurately. Photos are highly recommended
                        but not mandatory.
                      </small>
                    </p>
                    <p className="fw-bold mt-4">
                      Step 2: Send the Email or WhatsApp us
                    </p>
                    <p>
                      <small>
                        Make sure to include your full name, phone number,
                        address and any other relevant contact information so
                        that we can reach out to you. Provide a detailed
                        description of the problems you documented. Be as
                        specific as possible so that our team can understand the
                        issues clearly. If possible, attach clear photos of the
                        wig(s) from different angles to help us assess the
                        condition more accurately. Double-check your email to
                        ensure that you have provided all the necessary
                        information. Send your mail with all the necessary
                        information at repair@iconivewigs.com.
                      </small>
                    </p>
                    <p className="fw-bold mt-4">Step 3:Await Our Response</p>
                    <p>
                      <small>
                        After sending the email or texting in WhatsApp, our team
                        will review your request and get in touch with you. We
                        will discuss the repair process, provide a cost estimate
                        (if applicable), and guide you on how to send your
                        wig(s) to us safely.
                      </small>
                    </p>
                    <button class="btn btn-primary px-5 mx-auto mt-3 rounded-1">
                      <a
                        href="https://mail.google.com/mail/"
                        className="text-decoration-none text-light"
                        type="button"
                      >
                        Go for Mail
                      </a>
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
    </>
  );
}
