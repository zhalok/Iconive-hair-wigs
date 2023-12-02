import { React, useContext, useEffect, useState } from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import "./Orders.css";
import AuthContext from "../../Contexts/AuthContext";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import OrderList from "../../Components/Orders/OrderList";

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

  // const getOrdersByUser = async () => {
  //   try {
  //     const response = await axios.get("/order/getAllByUser", {
  //       headers: {
  //         Authorization: `Bearer ${Cookies.get("jwt")}`,
  //       },
  //     });
  //     // console.log("orders", response.data);
  //     // setUserInformation(response.data.user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    // getOrdersByUser();
    getUserInformation();
  }, []);
  // console.log("user information", userInformation);

  return (
    <>
      <div className="orderContainer">
        <div className="userInformation">
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
          <OrderList />
        </div>
      </div>
    </>
  );
}
