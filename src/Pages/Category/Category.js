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
import ProductModal from "../../Components/ProductModal/ProductModal";
import axios from "../../utils/axios";
import { Cookie } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Category() {
  const [status, setStatus] = useState(false);
  const [ladiesDrop, setladiesDrop] = useState(false);
  const [backup, setBackup] = useState(false);
  const [gear, setGear] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gents, setgents] = useState(false);
  const [ladies, setladies] = useState(false);
  const [rawhair, setrowhair] = useState(false);
  const [accessories, setaccessories] = useState(false);
  const [topbanner, setTopBanner] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [activePointer, setActivePointer] = useState(-1);
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
      // console
      const response = await axios.get("/products", {
        // headers:{
        //   Authorization:`Bearer ${Cookies}`
        // }
        // params: {
        //   category: filters,
        // },
        params: filters,
      });
      // console.log(response.data);
      setProducts(response.data);
    } catch (e) {}
  };

  // const filterProducts = async () => {
  //   console.log();
  // };
  useEffect(() => {
    getProducts();
  }, [filters]);
  useEffect(() => {
    getCategories();
  }, []);
  const TabHead = [
    {
      id: 1,
      name: "Trending",
    },
    {
      id: 2,
      name: "Top",
    },
    {
      id: 3,
      name: "In-Game",
    },
    {
      id: 4,
      name: "Avatar",
    },
    {
      id: 5,
      name: "Weapon",
    },
  ];
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/ProductDetails/${id}`);
  }
  const cards = [
    {
      id: 1,
      name: "card",
    },
    {
      id: 2,
      name: "card",
    },
    {
      id: 3,
      name: "card",
    },
    {
      id: 4,
      name: "card",
    },
    {
      id: 5,
      name: "card",
    },
    {
      id: 6,
      name: "card",
    },
    {
      id: 7,
      name: "card",
    },
    {
      id: 8,
      name: "card",
    },
    {
      id: 9,
      name: "card",
    },
    {
      id: 10,
      name: "card",
    },
    {
      id: 11,
      name: "card",
    },
    {
      id: 12,
      name: "card",
    },
    {
      id: 13,
      name: "card",
    },
    {
      id: 14,
      name: "card",
    },
    {
      id: 15,
      name: "card",
    },
  ];
  const prices = ["ETH-1", "ETH-2", "ETH-3", "ETH-4"];

  return (
    <>
      <div>
        <div className=" py-5 border-bottom">
          <div className="px120 text-start my-auto d-flex text-18">
            <a
              href="/home"
              className="text-decoration-none  text-18 text-theme-gray text-uppercase my-auto"
            >
              Home
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/home"
              className="text-decoration-none text-18 text-theme-gray text-uppercase"
            >
              cATAGORIES
            </a>
            <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
            <a
              href="/home"
              className="text-decoration-none text-black text-18 text-uppercase "
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
                    <div className="text-start border-bottom border-dark pb-4 mb-2">
                      <p className="text-20  text-uppercase my-auto fw-bold">
                        Categories
                      </p>
                    </div>
                    {/* Gents Wig */}
                    {categories.map((category) => {
                      return (
                        <div className="border-bottom border-secondary py-4">
                          <div className="text-black d-flex ">
                            <p className="text-18 text-theme-gray ">
                              {category.name}{" "}
                            </p>
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
                            <div className=" text-theme-gray  pt-2">
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

                              <div className="ps-2  d-flex f-18">
                                <p className="f-16 Chover">Lace Base</p>
                              </div>
                              <div className="ps-2 d-flex f-18">
                                <p className="f-16 Chover">Silk Base</p>
                              </div>
                              <div className="ps-2 d-flex f-18">
                                <p className="f-16 Chover">Skin Base</p>
                              </div>
                              <div className="ps-2 d-flex f-18">
                                <p className="f-16 Chover">Mixed Base</p>
                              </div>
                              <div className="ps-2 d-flex f-18">
                                <p className="f-16 Chover">Full Head Toupee</p>
                              </div>
                              <div className="ps-2 d-flex f-18">
                                <p className="f-16 Chover">
                                  African American Toupee
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Ladies Wig  */}
                    {/* <div className="border-bottom border-white">
                    <div className="text-black d-flex mt-4">
                      <p className="f-16 fw-bold">Ladies Wig </p>
                      <p
                        className="ms-auto"
                        onClick={() => {
                          setladiesDrop((prevState) => {
                            return !prevState;
                          });
                          setladies((prevState) => {
                            return !prevState;
                          });
                          if (ladiesDrop === false) setTopBanner(2);
                          else setTopBanner(0);
                        }}
                      >
                        {ladiesDrop === false ? (
                          <ExpandMoreIcon className="my-auto" />
                        ) : (
                          <KeyboardArrowUpIcon className="my-auto" />
                        )}
                      </p>
                    </div>
                    {ladiesDrop === true && (
                      <div className=" text-black border-top pt-2">
                        <div className="ps-2  d-flex f-18">
                          <p className="f-16 Chover">Full Head wigs</p>
                        </div>
                        <div className="ps-2  d-flex f-18">
                          <p className="f-16 Chover">Toppers</p>
                        </div>
                        <div className="ps-2 d-flex f-18">
                          <p className="f-16 Chover">Partial wigs</p>
                        </div>
                        <div className="ps-2 d-flex f-18">
                          <p className="f-16 Chover">Extensions</p>
                        </div>
                        <div className="ps-2 d-flex f-18">
                          <p className="f-16 Chover">Weft Bundles</p>
                        </div>
                      </div>
                    )}
                  </div> */}

                    {/* Raw Hair Bundles */}
                    {/* <div className="border-bottom border-white">
                    <div className="text-black d-flex mt-4">
                      <p className="f-16 fw-bold">Raw Hair Bundles</p>
                      <p
                        className="ms-auto d-flex"
                        onClick={() => {
                          setBackup((prevState) => {
                            return !prevState;
                          });
                          if (backup === false) setTopBanner(3);
                          else setTopBanner(0);
                        }}
                      >
                        <span className="my-auto mx-2 fs-xs">36</span>
                        {backup === false ? (
                          <ExpandMoreIcon className="my-auto" />
                        ) : (
                          <KeyboardArrowUpIcon className="my-auto" />
                        )}
                      </p>
                    </div>
                    {backup === true && (
                      <div className=" text-black">
                        <div className="ps-2  d-flex f-18">
                          <p>ETH</p>
                          <input
                            className="form-check-input ms-auto border-2 border-secondary bg-this-page checkBox"
                            type="checkbox"
                            name="buy_now"
                          />
                        </div>
                        <div className="ps-2  d-flex f-18">
                          <p>WETH</p>
                          <input
                            className="form-check-input ms-auto border-2 border-secondary bg-this-page checkBox"
                            type="checkbox"
                            name="buy_now"
                          />
                        </div>
                      </div>
                    )}
                  </div> */}

                    {/* Accessories */}
                    {/* <div className="">
                    <div className="text-black d-flex mt-4">
                      <p className="f-16 fw-bold">Accessories</p>
                      <p
                        className="ms-auto d-flex"
                        onClick={() => {
                          setGear((prevState) => {
                            return !prevState;
                          });
                          if (gear === false) setTopBanner(4);
                          else setTopBanner(0);
                        }}
                      >
                        <span className="my-auto mx-2 fs-xs">6</span>
                        {gear === false ? (
                          <ExpandMoreIcon className="my-auto" />
                        ) : (
                          <KeyboardArrowUpIcon className="my-auto" />
                        )}
                      </p>
                    </div>
                    {gear === true && (
                      <div className=" text-black">
                        <div className="ps-2  d-flex f-18">
                          <p>ETH</p>
                          <input
                            className="form-check-input ms-auto border-2 border-secondary bg-this-page checkBox"
                            type="checkbox"
                            name="buy_now"
                          />
                        </div>
                        <div className="ps-2  d-flex f-18">
                          <p>WETH</p>
                          <input
                            className="form-check-input ms-auto border-2 border-secondary bg-this-page checkBox"
                            type="checkbox"
                            name="buy_now"
                          />
                        </div>
                      </div>
                    )}
                  </div> */}
                  </div>
                  <div className="m-auto pt-2">
                    <img
                      src={sidebarimg}
                      alt="this is an image "
                      className="w-100 m-auto"
                    />
                  </div>
                </div>

                <div className="w-75 px-5 text-start">
                  {/* <div>
                    <h5 className=" fw-bolder">Collections</h5>
                    <p className="pt-2 fw-lighter">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Quisque non nulla nulla, nec tincidunt risus morbi
                      ultricies est ditae odio ultrices imperdiet. Cras accumsan
                      dorci maces consequat blandi susto dusto elementum libero
                      non honcus.
                    </p>
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
                        <div className="img-card position-relative">
                          <img
                            className="w-100 h-100 rounded-iconive"
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
                          <p className="m-0 py-0 text-12 text-theme-gray">
                            Be confident with any style you like to own from a
                            large variety of styles.
                          </p>
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
