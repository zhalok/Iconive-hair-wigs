import React from "react";
import "./Blog.css";
import { Image } from "react-bootstrap";

export default function ColorGuide() {
  return (
    <div>
      <div className="w-100">
        <img
          src="./Image/joinus/blog.webp"
          className="w-100"
          alt="this is a banner"
        />
      </div>

      {/* tabs */}
      <div className="mx-auto my-5 container">
        <div>
          <h2 className="fw-bold pt-5">Color Guide</h2>
        </div>
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
              Black
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
              Blonde
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
              Brown
            </button>
          </div>
        </nav>
        {/* first tab */}
        <div
          class="tab-content border-start border-end border-bottom"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active  p-md-5 p-4"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="w-100 flex-column flex-lg-row mx-auto gap-3 d-flex">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1jetblack.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#1 jet black</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1b_with_65_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">1b with 65 gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1b_with_50_ gray.jpg"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">1b with 50 gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1b with 40_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">1b with 40 gray</p>
              </div>
            </div>
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1b with 30_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">1b with 30 gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1C cool black.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#1C cool black</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1b with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#1b with 20 gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1B with 10_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#1B with 10 gray</p>
              </div>
            </div>
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Black/1B 0ff black.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#1B 0ff black</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade  p-4 p-md-5"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/12 R STRAWBERRY BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #12 R STRAWBERRY BLONDE
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/22 RED BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0"># 22 RED BLONDE</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/613 PLATINUM BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  # 613 PLATINUM BLONDE
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/8R Dark NATURAL BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #8R Dark NATURAL BLONDE
                </p>
              </div>
            </div>
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/30R STRAWBERRY BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #30R STRAWBERRY BLONDE
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/22 BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#22 BLONDE</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/20R DARK ASH RED BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #20R DARK ASH RED BLONDE
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/20 DARK ASH BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #20 DARK ASH BLONDE
                </p>
              </div>
            </div>
            <div className=" pt-4 w-100 mx-auto gap-4 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Blonde/10R DIRTY BLONDE.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#10R DIRTY BLONDE</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade p-4 p-md-5"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/2 DARKEST BROWN.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#2 DARKEST BROWN</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/2 WITH 10_ GRAY.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#2 WITH 10_ GRAY</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/2 with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#2 with 20_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/2 with 30_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #2 with 30_ gray.webp
                </p>
              </div>
            </div>
            {/* 2nd row  */}
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-lg-row flex-column ">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/3 dark brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#3 dark brown</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/3 with 10_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#3 with 10_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/3 with 20 _ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold ws-100 bg-light py-3 mb-0">
                  #3 with 20 gray
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/3 with 40_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold ws-100 bg-light py-3 mb-0">
                  #3 with 40 gray
                </p>
              </div>
            </div>
            {/* 3rd row */}
            <div className="w-100 flex-column flex-lg-row pt-4 gap-4 mx-auto d-flex">
              <div className="w-25 ws-100 shadow rounded-1 p-0  m-0">
                <Image
                  src="/Image/Brown/3 with 50_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#3 with 50 gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0 ">
                <Image
                  src="/Image/Brown/4 ash medium brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #4 ash medium brown
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0 ">
                <Image
                  src="/Image/Brown/4 medium brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold  bg-light py-3 mb-0">#4 medium brown</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0 ">
                <Image
                  src="/Image/Brown/4 with 10_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#4 with 10_ gray</p>
              </div>
            </div>
            {/* 4th row  */}
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/4 with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#4 with 20_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/4R medium red brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #4R medium red brown
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/5 cool toned BRown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #5 cool toned BRown
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/5 with 10_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#5 with 10_ gray</p>
              </div>
            </div>
            {/* 5th row  */}
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/5 with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#5 with 20_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/5 with 80_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#5 with 80_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/6 chestnut brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#6 chestnut brown</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/6 RD chestnut red brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #6 RD chestnut red brown
                </p>
              </div>
            </div>
            {/* 6th row  */}
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/6 with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#6 with 20_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/7 lightest ash brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #7 lightest ash brown
                </p>
              </div>
              <div className="w-25  ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/7 lightest brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#7 lightest brown</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/7 with 20_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#7 with 20_ gray</p>
              </div>
            </div>
            {/* 7th row  */}
            <div className=" pt-4 w-100 mx-auto gap-3 d-flex flex-column flex-lg-row">
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/7 with 40_ gray.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#7 with 40_ gray</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/17 dark ash brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">#17 dark ash brown</p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/17R darkest ash brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  17R darkest ash brown
                </p>
              </div>
              <div className="w-25 ws-100 shadow rounded-1 p-0">
                <Image
                  src="/Image/Brown/18 medium ash brown.webp"
                  className="w-100"
                  alt="this is a color"
                />
                <p className="fw-bold bg-light py-3 mb-0">
                  #18 medium ash brown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
