/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import CurrencyContext from "../../Contexts/CurrencyContext";

// import { useNavigate } from "react-router-dom";

export default function Category({}) {
  const [topbanner, setTopBanner] = useState(0);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState("");
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [currencyLoading, setCurrencyLoading] = useState(false);
  const [category, setCategory] = useState("");

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
        params: { filters: filters },
      });

      setProducts(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProducts();
    // console.log(filters);
  }, [filters]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("category");

    if (category) {
      setShowSubCategory(category);
    }
  }, []);

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/ProductDetails/${id}`);
  }

  return (
    <>
      <div>
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
                    <ul class="dropdown-menu p-2 text-13 ">
                      <li>Price (High to Low)</li>
                      <li className="py-2">Price (Low to High)</li>
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
                        <div
                          className="border-top border-1 border-secondary py-4"
                          // onClick={() => {
                          //   console.log("hello world");
                          // }}
                        >
                          <div className="text-black d-flex ">
                            <p className="text-18 text-start text-theme-gray mb-0 pt-1">
                              {category.name}
                            </p>
                            <p
                              className="ms-auto my-auto"
                              onClick={() => {
                                setShowSubCategory((prevState) => {
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
                                        const uniq =
                                          category._id + " " + subcategory._id;
                                        if (prev.includes(uniq)) {
                                          return prev.filter((item) => {
                                            return item !== uniq;
                                          });
                                        } else {
                                          return [...prev, uniq];
                                        }

                                        return [...prev];
                                      });
                                    }}
                                  >
                                    {" "}
                                    <input
                                      class="form-check-input checkCatagory my-auto"
                                      type="checkbox"
                                      id="checkboxNoLabel"
                                      // value={filters.subCategory.includes(
                                      //   subcategory._id
                                      // )}
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
                  <div className="d-flex w-100 flex-wrap gap-4 mx-auto justify-content-center">
                    {products.map((product, index) => (
                      <>
                        <CollectionCard productId={product._id} index={index} />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
