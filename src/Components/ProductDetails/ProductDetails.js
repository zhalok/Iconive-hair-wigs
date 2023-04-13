import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import pic1 from "./Images/modalpic2.jpg";

import "./ProductDetails.css";

export default function ProductDetails({ id }) {
  return (
    <>
      <div className="container d-flex my-5">
        <div className=" w-50 px-4">
          <div className="w-100 position-relative">
            <img src={pic1} alt="wigs" className="w-100" />
            <span className="position-absolute top-0 end-0 bg-danger text-light px-4 py-3 rounded-circle m-3">
              <h4 className="fw-bold mb-0 mt-2">20%</h4>
              <h4 className="fw-bold mt-0 mb-2">Off</h4>
            </span>
          </div>
          <div className="w-100 d-flex justify-content-between py-3">
            <img src={pic1} alt="wigs" className="wm-22 h-25 " />
            <img src={pic1} alt="wigs" className="wm-22 h-25 " />
            <img src={pic1} alt="wigs" className="wm-22 h-25  " />
            <img src={pic1} alt="wigs" className="wm-22 h-25 " />
            <img src={pic1} alt="wigs" className="wm-22 h-25 " />
          </div>
        </div>
        <div className="w-50 px-4 my-auto">
          <h4 className="text-start fw-bold">
            7"X8" COURTNEY | MONO PART | LEFT PART REMY HUMAN HAIR TOPPER
          </h4>

          <p className="text-start text-secondary">SKU: 2050</p>
          <div className="d-flex justify-content-between py-3">
            <div className="d-flex gap-4">
              <h3 className="fw-bold my-auto text-danger text-decoration-line-through">
                $308.50
              </h3>
              <h3 className="fw-bold my-auto h ">$240.50</h3>
            </div>
            <span className="d-flex ">
              <h5 className="fw-bold my-auto d-flex">
                <StarIcon className="text-black fw-bold" />
                <StarIcon className="text-black fw-bold" />
                <StarIcon className="text-black fw-bold" />
                <StarIcon className="text-black fw-bold" />
                <StarIcon className="text-black fw-bold" />
              </h5>
              <p className="my-auto ms-1 text-secondary me-5">(90) Reviews</p>
            </span>
          </div>
          <div className="text-start">
            {/* color */}
            <p className="text-secondary pt-3 ">Color :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                p
              </button>
              <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                p
              </button>
              <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">
                p
              </button>
            </div>

            {/* length*/}
            <p className="text-secondary pt-2 ">Hair length :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-0 fs-6">12"</button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                14"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                16"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                18"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                20"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                22"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                24"
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                26"
              </button>
            </div>

            {/*Lengtth */}
            <p className="text-secondary pt-3 ">Base size :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-0 fs-6">7x5</button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                8x5
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                8x6
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                9x7
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                10x7
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                10x8
              </button>
            </div>

            {/*density */}
            <p className="text-secondary pt-3 ">Density :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-0 fs-6">80%</button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                90%
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                100%
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                120%
              </button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                140%"
              </button>
            </div>

            {/* style */}
            <p className="text-secondary pt-3 ">Style :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-0 fs-6">Straight</button>
              <button className="btn btn-outline-dark rounded-0 fs-6">
                Wavy
              </button>
            </div>

            <p className="text-secondary pt-3 ">FH Base size :</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark rounded-0 fs-6 d-flex fw-bold">
                8x12x16 <p className="my-auto ms-3 fw-normal"> Like this</p>
              </button>
            </div>
            <p className="mt-4 my-auto">
              <AccessTimeIcon className="me-1 my-auto" />
              <small>
                Processing Time:
                <span className="text-secondary fw-bold">
                  3-5 business days
                </span>
              </small>
            </p>
            <p className="pt-3">
              <small> Processing time does not include delivery time</small>
            </p>
            <p className="">
              <small></small>
            </p>

            <div className="w-100">
              <button className="w-50 btn btn-dark py-2 rounded-0 me-4">
                <ShoppingCartIcon /> ADD TO CART
              </button>
              <button className=" btn btn-outline-dark py-2 px-5  rounded-0">
                + WISH LIST
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-100 text-start py-3">
          <p className="text-secondary pb-2 fs-5 fw-bold">Description :</p>
          <p className="pb-0">
            Welcome to Iconive, your one-stop destination for premium quality
            wigs. We're a team of passionate hair enthusiasts dedicated to
            providing our customers with the very best in hair products and
            customer service. Our exquisite collection of wigs is designed to
            cater to the needs of every individual, regardless of age or gender.
            We understand that choosing the perfect wig can be overwhelming,
            which is why we strive to make your shopping experience seamless and
            enjoyable.
          </p>
        </div>
        <div className="w-100 text-start py-2">
          <p className="text-secondary pb-2 fs-5 fw-bold">Shipping policy :</p>
          <p className="pb-0">
            At Iconive, we understand how important it is for you to receive
            your products in a timely and efficient manner. That's why we offer
            fast and reliable shipping to ensure that your order arrives as
            quickly as possible.
            <button
              type="button"
              class="btn btn-outline-info py-0 mx-2"
              data-bs-toggle="modal"
              data-bs-target="#shippingModal"
            >
              Show More
            </button>
            <div
              class="modal fade"
              id="shippingModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Shipping policy
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      1 .
                      <small>
                        {" "}
                        All stock orders are processed within 24-48 hours of
                        receiving payment, and are shipped out as soon as
                        possible. However, If the product is not in stock or a
                        customer places a custom order, it might take 10-30 days
                        to manufacture as these items are mostly hand-crafted.
                      </small>
                    </p>{" "}
                    <p>
                      2 .
                      <small>
                        {" "}
                        We mainly Ship abroad via FedEx Logistics. We can also
                        use DHL Supply Chain, UPS etc verified International
                        Shipping Agents if needed. After the product is
                        manufactured/ is ready to be shipped, we send real
                        pictures or videos of that product to the following
                        customer if he asks for it. After buyer’s confirmation,
                        we will send the product to FedEx warehouses for
                        delivery. After handing over the package to FedEx for
                        the delivery, we will get a tracking code which we will
                        send to our customer for his/her convenience. With this
                        code, customers can easily find out the product's
                        location & whereabouts.
                      </small>
                    </p>
                    <p>
                      3 .
                      <small>
                        {" "}
                        Standard shipping usually takes between 5-12 business
                        days to arrive as per FedEx delivery system. Please note
                        that shipping times may vary depending on your location
                        and shipping method. Any issue regarding product
                        shipping is not our concern as this responsibility then
                        transfers to FedEx. So any issue regarding product
                        shipment after we handover the product to FedEx is not
                        our responsibility to solve, therefore not on us. We
                        offer free standard international shipping on all orders
                        over $200 all over the world. For orders under $200, a
                        shipping fee will be applied based on the weight and
                        size of the package.Please note that international
                        orders may be subject to additional customs fees and
                        taxes, which are the responsibility of the customer.
                      </small>
                    </p>
                    <p>
                      4 .
                      <small>
                        {" "}
                        If you have any questions or concerns about shipping,
                        please don't hesitate to contact our customer service
                        team. We're always here to help and ensure that you have
                        the best shopping experience possible.
                      </small>
                    </p>
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
          </p>
        </div>
        <div className="w-100 text-start py-3 pb-5">
          <p className="text-secondary pb-2 fs-5 fw-bold">
            Return & Refund policy :
          </p>
          <p className="pb-0">
            Welcome to Iconive, your one-stop destination for premium quality
            wigs.
            <button
              type="button"
              class="btn btn-outline-info py-0 mx-2"
              data-bs-toggle="modal"
              data-bs-target="#refundandreturnpolicy"
            >
              Show More
            </button>
            <div
              class="modal fade"
              id="refundandreturnpolicy"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title " id="exampleModalLabel">
                      Return & Refund Policy
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h4 className="fw-bold  my-3  ">
                      Thanks for shopping at Iconive. <br/> 
                      <h5 className="fw-normal">If you are not entirely satisfied with your purchase, we're here to help.</h5>
                    </h4>
                    <p>
                      1 .
                      <small>
                        {" "}
                        All stock orders are processed within 24-48 hours of
                        receiving payment, and are shipped out as soon as
                        possible. However, If the product is not in stock or a
                        customer places a custom order, it might take 10-30 days
                        to manufacture as these items are mostly hand-crafted.
                      </small>
                    </p>{" "}
                    <p>
                      2 .
                      <small>
                        {" "}
                        We mainly Ship abroad via FedEx Logistics. We can also
                        use DHL Supply Chain, UPS etc verified International
                        Shipping Agents if needed. After the product is
                        manufactured/ is ready to be shipped, we send real
                        pictures or videos of that product to the following
                        customer if he asks for it. After buyer’s confirmation,
                        we will send the product to FedEx warehouses for
                        delivery. After handing over the package to FedEx for
                        the delivery, we will get a tracking code which we will
                        send to our customer for his/her convenience. With this
                        code, customers can easily find out the product's
                        location & whereabouts.
                      </small>
                    </p>
                    <p>
                      3 .
                      <small>
                        {" "}
                        Standard shipping usually takes between 5-12 business
                        days to arrive as per FedEx delivery system. Please note
                        that shipping times may vary depending on your location
                        and shipping method. Any issue regarding product
                        shipping is not our concern as this responsibility then
                        transfers to FedEx. So any issue regarding product
                        shipment after we handover the product to FedEx is not
                        our responsibility to solve, therefore not on us. We
                        offer free standard international shipping on all orders
                        over $200 all over the world. For orders under $200, a
                        shipping fee will be applied based on the weight and
                        size of the package.Please note that international
                        orders may be subject to additional customs fees and
                        taxes, which are the responsibility of the customer.
                      </small>
                    </p>
                    <p>
                      4 .
                      <small>
                        {" "}
                        If you have any questions or concerns about shipping,
                        please don't hesitate to contact our customer service
                        team. We're always here to help and ensure that you have
                        the best shopping experience possible.
                      </small>
                    </p>
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
          </p>
        </div>
        <div className="d-flex w-100 pb-5">
          <div className="w-100 ">
            <iframe
              width="100%"
              height="715"
              src="https://www.youtube.com/embed/1mkB-ENIeco?start=336"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
