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
              <h5 className="fw-bold pb-3">
                How to Wear a Toupee at Home by Yourself{" "}
              </h5>
              <p className="text-theme-gray fs-6 ">
                For those who are new to wearing hairpieces, we understand that
                it can be a bit challenging to know how to properly attach and
                style them. That's why we have created a helpful video tutorial
                that demonstrates a simple method for securing your hair system
                at home. However, if you're a beginner and prefer professional
                assistance, we recommend visiting a barber shop. Barbers are
                experienced in working with hair systems and can provide expert
                advice, including customizing the system to match your head
                shape and creating a stylish haircut. s
              </p>

              <h6 className="fw-bold py-2 pt-4">
                To attach a lace hair system, follow these three easy steps::
              </h6>
              <ul>
                <li className="text-gray text-16">
                  Prepare the area by shaving the top of your head to create a
                  smooth surface where the adhesive will be applied.
                </li>
                <li className="text-gray text-16">
                  Apply the adhesive, which can be glue or tape, either on your
                  scalp or directly on the hair system.
                </li>
                <li className="text-gray text-16">
                  Position the hair system by starting at the center of your
                  forehead and gently sticking the tip of the system. Gradually
                  roll back the system, ensuring it is even on both sides, until
                  it sits nicely at the back and covers the shaved area.
                </li>
              </ul>
              <p>
                Once attached, you can style your hair system as desired.
                Whether you choose to follow our tutorial or seek professional
                assistance, we are here to support you in achieving a natural
                and confident look.
              </p>

              <h5 className="fw-bold pb-3 pt-5">
                How Would I know What Size to Buy?
              </h5>
              <p className="text-theme-gray">
                When it comes to the base size of toupees, they are available in
                various dimensions such as 6x8, 7x8, 7x9, 8x10, and other sizes.
                It's important for you to determine the length and width of your
                hair loss area before selecting the right size.
                <br />
                To begin, locate your front hairline. Typically, it is
                approximately four fingers' width away from your eyebrow. Place
                four fingers on your forehead, ensuring that one side aligns
                with your eyebrow and the other side marks the starting point of
                your front hairline.
              </p>

              <h6 className="fw-bold py-2 pt-4">Next, ascertain the length:</h6>
              <ul>
                <li className="text-gray text-16">
                  Measure from your front hairline to the point where your hair
                  loss ends at the back of your head.
                </li>
              </ul>

              <h6 className="fw-bold py-2 pt-4">
                Lastly, determine the width:{" "}
              </h6>
              <ul>
                <li className="text-gray text-16">
                  Measure the widest area of your hair loss region from one side
                  to the other.
                </li>
              </ul>

              <p className="pt-4 tex">
                By accurately measuring the length and width of your hair loss
                area, you can ensure that the toupee you choose fits you
                perfectly and provides the desired coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
