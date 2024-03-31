/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Suspense, useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
const CollectionCard = React.lazy(() =>
  import("../../Components/Collections/CollectionCard")
);

export default function Category({}) {
  const [topbanner, setTopBanner] = useState(1);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    subcategories: [],
  });
  const navigate = useNavigate();
  // const [filters, setFilters] = useState([])
  const [loadingProducts, setLoadingProductts] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState("");

  console.log("categories", categories);
  // console.log("filter", filters);
  // console.log("products", products);

  // console.log("Top Banner", topbanner);

  const getCategories = async () => {
    try {
      const response = await axios.get("/category/getCategory");

      setCategories(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getProducts = async () => {
    // console.log("calling");
    try {
      setLoadingProductts(true);
      const response = await axios.get("/products", {
        params: { filters: filters },
      });
      // toast
      //   .promise(response, {
      //     pending: "Loading",
      //     success: "Products Loaded",
      //     error: "Error loading products",
      //   })
      //   .then((result) => {
      //     console.log(result);
      //     setLoadingProductts(false);
      //     setProducts(result.data);
      //   })
      //   .catch((e) => {
      //     throw new Error(e);
      //   });

      // console.log("data", response.data);
      setLoadingProductts(false);
      setProducts(response.data);
    } catch (e) {
      console.log(e);
      setLoadingProductts(false);
    }
  };

  useEffect(() => {
    if (filters.categories.length > 0 || filters.subcategories.length > 0)
      // toast.promise(getProducts(), {
      //   success: "Products Loaded",
      //   pending: "Loading products",
      //   error: "Error loading products",
      // });
      getProducts();
  }, [filters]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get("category");
    const banner = searchParams.get("topbanner");

    if (category) {
      setShowSubCategory(category);
      setFilters((prev) => {
        return { ...prev, categories: [category] };
      });
    }
    if (banner) {
      setTopBanner(parseInt(banner));
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        {categories[topbanner - 1] && (
          <title>Category - {categories?.[topbanner - 1]?.name}</title>
        )}
      </Helmet>
      <ToastContainer />
      <div>
        <div className="w-100 ">
          <div className="d-flex">
            <div className="w-100 flex flex-column pb-5">
              <div className="w-100">
                {topbanner === 0 && (
                  <img
                    src="/Image/image_c/Collections.jpg"
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 1 && (
                  <img
                    src="/Image/image_c/malecollection.webp"
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 2 && (
                  <img
                    src="/Image/image_c/femaleCollections.webp"
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 3 && (
                  <img
                    src="/Image/image_c/Rawhair.webp"
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
                {topbanner === 4 && (
                  <img
                    src="/Image/image_c/Accessories.webp"
                    width={"100%"}
                    alt="This is an bannnner"
                  />
                )}
              </div>

              <div className="d-flex px120 flex-column flex-lg-row mt-5">
                {/* sidebar */}
                <div className="sidebarwidth d-flex flex-column gap-4">
                  <div className="sidebarBg  ">
                    <div className="text-start pb-4">
                      <p className="text-20  text-uppercase my-auto fw-bold">
                        Categories
                      </p>
                    </div>
                    {/* Gents Wig */}
                    {categories.map((category, index) => {
                      return (
                        <div
                          className="border-top border-1 border-secondary py-4"
                          onClick={() => {
                            // console.log("hello world");
                            setShowSubCategory(category._id);
                            setFilters((prev) => {
                              return { ...prev, categories: [category._id] };
                            });
                          }}
                        >
                          <div className="text-black d-flex ">
                            <p className="text-18 text-start text-theme-gray mb-0 pt-1">
                              {category.name}
                            </p>
                            <p
                              className="ms-auto my-auto"
                              onClick={() => {
                                setShowSubCategory((prevState) => {
                                  return prevState != category._id
                                    ? category._id
                                    : "";
                                });
                              }}
                            >
                              {showSubCategory !== category._id ? (
                                <ExpandMoreIcon
                                  onClick={() => {
                                    setTopBanner(index + 1);
                                  }}
                                  className="my-auto"
                                />
                              ) : (
                                <KeyboardArrowUpIcon
                                  onClick={() => {
                                    setTopBanner(0);
                                  }}
                                  className="my-auto"
                                />
                              )}
                            </p>
                          </div>
                          {showSubCategory === category._id && (
                            <div className=" text-theme-gray  pt-2">
                              {category.subcategories?.map((subcategory) => {
                                return (
                                  <div
                                    className="ps-2  d-flex f-18 my-3"
                                    onClick={() => {
                                      setFilters((prev) => {
                                        let newState = [...prev?.subcategories];
                                        if (
                                          !newState.includes(subcategory._id)
                                        ) {
                                          newState.push(subcategory._id);
                                          return {
                                            ...prev,
                                            subcategories: newState,
                                          };
                                        } else {
                                          newState = newState.filter((item) => {
                                            return item !== subcategory._id;
                                          });
                                          return {
                                            ...prev,
                                            subcategories: newState,
                                          };
                                        }
                                      });
                                    }}
                                  >
                                    {" "}
                                    <input
                                      class="form-check-input checkCatagory my-auto"
                                      type="checkbox"
                                      id="checkboxNoLabel"
                                      checked={filters?.subcategories.includes(
                                        subcategory._id
                                      )}
                                      aria-label="..."
                                    />
                                    <p className="text-14 text-start Chover ms-3 my-auto">
                                      {subcategory.name}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="m-auto pt-2 overFlow rounded-iconive gayeb">
                    <img
                      onClick={() => {
                        navigate("/offers");
                      }}
                      src="./Image/image_c/sidebar.svg"
                      alt="this is an image "
                      className="w-100 m-auto sidebarImg gayeb"
                    />
                  </div>
                </div>

                <div className="w-80 ps-md-5 pt-5 pt-md-0">
                  <div className="d-flex flex-wrap flex-column flex-lg-row gap-4 mx-auto justify-content-center">
                    {loadingProducts ? (
                      <PulseLoader />
                    ) : (
                      products.map((product, index) => (
                        <Suspense fallback={<PulseLoader />}>
                          <CollectionCard product={product} index={index} />
                        </Suspense>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
