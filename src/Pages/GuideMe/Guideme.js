/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import "./Guideme.css";
import Subscription from "../../Components/Subscription/Subscription";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import AuthContext from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export default function Guideme() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [windowCount, setWindow] = useState(1);
  const [btnCtn, setbtnCtn] = useState(1);
  const [morf, setmorf] = useState();

  const { user, setUser } = useContext(AuthContext);
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log("credentials from success", credential);
        // console.log("user", user);
        const { uid, email } = user;
        axios
          .post("/auth/login", {
            email,
            password: uid,
          })
          .then((response) => {
            Cookies.set("jwt", response.data.token);
            window.location.reload();
          })
          .catch((e) => {
            // console.log(e);\
            axios
              .post("/auth/signup", {
                email,
                password: uid,
                passwordConfirm: uid,
                name: user?.displayName,
                verified: user?.emailVerified,
              })
              .then((response) => {
                Cookies.set("jwt", response.data.token);
                window.location.reload();
              })
              .catch((e) => {
                console.log(e);
                toast.error(e?.response?.data?.message);
              });
          });

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  if (!user)
    return (
      <div className="container my-5 bg-wholesale">
        <div className="w-50   rounded-theme11 m-auto ">
          <div className=" w-100 text-center">
            <p className="pt-5 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              Please login first
            </p>
            {/* <p className="ps-5 pt-1 text-14">Want to be a wholesaler?</p> */}
            <div className="text-center p-5 ">
              <button
                type="submit"
                className="btn btn-theme-up px-5 py-2 my-4 text-light text-boldz"
                style={{
                  textEmphasis: true,
                }}
                onClick={() => {
                  googleLogin();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="pt-md-5">
      {windowCount === 1 && (
        <div className="bg-light rounded-2 p-4 p-md-5 text-start container my-5 border ">
          <p className="text-theme-gray text-center pt-5">
            Please answer a few questions to help us understand your hair loss
            type. The entire process is confidential and private
          </p>
          <h3 className="fw-bold mb-5 text-center mt-4">
            Which gender do you identify with?
          </h3>

          <div className="d-flex flex-column flex-md-row p-3 p-md-5 gap-5 w-100 justify-content-center">
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 1);
                });
                setmorf(1);
                setWindow((prevs) => {
                  return (prevs = prevs + 1);
                });
              }}
              className="btn w-50 ws-100  py-4 d-flex bg-white border px-4 overGuide"
            >
              {/* <input
                className="form-check-input my-auto"
                type="radio"
                name="flexRadioDefault "
                id="flexRadioDefault1"
                checked
              /> */}
              <h5 className="ms-4 my-auto fw-bold">Male</h5>

              <MaleIcon className="fs-2 my-auto ms-2" />
            </button>
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 1);
                });
                setmorf(0);
                setWindow((prevs) => {
                  return (prevs = prevs + 1);
                });
              }}
              className="btn w-50 ws-100 py-4 d-flex bg-white border px-4 overGuide "
            >
              {/* <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              /> */}
              <h5 className="ms-4 my-auto fw-bold">Female</h5>
              <FemaleIcon className="fs-2 my-auto ms-2" />
            </button>
          </div>
        </div>
      )}
      {windowCount === 2 && (
        <div className="container">
          {morf == 1 && (
            <div className="bg-light rounded-2 p-md-5 p-3 text-start container my-5 border">
              <h3 className="fw-bold text-center mb-5 mt-4 ">
                What kind of hair wig product are you looking for?
              </h3>
              {/* male guide */}
              <div className="d-flex px-md-5 px-3 gap-4 w-100 flex-wrap justify-content-center pb-3">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4  bg-white border px-4 "
                >
                  <img
                    src="/Image/guidemale/bald-01.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Complete hair loss</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidemale/crown thinning-01.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Hair thinning at the crown</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4  bg-white border px-4 "
                >
                  <img
                    src="/Image/guidemale/front thinning-01.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Hair thinning at the front</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4  bg-white border px-4 "
                >
                  <img
                    src="/Image/guidemale/More top thinning-01.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">
                    Increased thinning at the crown
                  </p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-25 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidemale/top thinning-01.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Hair thinning at the top</p>
                </button>
              </div>
            </div>
          )}
          {morf == 0 && (
            <div className="bg-light rounded-2 p-3 p-md-5 text-start container my-5 border">
              <h3 className="fw-bold text-center mb-5 mt-4 ">
                What kind of hair wig product are you looking for?
              </h3>
              {/*female guide */}
              <div className="d-flex px-md-5 px-3 gap-4 w-100 flex-wrap justify-content-center pb-3">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Add Colour.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Add extension</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Add Length.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Add length</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Add Volume.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Add Volume</p>
                </button>
                <button className="btn w-23 ws-100 fs-4 py-4 bg-white border px-4 ">
                  <img
                    src="/Image/guidefemale/Full Coverage.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Complete Hair Loss</p>
                </button>
                <button className="btn w-25 ws-100 fs-4 py-4 bg-white border px-4 ">
                  <img
                    src="/Image/guidefemale/Partial (5).png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Increased Crown thinning</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-25 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Partial (6).png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Crown thinning</p>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-25 ws-100 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Partial Front Zone.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Front zone hair loss</p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {(windowCount === 3 || windowCount === 3.5) && (
        <div className="bg-light rounded-2 p-md-5 px-3 text-start container my-5 border">
          <h3 className="fw-bold mb-5 text-start mt-4 ms-3  ms-md-5">
            1. During which weather you would like to wear your wigs on?
          </h3>

          <div className="d-flex pb-5 px-md-5 px-3 gap-4 w-100 flex-column flex-lg-row">
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Summer (warm)</h6>
            </button>
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Autumn (balanced)</h6>
            </button>
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Winter (cold)</h6>
            </button>
          </div>

          <h3 className="fw-bold mb-5 text-start mt-4 ms-md-5 ms-3">
            2. Which one do you prioritise?
          </h3>

          <div className="d-flex px-md-5 px-3 flex-column flex-lg-row gap-4 w-100 mb-3 pb-3">
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Comfort</h6>
            </button>
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Balanced</h6>
            </button>
            <button
              onClick={() => {
                setbtnCtn((prevs) => {
                  return (prevs = prevs + 0.5);
                });

                setWindow((prevs) => {
                  return (prevs = prevs + 0.5);
                });
              }}
              className="btn py-2 d-flex btn-outline-secondary border px-4 "
            >
              <h6 className=" my-auto fw-bold">Durability</h6>
            </button>
          </div>
        </div>
      )}
      {(windowCount === 4 || windowCount === 4.5) && (
        <div className="bg-light rounded-2 p-md-5 p-3 text-start container my-5 border">
          {morf == 0 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-md-5 ms-3">
                ladies- how would you like to attach the system?
              </h3>

              <div className="d-flex pb-md-5 pb-3 px-md-5 px-3 gap-4 w-100 flex-column flex-lg-row">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Clip</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Glue</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Tape</h6>
                </button>
              </div>
            </div>
          )}

          {morf == 1 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-md-5 ms-3">
                gents- hairstyle
              </h3>

              <div className="d-flex px-md-5 px-3 gap-4 w-100 flex-column flex-lg-row pb-3">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Straight</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Wavy</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Curly</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Loose</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Brushed back</h6>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {windowCount === 5 && (
        <div className="bg-light rounded-2 p-md-5 p-3 text-start container my-5 border">
          {morf === 0 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-md-5 ms-3">
                Ladies- Hairstyle
              </h3>

              <div className="d-flex pb-md-5 pb-3 px-md-5 px-3 gap-4 w-100 flex-column flex-lg-row pb-3">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Straight</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Loose wave</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Water wave</h6>
                </button>

                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Yaki</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Curly</h6>
                </button>
              </div>
            </div>
          )}
          {morf === 1 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-md-5 ms-3">
                gents- Do you want grey Hair mixed?
              </h3>

              <div className="d-flex px-md-5 px-3 gap-4 w-100 flex-column flex-lg-row pb-3">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">Yes</h6>
                </button>
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });
                    setmorf((prevs) => {
                      return !prevs;
                    });
                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn py-2 d-flex btn-outline-secondary border px-4 "
                >
                  <h6 className=" my-auto fw-bold">No</h6>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="d-flex container ms-auto w-100">
        {btnCtn !== 1 && (
          <button
            onClick={() => {
              setbtnCtn((prevs) => {
                if (prevs === 1) return 1;
                else if (prevs > 5) return 4;
                else return (prevs = prevs - 1);
              });
              setWindow((prevs) => {
                if (prevs === 1) return 1;
                else if (prevs > 5) return 4;
                else return (prevs = prevs - 1);
              });
            }}
            className="btn px-md-5 px-3 py-2 bg-theme-holud text-light fs-5 me-auto"
          >
            <KeyboardDoubleArrowLeftIcon /> Back
          </button>
        )}
        <button
          onClick={() => {
            setbtnCtn((prevs) => {
              return (prevs = prevs + 1);
            });
            setWindow((prevs) => {
              if (prevs === 5) return (prevs = 5);
              else return (prevs = prevs + 1);
            });
          }}
          className="btn px-md-5 px-3 py-2  bg-theme-holud text-light fs-5 ms-auto"
        >
          Next <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
      <Subscription />
    </div>
  );
}
