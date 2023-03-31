import React, { useState } from "react";
import "./checkout.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Image/checkimg.jpg";
import locicon from "./Image/icons/location-pin.png";
import callicon from "./Image/icons/phone-call.png";
import mailicon from "./Image/icons/email.png";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Checkout() {
  const [check, setCheck] = useState(false);
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <div>
        {/* top image */}
        <div className="top-banner ">
          <div className="xyauto">
            <h3 className="big-txt text-dark">Checkout</h3>
            <p className="">Home / Checkout</p>
          </div>
        </div>

        {/* main section */}
        <div className="container py-5 ">
          <div className="row  shadow">
            <div className="col-8 p-4 ">
              <div className="text-start mb-5">
                <h4 className="mb-3">Already registered?</h4>
                <button className="btn btn-dark rounded-0 px-4 fs-6">
                  <small>CLICK HERE TO LOGIN</small>
                </button>
              </div>
              <h4 className="text-theme text-start ">Delivery Address</h4>
              <form action="" className="text-start pe-4">
                <div className="d-flex pt-4">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Name<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1 d-flex">
                      Phone Number <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="number"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                </div>
                <div className="d-flex pt-4">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1 d-flex">
                      Email <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="email"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">
                      Password<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75  px-2"
                    />
                  </div>
                </div>
                <div className="d-flex pt-4 ">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                </div>

                <div className="pt-4 h-100  d-flex justify-content-between">
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2"
                    />
                  </div>
                </div>
                <div className="form-check form-switch pt-5">
                  <input
                    onClick={() => {
                      setCheck((prevState) => {
                        return !prevState;
                      });
                    }}
                    className={` form-check-input btn-dark bg-light ${
                      check && "bg-dark"
                    }`}
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckChecked"
                  >
                    Billing another address
                  </label>
                </div>
                {/* billing another address  */}
                {check && (
                  <div>
                    <div className="d-flex pt-4">
                      <div className="w-50 pe-lg-4">
                        <p className="text-start mb-1">
                          Name<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                      <div className="w-50 ">
                        <p className="text-start mb-1 d-flex">
                          Phone Number <span className="spanRed"> *</span>
                        </p>
                        <input
                          type="number"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                    </div>

                    <div className="d-flex pt-4 ">
                      <div className="w-50 pe-lg-4">
                        <p className="text-start mb-1">
                          Address<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                      <div className="w-50 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                    </div>

                    <div className="pt-4 h-100  d-flex justify-content-between">
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          Address<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <input
                  type="submit"
                  value="SUBMIT"
                  className="border-0 btn-dark text-white px-5 py-3 my-5 w-100 pe-4"
                />
              </form>
            </div>
            <div className="col-4 border-start p-4 ">
             
              {
                [1,2,3].map((card,index)=>(
                  <div key={index} className="w-100 text-start py-4 border-bottom border-1">
                <div className="d-flex">
                  <div className="w-s100 w-15 "> <img className="w-100 h-100" src={checkimg} alt="this is an icon"/> </div>
                  <div className="d-flex w-85 ms-2">
                    <h6 className="fw-bold my-auto">
                      8.5"x9" Blake | Silk Part Remy Human Hair Topper With
                      Layers | Left Part
                    </h6>
                  </div>
                </div>
                <p className="mt-1">
                  <small>
                    Color : Natural Black With Brown Shades, Length : 12",
                    Density : 130%
                  </small>
                </p>
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold my-auto">$ {501*amount}</h5>
                  <div>
                    <ButtonGroup size="sm" >
                      <Button
                      onClick={()=>{
                       if(amount===0)
                       return;
                       else
                       setAmount((prevs)=>{
                        return prevs-1;
                      })
                      }}
                      className="btn-light rounded-0 border"><RemoveIcon/></Button>
                      <Button className="btn-light rounded-0 border px-4">{amount}</Button>
                      <Button onClick={()=>{
                        setAmount((prevs)=>{
                          return prevs+1;
                        })
                      }} 
                      className="btn-light rounded-0 border "><AddIcon/></Button>
                    </ButtonGroup>
                  </div>
                  <div>
                    <button size="sm" className="btn  py-0 me-3" > <DeleteIcon className="text-danger"/> </button>
                  </div>
                </div>
              </div>
                ))
              }

                {/* <div className="bg-theme">
                <div className="d-flex py-4 justify-content-center align-self-center bb">
                  <img
                    src={clcokicon}
                    alt="this is a clok icon"
                    height="25px"
                  />
                  <h5 className="ps-3 text-light">OPENING HOURS</h5>
                </div>
                <div className="text-light p-4">
                  <div className="d-flex py-1">
                    <p>sunday :</p>
                    <p className="ms-auto">8.00am - 5.00pm</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Monday :</p>
                    <p className="ms-auto">8.00am - 5.00pm</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Tuesday :</p>
                    <p className="ms-auto">8.00am - 5.00pm</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Wednesday :</p>
                    <p className="ms-auto">8.00am - 5.00pm</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Thursday :</p>
                    <p className="ms-auto">8.00am - 5.00pm</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Friday :</p>
                    <p className="ms-auto ">Closed</p>
                  </div>
                  <div className="d-flex py-1">
                    <p>Saturday :</p>
                    <p className="ms-auto">Closed</p>
                  </div>
                </div>
              </div> */}
              {/* contact info */}
              {/* <div className="bg-offwhite mt-5">
                <div className="d-flex py-4 justify-content-center align-self-center bbb">
                  <h5 className="ps-3 fw-bold ">CONTACT INFO</h5>
                </div>
                <div className="text-dark p-4">
                  <div className="d-flex py-1">
                    <img
                      src={locicon}
                      alt=""
                      height="28px"
                      className="mx-3 my-2"
                    />
                    <p className="ps-2 text-start">
                      Shahjalal University of Science and technology, Sylhet
                    </p>
                  </div>
                  <div className="d-flex py-2">
                    <img src={callicon} alt="" height="25px" className="mx-3" />
                    <p className="ps-2">+88 01791-615539</p>
                  </div>
                  <div className="d-flex py-1">
                    <img src={mailicon} alt="" height="25px" className="mx-3" />
                    <p className="px-2">sust.help@gmail.com</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
