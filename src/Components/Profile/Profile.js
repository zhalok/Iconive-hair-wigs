/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Profile.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Order from "./Order";
import Wishlist from "./Wishlist";
import MyProfile from "./MyProfile";
import OrderHistory from "./OrderHistory";
import Refund from "./Refund";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// const sidebarItem = [
//   { id: 1, name: "My Profile" },
//   { id: 2, name: "Orders" },
//   { id: 3, name: "Order History" },
//   { id: 4, name: "Wishlist" },
//   { id: 5, name: "Refund and Return" },
// ];

export default function Profile() {
  const [sidebar, setSidebar] = useState(1);
  const [activeBtn, setActiveBtn] = useState(true);
  const [orders, setOrders] = useState([]);
  const { user, setUser } = useContext(AuthContext);

  // console.log("user", user);
  // console.log(user)
  const [name, setName] = useState({
    value: "",
    editable: false,
  });

  const navigate = useNavigate();

  const logout = async () => {
    Cookies.remove("jwt");
    setUser(null);
    // navigate("/");
    // window.location.replace("")
    window.location.reload();
  };

  const getOrders = async () => {
    try {
      const response = await axios.get("/order/getAllByUser", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });

      setOrders(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const token = Cookies.get("jwt");

    token ? getOrders() : window.location.replace("/home");
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const querySidebar = searchParams.get("sidebar");

    // if (category) {
    //   setShowSubCategory(category);
    //   setFilters((prev) => {
    //     return { ...prev, categories: [category] };
    //   });
    // }
    // if (banner) {
    //   setTopBanner(parseInt(banner));
    // }

    if (querySidebar) {
      setSidebar(parseInt(querySidebar));
    }
  }, []);
  // useEffect(()=>)

  return (
    <div className="px60 bg-body">
      <div className="w-100 d-flex  py-5 flex-column flex-lg-row">
        <div className="w-20 py-3 me-md-5 mx-auto">
          <div className=" profile-border bg-light pt-5">
            <div className="w-100px  bg-themeYellow rounded-circle d-flex mx-auto mb-4 shadow-lg">
              <h1 className="m-auto text-light fw-bold">
                {name?.value && name.value[0].toUpperCase()}
              </h1>
            </div>
            <h4 className="fw-bold pb-4 dp-text">{name.value}</h4>
            <div className="px-5 pb-3">
              <div className="d-flex border-top border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 1 ? (
                    <img
                      src="./Image/profile/proY.svg"
                      alt="this is an image"
                      className=""
                    />
                  ) : (
                    <img
                      src="./Image/profile/prosvg.svg"
                      alt="this is an image"
                      className=""
                    />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(1);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 1 && "text-theme"
                  }`}
                >
                  My Profile
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 2 ? (
                    <img
                      src="./Image/profile/orderY.svg"
                      alt="this is an image"
                      className=""
                    />
                  ) : (
                    <img
                      src="./Image/profile/order.svg"
                      alt="this is an image"
                      className=""
                    />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(2);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 2 && "text-theme"
                  }`}
                >
                  Orders
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 3 ? (
                    <img
                      src="./Image/profile/historyY.svg"
                      alt="this is an image"
                      className=""
                    />
                  ) : (
                    <img
                      src="./Image/profile/history.svg"
                      alt="this is an image"
                      className=""
                    />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(3);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 3 && "text-theme"
                  }`}
                >
                  Order History
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 4 ? (
                    <img
                      src="./Image/profile/wishY.svg"
                      alt="this is an image"
                      className=""
                    />
                  ) : (
                    <img
                      src="./Image/profile/wish.svg"
                      alt="this is an image"
                      className=""
                    />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(4);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 sideItem text-theme-gray ${
                    activeBtn === true && sidebar === 4 && "text-theme"
                  }`}
                >
                  Wishlist
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 5 ? (
                    <img
                      src="./Image/profile/refundY.svg"
                      alt="this is an image"
                      className=""
                    />
                  ) : (
                    <img
                      src="./Image/profile/refundd.svg"
                      alt="this is an image"
                      className=""
                    />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(5);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-start text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 5 && "text-theme"
                  }`}
                >
                  Refund & Return
                </p>
              </div>

              {/* <div className="d-flex border-bottom py-4 mb-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 5 ? (
                    <img src={refundY} alt="this is an image" className="" />
                  ) : (
                    <img src={refundd} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(5);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-start text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 5 && "text-theme"
                  }`}
                >
                  Refund & Return
                </p>
              </div> */}

              {user?.role == "admin" && (
                <div className="d-flex border-bottom py-4">
                  <span className="my-auto ms-1">
                    <AdminPanelSettingsIcon />
                  </span>
                  <p
                    onClick={() => {
                      // logout();
                      window.open(
                        process.env.REACT_APP_ADMIN_PANNEL_URL,
                        "_blank"
                      );
                    }}
                    className={`my-auto text-18 ps-4 text-start text-theme-gray sideItem`}
                  >
                    Admin Pannel
                  </p>
                </div>
              )}

              <div className="d-flex border-bottom py-4 mb-4">
                <span className="my-auto ms-1">
                  <LogoutIcon />
                </span>
                <p
                  onClick={() => {
                    logout();
                  }}
                  className={`my-auto text-18 ps-4 text-start text-theme-gray sideItem`}
                >
                  Logout
                </p>
              </div>
            </div>
            {/* <div className="w-100 pb-5 px-5">
              <button className="w-100 bg-themeYellow btn text-light fw-bold">
                LOG OUT
              </button>
            </div> */}
          </div>
        </div>

        <div className="w-80 d-flex flex-column py-3 mx-auto">
          {sidebar === 2 && (
            <div className="d-flex flex-column gap-5 pb-5">
              {orders.map((order, index) => {
                return (
                  <Order order={order} index={index} getOrders={getOrders} />
                );
              })}
            </div>
          )}
          {sidebar === 1 && <MyProfile name={name} setName={setName} />}
          {sidebar === 3 && (
            <div className="d-flex flex-column gap-5 pb-5">
              <OrderHistory />
            </div>
          )}
          {sidebar === 4 && (
            <div className="w-100">
              <Wishlist></Wishlist>
            </div>
          )}
          {sidebar === 5 && (
            <div>
              <Refund />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
