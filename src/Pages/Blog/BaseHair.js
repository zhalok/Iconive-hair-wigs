import React from "react";
import "./Blog.css";
export default function BaseHair() {
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
          <h2 className="fw-bold pt-5">Base & Hair Guide</h2>
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
        </nav>
        {/* first tab */}
        <div
          class="tab-content border-start border-end border-bottom"
          id="nav-tabContent"
        >
          <div
            class="tab-pane fade show active p-4 p-md-5"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="text-start">
              <p className="text-dark fs-6 ">
                There are two main types of wigs: synthetic wigs and human hair
                wigs.Here are some differences between the two:
              </p>

              <h6 className="fw-bold py-2 pt-4">Synthetic wigs:</h6>
              <ul>
                <li className="text-gray text-16">Lower cost</li>
                <li className="text-gray text-16">Low maintenance</li>
                <li className="text-gray text-16">Cannot be heat-styled</li>
                <li className="text-gray text-16">
                  Lasts 4-6 months with proper care
                </li>
              </ul>

              <h6 className="fw-bold py-2 pt-4">Human hair wigs:</h6>
              <ul>
                <li className="text-gray text-16">Higher cost</li>
                <li className="text-gray text-16">High maintenance</li>
                <li className="text-gray text-16">Can be heat-styled</li>
                <li className="text-gray text-16">
                  Lasts up to a year with proper care
                </li>
              </ul>

              <p className="pt-4">
                When choosing between synthetic and human hair wigs, consider
                your budget and how much time you're willing to devote to
                maintenance and styling.
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade p-4 p-md-5"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="text-start">
              <h5 className="fw-bold">Silk base wigs:</h5>
              <p className="text-gray pt-1 text-16">
                Silk base wigs have a layer of silk material at the base of the
                wig, which creates the illusion of a natural scalp. The silk
                material is often flesh-colored and can be hand-tied or
                machine-made. Silk base wigs are known for their realistic look
                and comfortable fit.
              </p>

              <h5 className="fw-bold mt-5">Mono base wigs:</h5>
              <p className="text-gray pt-1 text-16">
                Mono base wigs have a fine mesh material at the base of the wig,
                which allows for greater breathability and a more natural look.
                The mesh material is often flesh-colored and can be hand-tied or
                machine-made. Mono base wigs are a popular choice for those with
                sensitive scalps, as they are lightweight and comfortable to
                wear.
              </p>

              <h5 className="fw-bold mt-5">Lace base wigs:</h5>
              <p className="text-gray pt-1 text-16">
                Lace base wigs have a sheer lace material at the base of the
                wig, which creates the illusion of a natural scalp. The lace
                material is often flesh-colored and can be hand-tied or
                machine-made. Lace base wigs are known for their realistic look
                and ability to create a natural hairline.
              </p>

              <h5 className="fw-bold mt-5"> Skin base wigs:</h5>
              <p className="text-gray pt-1 text-16">
                Skin base wigs have a layer of silicone or polyurethane material
                at the base of the wig, which creates the illusion of a natural
                scalp. The material is often flesh-colored and can be hand-tied
                or machine-made. Skin base wigs are a popular choice for those
                with sensitive scalps, as they are lightweight and comfortable
                to wear.
              </p>

              <p className="fw-bold pt-4 text-gray text-16">
                Mix base wigs are a type of wig that combines two or more base
                materials to create a custom wig that meets the wearer's unique
                needs. For example, a mix base wig might combine a lace front
                with a monofilament base, or a silk base with a skin base. The
                benefits of a mix base wig are numerous. By combining different
                materials, you can create a wig that is both comfortable and
                realistic. For example, a lace front can create a
                natural-looking hairline, while a monofilament base can provide
                greater breathability and scalp coverage. Additionally, a mix
                base wig can be tailored to the wearer's specific needs, such as
                accommodating a sensitive scalp or creating a specific hair
                part.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
