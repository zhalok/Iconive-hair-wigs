import React,{useState} from 'react'
import maleCollection from "./image/malecollection.png";
import femaleCollection from "./image/femaleCollections.png";
import down from "./icons/downArrow.svg";
import card1 from "./image/cardh1.jpg";
import banner1 from "./image/banner1.jpg";
import "./Category.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductModal from "../../Components/ProductModal/ProductModal";

export default function CategorySidebar() {
    const [status, setStatus] = useState(false);
    const [quantity, setQuantity] = useState(false);
    const [backup, setBackup] = useState(false);
    const [gear, setGear] = useState(false);
    const [showModal, setShowModal] = useState(false);
  return (
    <>
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
                          setQuantity((prevState) => {
                            return !prevState;
                          });
                        }}
                      >
                        {quantity === false ? (
                          <ExpandMoreIcon className="my-auto" />
                        ) : (
                          <KeyboardArrowUpIcon className="my-auto" />
                        )}
                      </p>
                    </div>
                    {quantity === true && (
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

    </>
  )
}
