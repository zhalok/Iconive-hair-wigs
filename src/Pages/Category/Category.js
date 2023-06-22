/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Collection from "./image/Collections.jpg";
import maleCollection from "./image/malecollection.jpg";
import femaleCollection from "./image/femaleCollections.jpg";
import Rawhair from "./image/Rawhair.jpg";
import Accessories from "./image/Accessories.jpg";
import down from "./icons/downArrow.svg";
import card1 from "./image/cardh1.jpg";
import "./Category.css";
import cardicon1 from "./image/cardicon1.svg";
import cardicon2 from "./image/cardicon2.svg";
import sidebarimg from "./image/sidebar.svg";
import filter from "./image/filter.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "../../utils/axios";
import { Cookie } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import apiLayerAxios from "../../utils/apiLayerAxios";
import CollectionCard from "../../Components/Collections/CollectionCard";
// import { useNavigate } from "react-router-dom";

export default function Category({ currency }) {
  const [topbanner, setTopBanner] = useState(0);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [categories, setCategories] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState("");
  console.log(showSubCategory);

  const getCategories = async () => {
    try {
      const response = await axios.get("/category/getCategory");

      setCategories(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getProducts = async () => {
    try {
      const response = await axios.get("/products", {
        params: filters,
      });

      setProducts(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProducts();
  }, [filters]);
  useEffect(() => {
    getCategories();
  }, []);

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/ProductDetails/${id}`);
  }

  return (
    <>
      <div>
        <div className=" py-4 border-bottom">
          <div className="px120 text-start mt-1 d-flex text-18">
            <a
              href="/home"
              className="text-decoration-none f-16 text-theme-gray text-uppercase"
            >
              Home
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/catagory"
              className="text-decoration-none f-16  text-theme-gray text-uppercase"
            >
              cATAGORIES
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/home"
              className="text-decoration-none f-16 text-black  text-uppercase "
            >
              Gents wig
            </a>
          </div>
        </div>

        <div className="w-100 ">
          <div className="d-flex">
            <div className="w-100 flex flex-column pb-5">
              <div className="w-100">
                {topbanner === 0 && (
                  <img
                    src={Collection}
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 1 && (
                  <img
                    src={maleCollection}
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 2 && (
                  <img
                    src={femaleCollection}
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 3 && (
                  <img src={Rawhair} width={"100%"} alt="This is an bannnner" />
                )}
                {topbanner === 4 && (
                  <img
                    src={Accessories}
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
              </div>
              <div className="d-flex justify-content-between py-5 px120">
                <div className="d-flex gap-2">
                  <p className="text-uppercase text-22 my-auto ps-4 fw-bold">
                    Filters{" "}
                  </p>
                  <img src={filter} alt="this is an image" />
                </div>
                <div className="w-50 ms-auto">
                  <form class="d-flex w-75 ">
                    <input
                      class="form-control rounded-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-secondary rounded-0 py-1"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>

                <div className="my-auto d-flex pe-5 gap-5">
                  <p className="text-16 text-theme-gray my-auto">SORT BY</p>
                  <div class="btn-group">
                    <button
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Price
                    </button>
                    <ul class="dropdown-menu p-2">
                      <li>Price</li>
                      <li>A to Z</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="d-flex px120">
                {/* sidebar */}
                <div className="sidebarwidth d-flex flex-column gap-4">
                  <div className="sidebarBg  ">
                    <div className="text-start pb-4">
                      <p className="text-20  text-uppercase my-auto fw-bold">
                        Categories
                      </p>
                    </div>
                    {/* Gents Wig */}
                    {categories.map((category, index) => {
                      return (
                        <div className="border-top border-1 border-secondary py-4">
                          <div className="text-black d-flex ">
                            <p className="text-18 text-start text-theme-gray mb-0 pt-1">
                              {category.name}
                            </p>
                            <p
                              className="ms-auto my-auto"
                              onClick={() => {
                                setShowSubCategory((prevState) => {
                                  if (prevState != category._id) {
                                    setFilters({
                                      category: category._id,
                                    });
                                  } else {
                                    setFilters({});
                                  }

                                  return prevState != category._id
                                    ? category._id
                                    : "";
                                });
                              }}
                            >
                              {showSubCategory !== category._id ? (
                                <ExpandMoreIcon
                                  onClick={() => {
                                    setTopBanner(index + 1);
                                  }}
                                  className="my-auto"
                                />
                              ) : (
                                <KeyboardArrowUpIcon
                                  onClick={() => {
                                    setTopBanner(0);
                                  }}
                                  className="my-auto"
                                />
                              )}
                            </p>
                          </div>
                          {showSubCategory === category._id && (
                            <div className=" text-theme-gray  pt-2">
                              {category.subcategories?.map((subcategory) => {
                                return (
                                  <div
                                    className="ps-2  d-flex f-18 my-3"
                                    onClick={() => {
                                      setFilters((prev) => {
                                        prev["subCategory"] = subcategory._id;
                                        return { ...prev };
                                      });
                                    }}
                                  >
                                    {" "}
                                    <input
                                      class="form-check-input checkCatagory my-auto"
                                      type="checkbox"
                                      id="checkboxNoLabel"
                                      value=""
                                      aria-label="..."
                                    />
                                    <p className="text-14 text-start Chover ms-3 my-auto">
                                      {subcategory.name}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="m-auto pt-2 overFlow rounded-iconive">
                    <img
                      src={sidebarimg}
                      alt="this is an image "
                      className="w-100 m-auto sidebarImg"
                    />
                  </div>
                </div>

                <div className="w-80 ps-5 text-center">
                  {/* <div>
                    <h5 className=" fw-bolder">Collections</h5>
                    <p className="pt-2 fw-lighter"></p>
                  </div> */}

                  <div className="d-flex w-100 flex-wrap gap-4 mx-auto justify-content-center">
                    {products.map((product, index) => (
                      // <div
                      //   onClick={() => {
                      //     handleClick(product._id);
                      //   }}
                      //   key={index}
                      //   className="card-cat  shadow w-25 "
                      //   style={{
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   <div className="img-card position-relative">
                      //     <img
                      //       className="w-100 h-100"
                      //       src={product.photo}
                      //       alt="This  is an  picture"
                      //     />
                      //     <button
                      //       onClick={
                      //         () => {}
                      //         // setShowModal((pre) => {
                      //         //   return !pre;
                      //         // })
                      //       }
                      //       // data-bs-target="#modalID"
                      //       // data-bs-toggle="modal"
                      //       className="position-absolute top-50 left-20 d-flex btn btn-dark shodow px-3 py-1 f-14 rounded-0"
                      //     >
                      //       <ShoppingCartIcon className="pe-1 my-auto" />{" "}
                      //       Details
                      //     </button>
                      //   </div>
                      //   <div className="text-center px-2">
                      //     <h6 className="mt-4 mb-2 fw-bold">{product.name}</h6>
                      //     {/* <p className="m-0">Coco Lee, coins are Kumis brown</p> */}
                      //     <h5 className="mt-2 mb-3 fw-bold">{`$ ${product.price}`}</h5>
                      //   </div>
                      // </div>

                      <div
                        onClick={() => {
                          handleClick(product._id);
                        }}
                        key={index}
                        style={{
                          cursor: "pointer",
                        }}
                        className="card-main border rounded-iconive w-25 d-flex flex-column"
                      >
                        <div className="img-card position-relative overflow-hidden ">
                          <img
                            className="w-100 h-100 rounded-iconive cardImg"
                            src={product.photo}
                            alt="This  is an  picture"
                          />
                          <button
                            onClick={
                              () => {}
                              // setShowModal((pre) => {
                              //   return !pre;
                              // })
                            }
                            // data-bs-target="#modalID"
                            // data-bs-toggle="modal"
                            className="position-absolute top-50 left-20 d-flex btn btn-details px-3 py-1 f-14 text-light "
                          >
                            <ShoppingCartIcon className="pe-1 my-auto" />{" "}
                            <p className="m-auto"> Details</p>
                          </button>
                        </div>
                        <div className="text-start p-3 mt-auto">
                          <p className=" fw-bold  ">{product.name}</p>
                          {/* <p className="m-0 py-0 text-12 text-theme-gray">
                            Be confident with any style you like to own from a
                            large variety of styles.
                          </p> */}
                          <div className="d-flex justify-content-between mt-4">
                            <p className="text-20 fw-bold text-dark my-auto pt-1">{`$ ${product.price}`}</p>
                            <div className="d-flex">
                              <button className="btn px-0 mt-1">
                                {" "}
                                <img
                                  src={cardicon2}
                                  className=""
                                  alt="this is an icon"
                                />
                              </button>
                              <button className="btn ps-2 my-auto">
                                {" "}
                                <img
                                  src={cardicon1}
                                  className="w-100 "
                                  alt="this is an icon"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <ProductModal id="modalID"></ProductModal> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
