/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './CustomWigs.css'
import card1 from "../Images/custom/wigs1.jpg";
import card2 from "../Images/custom/wigs2.jpg";
import card3 from "../Images/custom/wigs3.jpg";
import card4 from "../Images/custom/wigs4.jpg";


export default function CustomWigs() {
  return (
    <>
    <div className="bg-pink py-5">
        <div className="ps-r mt-5">
          <h4 className="fw-bold fs-2  pt-5  w-100 mx-auto ">
          Custom Medical Wigs
          </h4>
          <p className='pt-4'>For those with moderate to servere hair loss or those experiencing scalp sensitivity.Custom medical wigs are made with high precision lightweight , comfortable , breathable and soft to the touch</p>
        </div>
        <div className="d-flex container mx-auto" >
          <div className="d-flex my-5 gap-5 mx-auto ">
            {/* card */}
            <div className="mx-auto  wc-22 shadow">
                <img
                  className="w-100 h-100"
                  src={card1}
                  alt="This  is an  picture"
                />
            </div>

            <div className="mx-auto  wc-22">
                <img
                  className="w-100 h-100"
                  src={card2}
                  alt="This  is an  picture"
                />
            </div>

            <div className="mx-auto  wc-22">
                <img
                  className="w-100 h-100"
                  src={card3}
                  alt="This  is an  picture"
                />
            </div>

            <div className="mx-auto  wc-22">
                <img
                  className="w-100 h-100"
                  src={card4}
                  alt="This  is an  picture "
                />
            </div>
          </div>

        </div>
        
        <button className='btn btn-outline-dark px-5 py-2 rounded-0 my-2 mx-auto'>Show More</button>
      </div>
      
    </>
  )
}
