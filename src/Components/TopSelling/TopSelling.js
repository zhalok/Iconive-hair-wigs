/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./TopSelling.css";
import card1 from "../Images/cardh1.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function TopSelling() {
 

  const cards = [
    {
      id: 1,
      name: "card1",
    },
    {
      id: 2,
      name: "card2",
    },
    {
      id: 3,
      name: "card3",
    },
    {
      id: 4,
      name: "card4",
    },
  ];
  return (
    <>
      <div className="container ps-r">
        <div className="ps-r">
        <hr />
          <h5 className="fw-bold fs-4 bg-wh text-dark px-4 py-3 w-25 mx-auto abstop mb-3">
           # Top Selling
          </h5>
         
        </div>
        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto ">
          {cards.map((card, index) => (
            <div key={index} className="card-main  shadow w-25">
              <div className="img-card">
                <img
                  className="w-100 h-100"
                  src={card1}
                  alt="This  is an  picture"
                />
              </div>
              <div className="text-center px-3">
                <h6 className="mt-4 mb-2 fw-bold">COCO LEE</h6>
                <p className="m-0">Coco Lee, coins are Kumis brown</p>
                <h5 className="mt-2 mb-3 fw-bold text-dark fs-5">$500</h5>
                <button  className="btn btn-gray text-light rounded-0 fw-6 mb-3"><ShoppingCartIcon className="my-auto" /> <small>ADD TO CART</small> </button>
              </div>
            </div>
          ))}
          
        </div>
        <div>
            <button className="btn btn-outline-dark px-5 py-2 rounded-0 my-5">SHOW MORE</button>
        </div>
      </div>
      {
      
     
      }
    </>
  );
}
