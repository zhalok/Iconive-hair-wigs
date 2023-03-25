import React, { useState } from "react";
import "./ProductModal.css";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pic1 from './Images/modalpic2.jpg'
import pic from './Images/modalpic.webp'

export default function ProductModal({ id }) {
  return (
    <>
      
          <div className="modal " id={id}>
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div clasclassNames="d-flex ">
                  <span
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="w-nai me-nai "><CloseIcon/> </span>
                 
                </div>
                <div className="modal-body d-flex">
                  <div className=" w-50">
                    
                    <div className="w-100">
                    <img src={pic} alt="wigs"  className="w-100" />
                    </div>
                    <div className="w-100 d-flex justify-content-between py-3">
                      <img src={pic1} alt="wigs"  className="wm-22 h-25 "  />
                      <img src={pic1} alt="wigs"  className="wm-22 h-25 " />
                      <img src={pic1} alt="wigs" className="wm-22 h-25  " />
                      <img src={pic1} alt="wigs"  className="wm-22 h-25 " />
                      <img src={pic1} alt="wigs"  className="wm-22 h-25 " />
                      
                    </div>
                    
                  </div>
                  <div className="w-50 ps-3 my-auto">
                    <h4  className="text-start fw-bold">7"X8" COURTNEY | MONO PART | LEFT PART REMY HUMAN HAIR TOPPER</h4>

                    <p className="text-start text-secondary">SKU: 2050</p>
                    <div className="d-flex justify-content-between py-3">
                      <h3 className="fw-bold my-auto">$308.50</h3>
                     <span className="d-flex "> <h5 className="fw-bold my-auto d-flex">
                      <StarIcon className="text-black fw-bold"/>
                      <StarIcon className="text-black fw-bold"/>
                      <StarIcon className="text-black fw-bold"/>
                      <StarIcon className="text-black fw-bold"/>
                      <StarIcon className="text-black fw-bold"/>
                      </h5> 
                      <p className="my-auto ms-1 text-secondary me-5">(90) Reviews</p>
                      </span>

                 
                    </div>
                     <div className="text-start">
                          {/* part */}
                          <p className="text-secondary pt-2 ">Part :</p>
                         <div className="d-flex gap-2">
                        <button className="btn btn-dark rounded-0 fs-6">LEFT PART</button>
                        <button className="btn btn-outline-dark rounded-0 fs-6">MIDDLE PART</button>
                      </div>
                      
                       {/* part */}
                       <p className="text-secondary pt-3 ">Color :</p>
                         <div className="d-flex gap-2">
                        <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">p</button>
                        <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">p</button>
                        <button className="btn btn-dark rounded-circle px-3 py-2 text-dark fs-6">p</button>
                      </div>

                         {/*Lengtth */}
                         <p className="text-secondary pt-3 ">Length :</p>
                         <div className="d-flex gap-2">
                        <button className="btn btn-dark rounded-0 fs-6">12"</button>
                        <button className="btn btn-outline-dark rounded-0 fs-6">16"</button>
                        <button className="btn btn-outline-dark rounded-0 fs-6">20"</button>
                      </div>

                         {/*density */}
                         <p className="text-secondary pt-3 ">Density :</p>
                         <div className="d-flex gap-2">
                        <button className="btn btn-dark rounded-0 fs-6">100%</button>
                        <button className="btn btn-outline-dark rounded-0 fs-6">120%</button>
                        <button className="btn btn-outline-dark rounded-0 fs-6">200%"</button>
                      </div>
                      <p className="mt-4 my-auto"><AccessTimeIcon className="me-1 my-auto"/> <small>Processing Time: <span className="text-secondary fw-bold"> 3-5 business days</span> </small> </p>
                      <p className="pt-3"> <small> Processing time does not include delivery time</small></p>
                   
                      <p className=""> <small>  The waves are not permanent and they are added by a curling iron </small></p>


                      <div className="w-100">
                        <button className="w-50 btn btn-dark py-2 rounded-0 me-4"><ShoppingCartIcon/> ADD TO CART</button>
                        <button className=" btn btn-outline-dark py-2 px-5  rounded-0">+ WISH LIST</button>
                      </div>
                     </div>
                  </div>
                 
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary rounded-0 me-5 px-4"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>

    </>
  );
}
