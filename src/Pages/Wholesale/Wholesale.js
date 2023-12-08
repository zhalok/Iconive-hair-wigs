/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wholesale.css";
import Subscription from "../../Components/Subscription/Subscription";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import AuthContext from "../../Contexts/AuthContext";
import { PulseLoader } from "react-spinners";

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
const dropItemProducts = [
  {
    value: 1,
    label: "Hair toppers for women",
  },
  {
    value: 2,
    label: "Wigs for women",
  },
  {
    value: 3,
    label: "wigs & toppers for women",
  },
  {
    value: 4,
    label: "Men hair systems",
  },

  {
    value: 5,
    label: "Extentions",
  },
  {
    value: 6,
    label: "All mentioned above",
  },
  {
    value: 7,
    label: "others",
  },
];

export default function Wholesale() {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  // const { auth, setAuth } = useContext(AuthContext);
  // const {user,setUser} = AuthContext
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // console.log("Auth", auth);

  // console.log(value);
  const [isRequested, setIsRequested] = useState(false);

  console.log("isRequested", isRequested);
  console.log("loading", loading);

  const DropAction = (e) => {
    setValue(e.label);
  };

  const navigate = useNavigate();

  const submitRequest = async () => {
    if (!user) {
      // console.log(auth);
      navigate("/login?redirect=wholesale");
      return;
    }

    if (!contact || !email) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "/wholesale/createRequest",
        {
          contact,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
      console.log(response.data);
      setContact("");
      setIsRequested(false);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  // useEffect(() => {
  //   console.log("user", user);
  //   console.log(user?.isWholeSaler);
  // }, []);

  if (user?.isWholeSaler) {
    navigate("/wholesalehome");
    return <></>;
  }
  return (
    <>
      <div className="w-100">
        <img
          src="./Image/joinus/wholesale.webp"
          className="w-100"
          alt="this is a banner"
        />
      </div>
      <div className="container my-5 bg-wholesale">
        <div className="w-50   rounded-theme11 m-auto ">
          <div className=" w-100 text-center">
            <p className="pt-5 ps-5 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              WANTO TO BE A WHOLESALER?
            </p>
            {/* <p className="ps-5 pt-1 text-14">Want to be a wholesaler?</p> */}
            <div className="text-center p-5 ">
              <form>
                {/* <input
                  type="email"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto"
                  placeholder="Email"
                  // value={email}
                  // onChange={handleEmailchange}
                />
                <br />
                */}
                {isRequested && !loading && (
                  <div
                    className="flex flex-column gap-5"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                )}
                <br />

                {!loading ? (
                  <button
                    type="submit"
                    className="btn btn-theme-up px-5 py-2 my-4 text-light text-boldz"
                    style={{
                      textEmphasis: true,
                    }}
                    onClick={(e) => {
                      // navigate("/wholesalehome");
                      e.preventDefault();
                      !isRequested ? setIsRequested(true) : submitRequest();
                    }}
                  >
                    {!isRequested
                      ? "Request for wholeseller certificate"
                      : "Request"}
                  </button>
                ) : (
                  <PulseLoader />
                )}

                {/* <p className="text-center pt-1">
                  Not a member?
                  <a
                    href="#signup"
                    className="text-dark pb-1 border-bottom border-dark text-decoration-none pb-1 ms-2 text-shadow"
                  >
                    Sign Up Here
                  </a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div className="mx-auto my-5 container">
        <nav className="w-100 pt-5 d-flex ">
          <div
            class="nav nav-tabs w-100 d-flex justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active text-black"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Wholesaler and Distributor
            </button>
            <button
              class="nav-link text-black"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Online Retailer
            </button>
            <button
              class="nav-link text-black"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Hair Stylist or Salon Owner
            </button>
          </div>
        </nav>
        <div
          class="tab-content border-start border-end border-bottom"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active  p-4"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (1).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  Extremely Competitive SVIP Wholesale Price
                </p>
                <p className="text-16 text-just">
                  Iconive Hair provides special discounted pricing on hair
                  systems for clients who place bulk orders. By taking advantage
                  of our competitive wholesale prices, you can ensure that your
                  service remains competitive in the market while enjoying the
                  advantages of increased revenue.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (8).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  Special Discount for Sample Orders
                </p>
                <p className="text-16 text-just">
                  Iconive Hair extends a generous discount for your initial
                  sample order, even if you choose to order just one piece. We
                  believe in giving you the opportunity to experience the
                  quality of our hair systems at a minimal cost and with zero
                  risk to you.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (2).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Consistent Top Product Quality</p>
                <p className="text-16 text-just">
                  With our rigorous quality inspection system, we guarantee
                  consistent quality throughout production. By offering our
                  products, you can build your brand's reputation and foster
                  business growth
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (3).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Exceptional Production Capacity</p>
                <p className="text-16 text-just">
                  In addition to an advanced supply chain system, we have a high
                  production capacity that’s capable of producing up to 150,000
                  hair systems per year.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (4).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  24/7 Highly Specialized Client Service Team
                </p>
                <p className="text-16 text-just">
                  At Iconive Hair Wigs, our dedicated client service team is
                  available round the clock, 24/7. They are highly experienced
                  and proficient in multiple languages such as English, French,
                  German, and Spanish. Count on them to provide swift assistance
                  and efficient solutions to ensure uninterrupted progress for
                  your business.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (5).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">30-Day Free Return Policy</p>
                <p className="text-16 text-just">
                  Iconive offers a convenient 30-day return policy for our
                  valued clients. Whether you are a first-time international
                  buyer or a loyal customer, our hassle-free return policy
                  ensures your satisfaction. You only need to cover the shipping
                  fee to try our hair systems without any additional costs.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (6).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Large Amount of Stock Available</p>
                <p className="text-16 text-just">
                  We have a vast inventory of 80,000+ hair systems in various
                  base designs like lace, skin, and mono. With over 50 hair
                  colors available, we can promptly ship bulk orders to meet
                  your demands.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section1/Group (7).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Exclusive Customization Service</p>
                <p className="text-16 text-just">
                  To help you offer your customers unique products that can set
                  you apart from others, we can develop and customize new hair
                  system models to meet your customer’s needs and preferences.
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade  p-4"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (1).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  Special Discount for Sample Orders
                </p>
                <p className="text-16 text-just">
                  Iconive provides an exclusive discount for your initial sample
                  order, even if you decide to purchase just one piece. This
                  allows you to experience the quality of our hair systems
                  firsthand, with minimal cost and no significant commitment
                  required.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (2).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Drop Shipping Service</p>
                <p className="text-16 text-just">
                  We offer a global drop shipping service, enabling you to
                  efficiently grow your business. With worldwide shipping
                  directly to your customers, you can eliminate the need for
                  upfront capital investment, inventory management, and shipping
                  hassles. Focus on business growth while we handle the
                  logistics for you.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (3).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Large Amount of Stock Available</p>
                <p className="text-16 text-just">
                  Our quality inspection system ensures unwavering quality at
                  every stage of production. By offering our products to your
                  customers, you can enhance your brand's reputation and foster
                  business growth. Rest assured that our commitment to
                  consistent quality will contribute to your success in the
                  market.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (4).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">OEM/ODM</p>
                <p className="text-16 text-just">
                  Our high production capacity allows us to produce up to
                  150,000 hair systems annually. Combined with our advanced
                  supply chain system, we can efficiently meet the demands of
                  our clients and ensure a steady supply of top-quality
                  products.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (5).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">30-Day Free Return Policy</p>
                <p className="text-16 text-just">
                  At Iconive, we provide a complimentary 30-day return policy.
                  Whether you're a first-time international buyer or an
                  experienced customer, you can take advantage of this offer.
                  The only expense you'll incur is the shipping fee to
                  experience our exceptional hair systems. We believe in
                  offering a risk-free opportunity for you to try our products
                  and ensure your satisfaction.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (6).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Fast delivery within 3-5 days</p>
                <p className="text-16 text-just">
                  We collaborate with renowned international couriers like FedEx
                  and DHL for fast delivery. Regardless of your location, expect
                  your order to arrive within 3-5 business days.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (7).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  24/7 Highly Specialized Client Service Team
                </p>
                <p className="text-16 text-just">
                  At New Times Hair, our dedicated client service team is
                  available 24/7 to assist you with any inquiries or concerns.
                  You can rely on our knowledgeable team to provide prompt
                  assistance whenever you need it.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section2/Group (8).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Easy and Quick Online Purchase</p>
                <p className="text-16 text-just">
                  Ordering on our website is easy and fast. We offer various
                  payment options, and you can track your order for delivery
                  updates. Stay updated on your delivery dates using our order
                  tracking system, allowing you to easily monitor the status of
                  your order at any time.
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade p-4"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (1).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Hair System Free Trial</p>
                <p className="text-16 text-just">
                  Iconive provides an exclusive discount on your first sample
                  order, even for just one piece. This allows you to experience
                  the quality of our hair systems at a minimal cost and without
                  any major commitment. See for yourself what sets our products
                  apart.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (2).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Huge Amount of Stock Available</p>
                <p className="text-16 text-just">
                  Our worldwide drop shipping service ensures fast and direct
                  delivery to your customers, freeing you from inventory
                  management and shipping hassles. Grow your business without
                  the stress of upfront capital investment.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (3).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Premium Start-up Packages</p>
                <p className="text-16 text-just">
                  Our quality inspection system ensures consistent excellence in
                  our products. Partnering with us will enhance your brand's
                  reputation and foster business growth.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (4).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  Highly Professional Customization Service
                </p>
                <p className="text-16 text-just">
                  With our advanced supply chain system, we possess a high
                  production capacity capable of manufacturing up to 150,000
                  hair systems annually. This ensures that we can meet the
                  demands of our clients with efficiency and promptness.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (5).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">
                  24/7 Highly Specialized Client Service Team
                </p>
                <p className="text-16 text-just">
                  Our dedicated client service team at Iconive is available 24/7
                  to assist you. With expertise in multiple languages including
                  English, French, German, and Spanish, our team is
                  well-equipped to provide efficient and friendly service.
                  Expect prompt and reliable assistance from our highly trained
                  professionals.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (6).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">30-Day Free Return Guarantee</p>
                <p className="text-16 text-just">
                  Iconive offers a free 30-day return policy. Even if this is
                  your first time purchasing internationally, the only cost to
                  you is the shipping fee to try our hair systems.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (7).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Easy and Quick Online Purchase</p>
                <p className="text-16 text-just">
                  Placing orders on our website is quick and effortless. We
                  offer a variety of payment methods, allowing you to choose the
                  one that suits you best. With a seamless ordering process,
                  your order can be completed within minutes. Stay updated on
                  the progress of your order by using our convenient order
                  tracking system.
                </p>
              </div>

              <div className="col-md-3 col-12 text-center p-4">
                <span className="mx-auto w-88 d-flex my-3">
                  <img
                    src="./Image/wholesale/section3/Group (8).png"
                    className="w-50 m-auto"
                  />
                </span>
                <p className="py-2 fw-bold">Professional Business Guidance</p>
                <p className="text-16 text-just">
                  Iconive, as an experienced hair system manufacturer, is
                  dedicated to your success. We offer tutorials, industry
                  knowledge, and expertise to help you excel in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscription />
    </>
  );
}
