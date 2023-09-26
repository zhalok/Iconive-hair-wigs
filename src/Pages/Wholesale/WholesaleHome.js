import { Button } from "@mui/base";
import React, { useState } from "react";
import banner from "../../.././src/Components/Images/joinus/wholesale.webp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Wholesale.css";
import Subscription from "../../Components/Subscription/Subscription";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
const categoriesGentsWhole = [
  {
    id: 1,
    title: "MGM",
  },
  {
    id: 2,
    title: "Q6",
  },
  {
    id: 3,
    title: "MONO",
  },
  {
    id: 4,
    title: "Holly",
  },
  {
    id: 5,
    title: "Another Product",
  },
  {
    id: 6,
    title: "Product",
  },
  {
    id: 7,
    title: "Name of Product",
  },
];
const categoriesLadiessWhole = [
  {
    id: 1,
    title: "Mono Base",
  },
  {
    id: 2,
    title: "Lase Base",
  },
  {
    id: 3,
    title: "Silk Base",
  },
  {
    id: 4,
    title: "Skin Base",
  },
  {
    id: 5,
    title: "Mixed Base",
  },
  {
    id: 6,
    title: "Full Head Toupee",
  },
  {
    id: 7,
    title: "African Anerican Wig",
  },
];

const ProductTable = [
  {
    id: 1,
    name: "Black hair clipper",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
  {
    id: 1,
    name: "AUS-3",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
  {
    id: 1,
    name: "ZIK",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
];

export default function WholesaleHome() {
  const [gents, setGents] = useState("");
  const [ladies, seLadies] = useState("");
  const [extension, setExtension] = useState("");
  const [accessories, setAccessories] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  return (
    <div>
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>
      <div className="bg-whole-home p-5 ">
        <div className=" pb-3 d-flex flex-column text-center ">
          <h2 className="fw-bold fs-2  text-dark px-4 pb-0 mx-auto text-uppercase headingHover text-center">
            Catalog
          </h2>
          <p className="text-theme-gray text-18">
            Click the buttons below to download the catalogs
          </p>
          <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between container pt-4p ">
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Gents
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Ladies
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Hair extensions
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Accessories
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column flex-lg-row justify-content-center gap-5 my-5">
        <div className="w-25 ws-100">
          {/* Gents Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start fw-bold mb-0 pt-1 px-2">GENTS</p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {gents ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setGents((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setGents((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {gents && (
              <div className=" text-theme-gray  pt-2">
                {categoriesGentsWhole?.map((category) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {category.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="w-25 ws-100 ">
          {/*   Ladies Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                Ladies
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {ladies ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      seLadies((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      seLadies((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {ladies && (
              <div className=" text-theme-gray  pt-2">
                {categoriesLadiessWhole?.map((category) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {category.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="w-25 ws-100">
          {/*   hair extension Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                {" "}
                hair extension
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {extension ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setExtension((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExtension((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {extension && (
              <div className=" text-theme-gray  pt-2">
                {categoriesLadiessWhole?.map((category) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {category.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="w-25 ws-100">
          {/*   accessories */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                {" "}
                accessories
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {accessories ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setAccessories((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setAccessories((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {accessories && (
              <div className=" text-theme-gray  pt-2">
                {categoriesLadiessWhole?.map((category) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {category.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container pb-4p overflow-scroll-s">
        <h2 className="my-5 pt-4p fw-bold">PRODUCT CHECKLIST</h2>
        <div className="w-100 table-width ">
          <table className="table bg-whole-home shadow w-100  ">
            <thead className="">
              <tr className="text-th mt-3 pt-table">
                <th scope="col">No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ProductTable.map((product, index) => (
                <tr className="text-td py-2">
                  <td>{index + 1}</td>
                  <td className="d-flex ps-5 gap-4">
                    <CloseIcon className="borderbtn text-td fs-5 my-auto" />
                    {product.name}
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-4">
                      <AddIcon
                        onClick={() => {
                          setItemQuantity((prevs) => {
                            return prevs + 1;
                          });
                        }}
                        className="borderbtn"
                      />
                      {itemQuantity}
                      <RemoveIcon
                        onClick={() => {
                          setItemQuantity((prevs) => {
                            if (prevs === 0) return 0;
                            else return prevs - 1;
                          });
                        }}
                        className="borderbtn"
                      />
                    </div>
                  </td>
                  <td>{product.unitprice} $</td>
                  <td>{product.totalprice} $</td>
                </tr>
              ))}
              <tr className="text-td py-2 border-top-0 fw-bold">
                <td>#</td>
                <td>Total</td>
                <td>34</td>
                <td>1235 $</td>
                <td>8522 $</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-md-end container pt-4p mb-5 justify-content-sm-start">
            <button className="btn fw-bold  py-2 btn-whole1 shadow">
              Inquires
            </button>
            <button className="btn fw-bold py-2 btn-whole2  shadow ms-5 text-light me-0">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Subscription />
    </div>
  );
}
