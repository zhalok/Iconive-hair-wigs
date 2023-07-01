/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import banner from "../../.././src/Components/Images/joinus/joinusBanner.png";
import sq from "../../.././src/Components/Images/joinus/sqside.png";
import twenty from "../../.././src/Components/Images/joinus/20p.png";
import iconp from "../../.././src/Components/Images/joinus/joinp.png";
import info from "../../.././src/Components/Images/joinus/infojoin.png";
import style from "../../.././src/Components/Images/joinus/style.png";
import Subscription from "../../Components/Subscription/Subscription";
import s1 from "../../.././src/Components/Images/joinus/Group (1).png";
import s2 from "../../.././src/Components/Images/joinus/Group (2).png";
import s3 from "../../.././src/Components/Images/joinus/Group (3).png";
import s4 from "../../.././src/Components/Images/joinus/Group (4).png";
import "./Joinus.css";

export default function Joinus() {
  return (
    <>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>
      <div className="container py-5 text-start">
        <h2 className="mt-4 mb-4 fw-bold">Iconive Affiliate Programs</h2>
        <p>
          Calling all hair lovers! If you are an influencer, a hairstylist, a
          makeup artist or a beauty & fashion content creator on social media,
          the Iconive Affiliate Program might be for you! This program is
          completely free to join. We strive to help our affiliates grow with
          us, so you can create revenue or save money by sharing what Iconive
          has to offer with others.
        </p>

        <h3 className="mt-5 fw-bold">Select a Program:</h3>

        <div className="d-flex gap-5 py-3">
          <button className="px-5 py-2 btn  btn-join rounded-2">
            <a href="#everybody" className="text-decoration-none text-dark">
              FOR EVERYBODY
            </a>
          </button>
          <button className="px-5 py-2 btn  btn-join rounded-2">
            <a href="#influnce" className="text-decoration-none text-dark">
              FOR content creators
            </a>
          </button>
          <button className="px-5 py-2 btn  btn-join rounded-2">
            <a href="#style" className="text-decoration-none text-dark">
              FOR stylists
            </a>
          </button>
        </div>
      </div>

      <div id="everybody" className="bg-join">
        <div className="d-flex mx-auto w-100 container py-5">
          <div className="w-50 text-start my-auto">
            <h4 className="fw-bold">Referral Program:</h4>
            <p className="mb-5">
              Get up to 20% off on your next order by successfully referring
              three friends!
            </p>
            <div className="my-5">
              <img src={twenty} alt="" className="w-50" />
            </div>

            <button className="btn btn-join px-5 py-2 mt-5">JOIN NOW</button>
          </div>
          <div className="w-50 d-flex">
            <img src={sq} className="w-100 m-auto" alt="this is a picture" />
          </div>
        </div>
      </div>

      <div id="influnce" className="container mx-auto py-5">
        <div className="w-100 mb-5">
          <img src={info} alt="this is a banner" className="w-100" />
        </div>
        <div className="text-start">
          <h4 className="fw-bold">Influencer Affiliate Program:</h4>
          <p className="pb-5">
            Your opinions matter to us at New Times Hair. We value your personal
            reviews, videos, photos, and blogs, as they provide valuable insight
            and encouragement to others interested in transforming their lives.
            Share your experiences and help others make informed decisions.
          </p>

          <h5 className="fw-bold pt-5 pb-3">Benefits:</h5>
          <div className="d-flex flex-column gap-4 pb-5">
            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Exclusive coupon code to share with your followers and earn
                reward
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <div>
                <p className="my-auto ps-3">
                  5% - 10% commission for every qualified sale* made via your
                  referral link or code
                </p>
                <p className="text-komola ps-3">
                  *Qualified sale = a sale that was not returned or fraudulently
                  purchased, and that was purchased with a processed valid
                  payment
                </p>
              </div>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Opportunity to get featured on Iconive website and our social
                media
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Opportunity for further sponsorships and partnerships
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Exclusive coupon code to share with your followers and earn
                reward
              </p>
            </div>
          </div>

          <h5 className="fw-bold pt-5 pb-3">Ideally You Will Be:</h5>
          <div className="d-flex flex-column gap-4 pb-5">
            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Active on several social media platforms
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <div>
                <p className="my-auto ps-3">Have at least one social with:</p>
                <p className="text-komola ps-3">
                  Instagram: 3,000 + followers YouTube: 1,000+ subscribers
                  TikTok: 1000+ followers Blog: 2,000+ views on your blogs
                </p>
              </div>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Your content will be hair, fashion or beauty related
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                You'll follow Iconive social media channels (
                <span className="text-komola">essential!</span>)
              </p>
            </div>

            <div className="d-flex ">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>

              <div>
                <p className="ps-3 py-0 my-0"> Bonus points if:</p>
                <ul className="my-auto ">
                  <li className="">
                    You have experience with wigs, hair toppers, hair systems or
                    hair extensions
                  </li>
                  <li className="">
                    ·You have thin hair or hair loss, and you would like to
                    create content about it
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h5 className="fw-bold pt-5 pb-3">What We’d Like From You:</h5>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                To post at least 1 piece of UniWigs exclusive content on social
                media every month
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>

              <p className="my-auto ps-3">
                Include all the product info, your referral link, and your
                exclusive code in the post if your content is for YouTube
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                Please tag and @ uniwigs related accounts in your Instagram
                posts <br />
                UniWigs Instagram accounts: @uniwigs @uniwigs.helphair
                @uniwigs.humanhair @UniWigs.menhairsystems
              </p>
            </div>

            <div className="d-flex">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>
              <p className="my-auto ps-3">
                The content should be positive and encouraging. Please do not
                include any vulgar or sensitive words in the content
              </p>
            </div>

            <div className="d-flex ">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>

              <p className="ps-3 py-0 my-auto">
                All content should be emailed to market@uniwigs.com once you
                have posted
              </p>
            </div>

            <div className="d-flex ">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>

              <p className="ps-3 py-0 my-auto">
                Complimentary content creation product selection is limited to
                availability
              </p>
            </div>

            <div className="d-flex ">
              <span className="w-60 d-flex">
                <img src={iconp} alt="this is an icon" className=" m-auto" />
              </span>

              <p className="ps-3 py-0 my-auto">
                Any affiliate code posted on to a third-party coupon site will
                void the code and eligibility for commission payment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex container">
        <button className="px-5 py-2 btn btn-join me-auto  my-5">
          JOIN as influencer
        </button>
      </div>

      <div id="style" className="container pb-5 border-bottom">
        <img className="w-100" src={style} alt="this is a picture" />

        <h4 className="text-start fw-bold pt-5 pb-4">
          Join Iconive Stylist Program
        </h4>
        <div className="row">
          <div className="col-md-3 col-12 text-center p-4">
            <span className="mx-auto w-88 d-flex my-3">
              <img src={s1} className="w-50 m-auto" />
            </span>
            <p className="pt-4 fw-bold">Chance to get free hair samples</p>
          </div>

          <div className="col-md-3 col-12 text-center p-4">
            <span className="mx-auto w-88 d-flex my-3">
              <img src={s2} className="w-50 m-auto" />
            </span>
            <p className="pt-4 fw-bold">Exclusive coupon code</p>
          </div>

          <div className="col-md-3 col-12 text-center p-4">
            <span className="mx-auto w-88 d-flex my-3">
              <img src={s3} className="w-50 m-auto" />
            </span>
            <p className="pt-4 fw-bold">
              Get featured on Iconive website and social media
            </p>
          </div>

          <div className="col-md-3 col-12 text-center p-4">
            <span className="mx-auto w-88 d-flex my-3">
              <img src={s4} className="w-50 m-auto" />
            </span>
            <p className="pt-4 fw-bold">
              Get paid to refer clients by earning commission on purchases made
              with your affiliate link or exclusive coupon code.
            </p>
          </div>
        </div>
        <button className="px-5 py-2 btn btn-join mx-auto  my-5">
          JOIN as a stylist
        </button>
      </div>

      <Subscription />
    </>
  );
}
