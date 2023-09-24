/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Guideme.css";
import Subscription from "../../Components/Subscription/Subscription";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
export default function Guideme() {
  const [window, setWindow] = useState(1);
  const [btnCtn, setbtnCtn] = useState(1);
  const [morf, setmorf] = useState();
  return (
    <div className="pt-5">
      {window === 1 && (
        <div className="bg-light rounded-2 p-5 text-start container my-5 border">
          <p className="text-theme-gray text-center pt-5">
            Please answer a few questions to help us understand your hair loss
            type. The entire process is confidential and private
          </p>
          <h3 className="fw-bold mb-5 text-center mt-4">
            Which gender do you identify with?
          </h3>

          <div className="d-flex p-5 gap-5 w-100">
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
              className="btn w-50  py-4 d-flex bg-white border px-4 overGuide"
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
              className="btn w-50  py-4 d-flex bg-white border px-4 overGuide "
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
      {window === 2 && (
        <div className="container">
          {morf === 1 && (
            <div className="bg-light rounded-2 p-5 text-start container my-5 border">
              <h3 className="fw-bold text-center mb-5 mt-4 ms-5">
                What kind of hair wig product are you looking for?
              </h3>
              {/* male guide */}
              <div className="d-flex px-5 gap-4 w-100 flex-wrap justify-content-center">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 fs-4 py-4  bg-white border px-4 "
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
                  className="btn w-23 fs-4 py-4 bg-white border px-4 "
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
                  className="btn w-23 fs-4 py-4  bg-white border px-4 "
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
                  className="btn w-23 fs-4 py-4  bg-white border px-4 "
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
                  className="btn w-25 fs-4 py-4 bg-white border px-4 "
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
          {morf === 0 && (
            <div className="bg-light rounded-2 p-5 text-start container my-5 border">
              <h3 className="fw-bold text-center mb-5 mt-4 ms-5">
                What kind of hair wig product are you looking for?
              </h3>
              {/*female guide */}
              <div className="d-flex px-5 gap-4 w-100 flex-wrap justify-content-center">
                <button
                  onClick={() => {
                    setbtnCtn((prevs) => {
                      return (prevs = prevs + 1);
                    });

                    setWindow((prevs) => {
                      return (prevs = prevs + 1);
                    });
                  }}
                  className="btn w-23 fs-4 py-4 bg-white border px-4 "
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
                  className="btn w-23 fs-4 py-4 bg-white border px-4 "
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
                  className="btn w-23 fs-4 py-4 bg-white border px-4 "
                >
                  <img
                    src="/Image/guidefemale/Add Volume.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Add Volume</p>
                </button>
                <button className="btn w-23 fs-4 py-4 bg-white border px-4 ">
                  <img
                    src="/Image/guidefemale/Full Coverage.png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Increased Crown thinning</p>
                </button>
                <button className="btn w-25 fs-4 py-4 bg-white border px-4 ">
                  <img
                    src="/Image/guidefemale/Partial (5).png"
                    alt="This is an image"
                    className="w-100"
                  />
                  <p className="fs-6 fw-bold">Complete Hair Loss</p>
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
                  className="btn w-25 fs-4 py-4 bg-white border px-4 "
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
                  className="btn w-25 fs-4 py-4 bg-white border px-4 "
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
      {(window === 3 || window === 3.5) && (
        <div className="bg-light rounded-2 p-5 text-start container my-5 border">
          <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
            1. During which weather you would like to wear your wigs on?
          </h3>

          <div className="d-flex pb-5 px-5 gap-4 w-100">
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
              <h6 className=" my-auto fw-bold">Summe (warm)</h6>
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

          <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
            2. Which one do you prioritise?
          </h3>

          <div className="d-flex px-5 gap-4 w-100">
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
      {(window === 4 || window === 4.5) && (
        <div className="bg-light rounded-2 p-5 text-start container my-5 border">
          {morf == 1 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
                ladies- how would you like to attach the system?
              </h3>

              <div className="d-flex pb-5 px-5 gap-4 w-100">
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

          {morf == 0 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
                gents- hairstyle
              </h3>

              <div className="d-flex px-5 gap-4 w-100">
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
      {window === 5 && (
        <div className="bg-light rounded-2 p-5 text-start container my-5 border">
          {morf == 1 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
                Ladies- Hairstyle
              </h3>

              <div className="d-flex pb-5 px-5 gap-4 w-100">
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
          {morf == 0 && (
            <div>
              <h3 className="fw-bold mb-5 text-start mt-4 ms-5">
                gents- Do you want grey Hair mixed?
              </h3>

              <div className="d-flex px-5 gap-4 w-100">
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
                else return (prevs = prevs - 1);
              });
              setWindow((prevs) => {
                return (prevs = prevs - 1);
              });
            }}
            className="btn px-5 py-2 bg-theme-holud text-light fs-5 me-auto"
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
          className="btn px-5 py-2  bg-theme-holud text-light fs-5 ms-auto"
        >
          Next <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
      <Subscription />
    </div>
  );
}
