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
import ProductModal from "../../Components/ProductModal/ProductModal";
import axios from "../../utils/axios";
import { Cookie } from "@mui/icons-material";

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
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      // console
      const response = await axios.get("/products", {
        // headers:{
        //   Authorization:`Bearer ${Cookies}`
        // }
      });
      console.log(response.data);
      setProducts(response.data);
    } catch (e) {}
  };
  useEffect(() => {
    getProducts();
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

  function handleClick() {
    navigate("/ProductDetails");
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
                  <div className="border-bottom border-white">
                    <div className="text-black d-flex ">
                      <p className="f-16 fw-bold">Gents Wig </p>
                      <p
                        className="ms-auto"
                        onClick={() => {
                          setStatus((prevState) => {
                            return !prevState;
                          });
                          // setgents((prevState) => {
                          //   return !prevState;
                          // });
                          if (status === false) setTopBanner(1);
                          else setTopBanner(0);
                        }}
                      >
                        {status === false ? (
                          <ExpandMoreIcon className="my-auto" />
                        ) : (
                          <KeyboardArrowUpIcon className="my-auto" />
                        )}
                      </p>
                    </div>
                    {status === true && (
                      <div className=" text-black border-top pt-2">
                        <div className="ps-2  d-flex f-18">
                          <p className="f-16 Chover">Mono Base</p>
                        </div>
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
                          <p className="f-16 Chover">African American Toupee</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ladies Wig  */}
                  <div className="border-bottom border-white">
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
                  </div>

                  {/* Raw Hair Bundles */}
                  <div className="border-bottom border-white">
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
                  </div>

                  {/* Accessories */}
                  <div className="">
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
                  </div>
                </div>

                <div className="w-75 p-4  pt-5 text-start">
                  <div>
                    <h5 className=" fw-bolder">Collections</h5>
                    <p className="pt-2 fw-lighter">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Quisque non nulla nulla, nec tincidunt risus morbi
                      ultricies est ditae odio ultrices imperdiet. Cras accumsan
                      dorci maces consequat blandi susto dusto elementum libero
                      non honcus.
                    </p>
                  </div>

                  <div className="d-flex flex-wrap w-100 pt-4 gap-4 mx-auto">
                    {products.map((product, index) => (
                      <div
                        onClick={handleClick}
                        key={index}
                        className="card-cat  shadow w-25 "
                      >
                        <div className="img-card position-relative">
                          <img
                            className="w-100 h-100"
                            src={product.photo}
                            alt="This  is an  picture"
                          />
                          <button
                            onClick={() =>
                              setShowModal((pre) => {
                                return !pre;
                              })
                            }
                            data-bs-target="#modalID"
                            data-bs-toggle="modal"
                            className="position-absolute top-50 left-20 d-flex btn btn-dark shodow px-3 py-1 f-14 rounded-0"
                          >
                            <ShoppingCartIcon className="pe-1 my-auto" /> ADD TO
                            CART
                          </button>
                        </div>
                        <div className="text-center px-2">
                          <h6 className="mt-4 mb-2 fw-bold">{product.name}</h6>
                          {/* <p className="m-0">Coco Lee, coins are Kumis brown</p> */}
                          <h5 className="mt-2 mb-3 fw-bold">{`$ ${product.price}`}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ProductModal id="modalID"></ProductModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
