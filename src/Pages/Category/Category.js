/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Collection from "./image/Collections.png";
import maleCollection from "./image/malecollection.png";
import femaleCollection from "./image/femaleCollections.png";
import Rawhair from "./image/Rawhair.png";
import Accessories from "./image/Accessories.png";
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
          <div className="px120 text-start my-1 d-flex text-18">
            <a
              href="/home"
              className="text-decoration-none  f-18 text-theme-gray text-uppercase"
            >
              Home
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/home"
              className="text-decoration-none f-18 text-theme-gray text-uppercase"
            >
              cATAGORIES
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/home"
              className="text-decoration-none text-black f-18 text-uppercase "
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

                <div className="my-auto d-flex pe-5 gap-5">
                  <p className="text-16 text-theme-gray">SORT BY</p>
                  <p className="text-16 text-theme-gray">PRICE</p>
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
                    {categories.map((category) => {
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
                              <ExpandMoreIcon className="my-auto" />
                            ) : (
                              <KeyboardArrowUpIcon className="my-auto" />
                            )}
                          </p>
                        </div>
                        {showSubCategory === category._id && (
                          <div className=" text-black border-top pt-2">
                            {category.subcategories?.map((subcategory) => {
                              return (
                                <div
                                  className="ps-2  d-flex f-18"
                                  onClick={() => {
                                    setFilters((prev) => {
                                      prev["subCategory"] = subcategory._id;
                                      return { ...prev };
                                    });
                                  }}
                                >
                                  <p className="f-16 Chover">
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

                <div className="w-80 ps-5 text-center">
                  {/* <div>
                    <h5 className=" fw-bolder">Collections</h5>
                    <p className="pt-2 fw-lighter"></p>
                  </div> */}

                  <div className="d-flex w-100 flex-wrap gap-4 mx-auto justify-content-center">
                    {products.map((product, index) => (
                      <CollectionCard
                        productId={product._id}
                        currency={currency}
                      />
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
