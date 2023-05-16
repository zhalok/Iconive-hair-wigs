import { React, useContext, useEffect, useState } from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import "./Orders.css";
import girl from "../ImagesPage/girl.png";
import pola from "../ImagesPage/Guy.png";
import wholesale from "../ImagesPage/WI.svg";
import left from "../ImagesPage/leftquote.png";
import right from "../ImagesPage/rightquote.png";
import feature1 from "../ImagesPage/freeshipping.svg";
import feature2 from "../ImagesPage/secure.svg";
import feature3 from "../ImagesPage/support.svg";
import feature4 from "../ImagesPage/refund.svg";
import TopSelling from "../../Components/TopSelling/TopSelling";
import Trending from "../../Components/Trending/Trending";
import Replacement from "../../Components/Replacement/Replacement";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CustomWigs from "../../Components/CustomWiga/CustomWigs";
import Subscription from "../../Components/Subscription/Subscription";
import AuthContext from "../../Contexts/AuthContext";
import axios from "../../utils/axios";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [userInformation, setUserInformation] = useState({});

  const getUserInformation = async () => {
    try {
      const response = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // console.log(response.data);
      setUserInformation(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };

  const getOrdersByUser = async () => {
    try {
      const response = await axios.get("/order/getAllByUser", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      console.log("orders", response.data);
      // setUserInformation(response.data.user);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getOrdersByUser();
    getUserInformation();
  }, []);
  console.log("user information", userInformation);

  return (
    <>
      <div className="container">
        <div className="information">
          <h1>Information</h1>
          <div>
            {" "}
            <b>Name:</b> {userInformation?.name}
          </div>
          <div>
            {" "}
            <b>Email:</b> {userInformation?.email}
          </div>
        </div>
        <div className="orders">
          <h1>Orders</h1>
        </div>
      </div>
    </>
  );
}
