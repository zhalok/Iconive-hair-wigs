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
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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
          <div className="container text-start my-auto d-flex">
            <small className="my-auto">
              <p className="text-black my-auto text-start ps-4 my-auto d-flex">
                <a
                  href="/home"
                  className="text-decoration-none mx-auto text-black alink"
                >
                  <p className="">home</p>
                </a>
                <KeyboardDoubleArrowRightIcon />
                <a
                  href="/home"
                  className="text-decoration-none mx-auto text-black alink"
                >
                  <p className="">Collections</p>
                </a>
              </p>
            </small>
          </div>
        </div>

        <div className="container">
          <div className="d-flex">
            <div className="w-100 flex flex-column pb-5">
              <div className="w-full px-4 pt-5">
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

              <div className="d-flex">
                {/* sidebar */}
                <div className="sidebarBg h-100 ">
                  {/* Gents Wig */}
                  {categories.map((category) => {
                    return (
                      <div className="border-bottom border-white">
                        <div className="text-black d-flex ">
                          <p className="f-16 fw-bold">{category.name} </p>
                          <p
                            className="ms-auto"
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

                <div className="w-75 p-4  pt-5 text-start">
                  <div>
                    <h5 className=" fw-bolder">Collections</h5>
                    <p className="pt-2 fw-lighter"></p>
                  </div>

                  <div className="d-flex flex-wrap w-100 pt-4 gap-4 mx-auto">
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
