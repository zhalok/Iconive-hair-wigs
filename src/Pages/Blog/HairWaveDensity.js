/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import banner from "../../.././src/Components/Images/joinus/blog.webp";
import "./Blog.css";

export default function HairWaveDensity() {
  return (
    <div>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>

      {/* tabs */}
      <div className="mx-auto my-5 container">
        <div>
          <h2 className="fw-bold pt-5">Hair Wave-Curl & Density Guide</h2>
        </div>
        {/* <nav className="w-100 pt-5 d-flex ">
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
                  Types of Wig Hairs
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
                  Types of Base
                </button>
              </div>
            </nav> */}
        {/* first tab */}
        <div
          class="tab-content border-start border-end border-bottom border-top mt-5"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active p-4 p-md-5"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="text-start">
              <h5 className="fw-bold pb-3 mt-4 border-bottom">Wave-Curl</h5>
              <div className="w-100">
                <img
                  className="w-100"
                  src="/Image/blog/wave.jpg"
                  alt="This is an image"
                />
              </div>

              <h5 className="fw-bold pb-3 pt-5 mt-5 border-bottom">Density</h5>
              <div className="w-100 d-flex justify-content-center pt-5">
                <div className="text-center w-19">
                  <img
                    className="w-100"
                    src="/Image/blog/extra ight.png"
                    alt="This is an image"
                  />
                  <p className="fs-5 pt-2">Extra light</p>
                </div>
                <div className="text-center w-19">
                  <img
                    className="w-100"
                    src="/Image/blog/light.png"
                    alt="This is an image"
                  />
                  <p className="fs-5 pt-2">Light</p>
                </div>
                <div className="text-center w-19">
                  <img
                    className="w-100"
                    src="/Image/blog/medium heavy.png"
                    alt="This is an image"
                  />
                  <p className="fs-5 pt-2">Medium heavy</p>
                </div>
                <div className="text-center w-19">
                  <img
                    className="w-100"
                    src="/Image/blog/medium light.png"
                    alt="This is an image"
                  />
                  <p className="fs-5 pt-2">Medium light</p>
                </div>
                <div className="text-center w-19">
                  <img
                    className="w-100"
                    src="/Image/blog/medium.png"
                    alt="This is an image"
                  />
                  <p className="fs-5 pt-2">Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
