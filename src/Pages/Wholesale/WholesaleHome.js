import { Button } from "@mui/base";
import React, { useContext, useEffect, useState } from "react";
import banner from "../../.././src/Components/Images/joinus/wholesale.webp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Wholesale.css";
import Subscription from "../../Components/Subscription/Subscription";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";

const categoriesGentsWhole = [
  {
    id: 1,
    title: "MGM",
  },
  {
    id: 2,
    title: "Q6",
  },
  {
    id: 3,
    title: "MONO",
  },
  {
    id: 4,
    title: "Holly",
  },
  {
    id: 5,
    title: "Another Product",
  },
  {
    id: 6,
    title: "Product",
  },
  {
    id: 7,
    title: "Name of Product",
  },
];
const categoriesLadiessWhole = [
  {
    id: 1,
    title: "Mono Base",
  },
  {
    id: 2,
    title: "Lase Base",
  },
  {
    id: 3,
    title: "Silk Base",
  },
  {
    id: 4,
    title: "Skin Base",
  },
  {
    id: 5,
    title: "Mixed Base",
  },
  {
    id: 6,
    title: "Full Head Toupee",
  },
  {
    id: 7,
    title: "African Anerican Wig",
  },
];

const ProductTable = [
  {
    id: 1,
    name: "Black hair clipper",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
  {
    id: 1,
    name: "AUS-3",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
  {
    id: 1,
    name: "ZIK",
    quantity: "2",
    unitprice: "134",
    totalprice: "123",
  },
];

export default function WholesaleHome() {
  const [gents, setGents] = useState("");
  const [ladies, seLadies] = useState("");
  const [extension, setExtension] = useState("");
  const [accessories, setAccessories] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const { user, setUser } = useContext(AuthContext);
  const [gentsProducts, setGentsProducts] = useState();
  // Array.from({ length: 20 })
  const [ladiesProducts, setLadiesProducts] = useState([]);
  const [extensionProducts, setExtensionProducts] = useState([]);
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const submitOrder = async () => {
    if (selected.length == 0) {
      toast.warn("Please select at least one product");
      return;
    }
    setSubmitting(true);
    // toast.loading("Submitting order");
    axios
      .post(
        "/wholesale/submitOrder",
        {
          items: selected.map((e) => {
            return { name: e.name, price: e.price, quantity: e.quantity };
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      )
      .then((e) => {
        console.log("Order submitted");
        setSelected([]);
        setSubmitting(false);
        toast.success("Order submitted");
      })
      .catch((e) => {
        setSubmitting(false);
        toast.error("An error occured while submitting your order");

        console.log(e);
      });
  };

  const fetchProducts = async () => {
    axios
      .get("/products", {
        params: {
          filters: {
            categories: ["6432a3f8bc1e9c4115b67db5"],
          },
        },
      })
      .then((res) => {
        // console.log(res.data.slice(0, 3));
        setGentsProducts(res.data);
        console.log(gentsProducts);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/products", {
        params: {
          filters: {
            categories: ["6432eb5a9e5f9a8abde960e0"],
          },
        },
      })
      .then((res) => {
        setLadiesProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/products", {
        params: {
          filters: {
            categories: ["64343a704fb336001b129958"],
          },
        },
      })
      .then((res) => {
        setExtension(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/products", {
        params: {
          filters: {
            categories: ["64343aaf4fb336001b12995c"],
          },
        },
      })
      .then((res) => {
        setAccessories(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (!user?.isWholeSaler) {
      navigate("/wholesale");
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(selected);

  return (
    <div>
      <ToastContainer />
      <div className="w-100">
        <img src={banner} className="w-100" alt="this is a banner" />
      </div>
      <div className="bg-whole-home p-5">
        <div className="w-100 pb-3">
          <h2 className="fw-bold fs-2  text-dark px-4 pb-0 mx-auto text-uppercase headingHover">
            Catalog
          </h2>
          <p className="text-theme-gray text-18">
            Click the buttons below to download the catalogs
          </p>
          <div className="d-flex justify-content-between container pt-4p">
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Gents
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Ladies
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Hair extensions
            </button>
            <button className="btn fw-bold  py-2 btn-whole shadow">
              Accessories
            </button>
          </div>
        </div>
      </div>

      <div
        className="container d-flex justify-content-center gap-5 my-5"
        style={{
          cursor: "pointer",
        }}
      >
        <div className="w-25">
          {/* Gents Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
            style={
              {
                // width: "500px",
              }
            }
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start fw-bold mb-0 pt-1 px-2">GENTS</p>
              <p className="ms-auto my-auto">
                {gents ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setGents((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setGents((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {gents && (
              <div
                className=" text-theme-gray  pt-2"
                style={{
                  height: 300,
                  overflow: "auto",
                }}
              >
                {gentsProducts?.map((product, index) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      onClick={() => {
                        setSelected((prev) => {
                          if (prev.map((e) => e._id).includes(product._id)) {
                            const newState = [...prev].filter((e) => {
                              return e._id != product._id;
                            });

                            return newState;
                          } else {
                            const newState = [...prev];
                            newState.push({ ...product, quantity: 1 });
                            return newState;
                          }
                        });
                      }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto w-5"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // style={{
                        //   minWidthwidth: "30px",
                        //   maxWidth: "30px",
                        // }}
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        checked={selected
                          .map((product) => product._id)
                          .includes(product._id)}
                        aria-label="..."
                      />

                      <p className="text-14 text-start Chover ms-3 my-auto w-100">
                        {index}
                        {product?.name}
                      </p>
                    </div>
                  );
                })}
                {/* {items} */}
              </div>
            )}
          </div>
        </div>
        <div className="w-25  ">
          {/*   Ladies Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                Ladies
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {ladies ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      seLadies((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      seLadies((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {ladies && (
              <div className=" text-theme-gray  pt-2">
                {ladiesProducts?.map((product) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      onClick={() => {
                        setSelected((prev) => {
                          if (prev.map((e) => e._id).includes(product._id)) {
                            const newState = [...prev].filter((e) => {
                              return e._id != product._id;
                            });

                            return newState;
                          } else {
                            const newState = [...prev];
                            newState.push({ ...product, quantity: 1 });
                            return newState;
                          }
                        });
                      }}
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {product.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="w-25 ">
          {/*   hair extension Wig */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                {" "}
                hair extension
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {extension ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setExtension((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setExtension((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {extension && (
              <div className=" text-theme-gray  pt-2">
                {extensionProducts?.map((product) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      onClick={() => {
                        setSelected((prev) => {
                          if (prev.map((e) => e._id).includes(product._id)) {
                            const newState = [...prev].filter((e) => {
                              return e._id != product._id;
                            });

                            return newState;
                          } else {
                            const newState = [...prev];
                            newState.push({ ...product, quantity: 1 });
                            return newState;
                          }
                        });
                      }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {product.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="w-25 ">
          {/*   accessories */}

          <div
            className="dropbg p-4"
            // onClick={() => {
            //   console.log("hello world");
            // }}
          >
            <div className="text-black d-flex border-bottom border-1 border-secondary py-3">
              <p className="text-18 text-start text-uppercase fw-bold mb-0 pt-1 px-2">
                {" "}
                accessories
              </p>
              <p
                className="ms-auto my-auto"
                // onClick={() => {
                //   setShowSubCategory((prevState) => {
                //     return prevState != category._id
                //       ? category._id
                //       : "";
                //   });
                // }}
              >
                {accessories ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setAccessories((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                ) : (
                  <ExpandMoreIcon
                    onClick={() => {
                      setAccessories((prevs) => {
                        return !prevs;
                      });
                    }}
                    className="my-auto"
                  />
                )}
              </p>
            </div>
            {accessories && (
              <div className=" text-theme-gray  pt-2">
                {accessoriesProducts?.map((product) => {
                  return (
                    <div
                      className="ps-2  d-flex f-18 my-3"
                      //   onClick={() => {
                      //     setFilters((prev) => {
                      //       const uniq = category._id + " " + subcategory._id;
                      //       if (prev.includes(uniq)) {
                      //         return prev.filter((item) => {
                      //           return item !== uniq;
                      //         });
                      //       } else {
                      //         return [...prev, uniq];
                      //       }

                      //       return [...prev];
                      //     });
                      //   }}
                      onClick={() => {
                        setSelected((prev) => {
                          if (prev.map((e) => e._id).includes(product._id)) {
                            const newState = [...prev].filter((e) => {
                              return e._id != product._id;
                            });

                            return newState;
                          } else {
                            const newState = [...prev];
                            newState.push({ ...product, quantity: 1 });
                            return newState;
                          }
                        });
                      }}
                    >
                      <input
                        class="form-check-input checkCatagory my-auto"
                        type="checkbox"
                        id="checkboxNoLabel"
                        // checked={filters
                        //   .map((e) => e.split(" ")[1])
                        //   .includes(subcategory._id)}
                        aria-label="..."
                      />
                      <p className="text-14 text-start Chover ms-3 my-auto">
                        {product.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container pb-4p">
        <h2 className="my-5 pt-4p fw-bold">PRODUCT CHECKLIST</h2>
        <div>
          <table className="table bg-whole-home shadow">
            <thead className="">
              <tr className="text-th mt-3 pt-table">
                <th scope="col">No.</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((product, index) => (
                <tr className="text-td py-2">
                  <td>{index + 1}</td>
                  <td className="d-flex ps-5 gap-4">
                    <div
                      onClick={() => {
                        setSelected((prev) => {
                          return prev.filter((e) => e._id != product._id);
                        });
                      }}
                    >
                      <CloseIcon className="borderbtn text-td fs-5 my-auto" />
                    </div>
                    {product?.name}
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-4">
                      <AddIcon
                        onClick={() => {
                          setSelected((prev) => {
                            const newState = [...prev];
                            newState.find(
                              (e) => e._id == product._id
                            ).quantity += 0.5;
                            return newState;
                          });
                        }}
                        className="borderbtn"
                      />
                      {product?.quantity}
                      <RemoveIcon
                        onClick={() => {
                          setSelected((prev) => {
                            const newState = [...prev];
                            const idx = newState.findIndex(
                              (e) => e._id == product._id
                            );
                            if (newState[idx].quantity > 1) {
                              newState[idx].quantity -= 0.5;
                            } else {
                              newState.splice(idx, 1);
                            }
                            return newState;
                          });
                        }}
                        className="borderbtn"
                      />
                    </div>
                  </td>
                  <td>{product?.price} $</td>
                  <td>{product?.quantity * product?.price} $</td>
                </tr>
              ))}
              <tr className="text-td py-2 border-top-0 fw-bold">
                <td>#</td>
                <td>Total</td>
                <td>
                  {selected.reduce((acc, curr) => {
                    return acc + curr.quantity;
                  }, 0)}
                </td>
                <td>
                  {selected.reduce((acc, e) => {
                    return acc + e.price;
                  }, 0)}{" "}
                  $
                </td>
                <td>
                  {selected.reduce((acc, e) => {
                    return acc + e.price * e.quantity;
                  }, 0)}{" "}
                  $
                </td>
              </tr>
            </tbody>
          </table>
          {
            <div className="d-flex justify-content-end container pt-4p mb-5">
              <button className="btn fw-bold  py-2 btn-whole1 shadow">
                Inquires
              </button>
              <button
                className="btn fw-bold py-2 btn-whole2  shadow ms-5 text-light me-0"
                onClick={() => {
                  if (submitting) return;
                  submitOrder();
                }}
              >
                {!submitting ? "Submit" : <PulseLoader />}
              </button>
            </div>
          }
        </div>
      </div>
      <Subscription />
    </div>
  );
}
