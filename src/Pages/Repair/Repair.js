/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Subscription from "../../Components/Subscription/Subscription";
import banner from "../../.././src/Components/Images/joinus/joinusBanner.png";
import banner1 from "../../.././src/Components/Images/repair/repair1.png";
import banner2 from "../../.././src/Components/Images/repair/repair2.png";
import "./Repair.css";

export default function Repair() {
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
              At LC Wigs, we’re here to listen and correct any issues you are
              experiencing ASAP so that you can go back to feeling beautiful and
              confident in your wig.
            </p>

            <button className="mx-auto px-5 btn btn-theme-up text-light my-5">
              Schedule wig repair
            </button>
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
          utmost precision. This service is available for wigs made by LC Wigs
          as well as wigs purchased externally.
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
          new lace piece. This service is only available for wigs made by LC
          Wigs.
        </p>

        <p className="mx-auto text-secondary pt-5 mt-5">04</p>
        <h3 className=" mt-2 fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
          Resizing or Amending Cap
        </h3>
        <p className="text-18 pt-3 px-5  pb-5">
          Few people are trained in resizing a wig in a seamless manner for the
          most natural look and fit. This is a skill we have been professionally
          trained in and take much pride in offering to customers of LC Wigs.
        </p>
      </div>
      <div className="w-100 bg-wholesale">
        <div className="d-flex mx-auto container py-5">
          <div className="w-50 pb-5">
            <img src={banner1} alt="This is an image" className="w-100" />
          </div>
          <div className="w-50 my-auto px-5 text-start">
            <h3 className="fw-bold mb-4">Colouring Your Wig</h3>
            <p className="pb-2">
              Once we’ve achieved the ideal colour for your wig as part of our
              bespoke LC Wigs process, colour maintenance is recommended over
              the lifetime of your wig.
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
            <p>- Stacy, client of Iconive Hair Wigs</p>
          </div>
        </div>
      </div>

      <div className="bg-repair">
        <div className="row container d-flex my-auto mt-10p">
          <div className="col-4 my-auto ms-auto bg-light p-5 text-start rounded-3">
            <h3 className="fw-bold pb-3">Ask us a question</h3>
            <p>
              If you have any questions at all, big or small, please feel free
              to ask us.
            </p>

            <button className="btn btn-theme-up px-5 text-light text-uppercase rounded-3 mt-4">
              Get in touch
            </button>
            <button className="btn btn-secondary text-uppercase mt-4 px-5">
              schedule appointment
            </button>
          </div>
        </div>
      </div>
      <Subscription />
    </>
  );
}
