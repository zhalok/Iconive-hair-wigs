/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Collection from "./image/Collections.jpg";
import maleCollection from "./image/malecollection.jpg";
import femaleCollection from "./image/femaleCollections.jpg";
import Rawhair from "./image/Rawhair.jpg";
import Accessories from "./image/Accessories.jpg";
import "./Category.css";
import sidebarimg from "./image/sidebar.svg";
import filter from "./image/filter.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "../../utils/axios";
import CollectionCard from "../../Components/Collections/CollectionCard";

export default function Category({}) {
  const [topbanner, setTopBanner] = useState(1);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    subcategories: [],
  });
  // const [filters, setFilters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState("");
  console.log("filter", filters);
  // console.log("products", products);

  // console.log("Top Banner", topbanner);

  const getCategories = async () => {
    try {
      const response = await axios.get("/category/getCategory");

      setCategories(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getProducts = async () => {
    // console.log("calling");
    try {
      const response = await axios.get("/products", {
        params: { filters: filters },
      });

      // console.log("data", response.data);
      setProducts(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    if (filters.categories.length > 0 || filters.subcategories.length > 0)
      getProducts();
  }, [filters]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("category");
    const banner = searchParams.get("topbanner");

    if (category) {
      setShowSubCategory(category);
      setFilters((prev) => {
        return { ...prev, categories: [category] };
      });
    }
    if (banner) {
      setTopBanner(parseInt(banner));
    }
  }, []);

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
              <div className="d-flex justify-content-between px120pro flex-column flex-lg-row ">
                <div className="d-flex gap-2 gayeb w-25p">
                  <p className="text-uppercase text-22 my-auto ps-4 fw-bold">
                    Filters{" "}
                  </p>
                  <img
                    src={filter}
                    className="h-50 my-auto"
                    alt="this is an image"
                  />
                </div>
                <div className="w-60p mx-auto pt-4 pt-md-0">
                  <form class="d-flex  w-60p mx-auto">
                    <input
                      class="form-control round-start "
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-secondary  py-1 round-end"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>

                <div className="my-auto d-flex mx-auto gap-5 py-3 pt-md-0 w-25p  msm-auto ms">
                  <div class="btn-group w-100 outline-secondary">
                    <p className="text-16 text-theme-gray my-auto w-50 ">
                      SORT BY
                    </p>
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

              <div className="d-flex px120 flex-column flex-lg-row">
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
                          onClick={() => {
                            // console.log("hello world");
                            setShowSubCategory(category._id);
                            setFilters((prev) => {
                              return { ...prev, categories: [category._id] };
                            });
                          }}
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
                                        let newState = [...prev?.subcategories];
                                        if (
                                          !newState.includes(subcategory._id)
                                        ) {
                                          newState.push(subcategory._id);
                                          return {
                                            ...prev,
                                            subcategories: newState,
                                          };
                                        } else {
                                          newState = newState.filter((item) => {
                                            return item !== subcategory._id;
                                          });
                                          return {
                                            ...prev,
                                            subcategories: newState,
                                          };
                                        }
                                      });
                                    }}
                                  >
                                    {" "}
                                    <input
                                      class="form-check-input checkCatagory my-auto"
                                      type="checkbox"
                                      id="checkboxNoLabel"
                                      checked={filters?.subcategories.includes(
                                        subcategory._id
                                      )}
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
                  <div className="m-auto pt-2 overFlow rounded-iconive gayeb">
                    <img
                      src={sidebarimg}
                      alt="this is an image "
                      className="w-100 m-auto sidebarImg gayeb"
                    />
                  </div>
                </div>

                <div className="w-80 ps-md-5 pt-5 pt-md-0">
                  <div className="d-flex flex-wrap flex-column flex-lg-row gap-4 mx-auto justify-content-center">
                    {products.map((product, index) => (
                      <CollectionCard productId={product._id} index={index} />
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
