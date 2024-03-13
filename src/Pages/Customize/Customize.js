/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Customize.css";
import Subscription from "../../Components/Subscription/Subscription";
import Select from "react-select";
import axios from "../../utils/axios";
import downloadFile from "../../utils/downloadFIle";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { Input } from "@mui/material";

const baseMateiralOptions = [
  "Mono Base",
  "Lace Base",
  "Skin Base",
  "Silk Base",
  "Mix Base",
];

const hairMaterialOptions = [
  "Remy Hair",
  "Virgin Hair",
  "Synthetic Hair",
  "remy+synthetic Mixed",
];

const preHairCutOptions = ["Yes", "No"];

const hairDirectionOptions = [
  "Free style",
  "Left parting",
  "Right parting",
  "Center parting",
  "Left crown",
  "right crown",
  "center crown",
  "Brush back",
];

const ladiesHairTextureOptions = [
  "Straight",
  "Loose wave",
  "Natural wave",
  "water wave",
  "yaki",
  "baby curl",
  "Spring curl",
];

const hairColorOptions = ["Single color", "Mix colors (max 2)", "Shade color"];

const percentageOfGrayGolor = Array.from(
  { length: 10 },
  (_, i) => (i + 1) * 10
);

const hairDensityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

const hairLengthOptions = Array.from({ length: 27 }, (_, i) => i + 6);

const hairTextureForGentsOptions = [
  "Natural straight",
  "36mm body wave",
  "32mm slight wave",
  "25mm medium wave",
  "20mm tight wave",
  "15mm loose curl",
  "10mm tight curl",
  "8mm extra-loose Afro",
  "6mm loose Afro",
  "4mm medium Afro ",
];

const dropItemBusinessType = [
  {
    name: "name",
    value: "value",
  },
];

/* Helper function */

export default function Customize() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [baseSize, setBaseSize] = useState("");
  const [baseMaterial, setBaseMaterial] = useState("");
  const [hairLength, setHairLength] = useState("");
  const [hairMaterial, setHairMaterial] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [preHairCut, setPreHairCut] = useState("");
  const [grayHairPercentage, setGrayHairPercentage] = useState(0);
  const [hairDIrection, setHairDirection] = useState("");
  const [hairDensity, setHairDensity] = useState(0);
  const [hairTextureForLadies, setHairTextureForLadies] = useState("");
  const [hairTextureForGents, setHairTextureForGents] = useState("");
  const [specialInstructions, setSpecialInstructoins] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [downlaading, setDownloading] = useState(false);

  async function downloadCustomizationRequirementFile(fileURL, fileName) {
    setDownloading(true);
    axios
      .get("/customwigs/get-custom-wigs-sheet", {
        responseType: "blob",
      })
      .then((response) => {
        downloadFile("Customization_Requirements.pdf", response.data);
        setDownloading(false);
      })
      .catch((error) => {
        // console.log("error: ", error);
        setDownloading(false);
        toast.error("Something went wrong");
      });
  }

  const submitCustomizationRequest = async () => {
    if (name === "" || quantity === 0) {
      toast.error("Please fill name and quantity fields");
      return;
    }
    setSubmitting(true);
    axios
      .post("/customwigs", {
        customerName: name,
        orderQuantity: quantity,
        baseSize,
        baseMaterial,
        hairLength,
        hairMaterial,
        hairColor,
        preHairCut,
        grayHairPercentage,
        hairDIrection,
        hairDensity,
        hairTextureForLadies,
        hairTextureForGents,
      })
      .then((res) => {
        setSubmitting(false);
        toast.success("Customization request submitted successfully");
        setName("");
        setQuantity(0);
        setBaseSize("");
        setBaseMaterial("");
        setHairLength("");
        setHairMaterial("");
        setHairColor("");
        setPreHairCut("");
        setGrayHairPercentage(0);
        setHairDirection("");
        setHairDensity(0);
        setHairTextureForLadies("");
        setHairTextureForGents("");
      })
      .catch((error) => {
        setSubmitting(false);
        toast.error("Something went wrong");
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="w-100">
        <img
          src="./Image/joinus/customize.webp"
          className="w-100"
          alt="this is a banner"
        />
      </div>

      {/* signup */}
      <div id="signup" className=" bg-wholesale">
        <div className="w-50 m-auto rounded-theme11">
          <div className="pt-5 w-100 text-center ">
            <p className="pt-5  fs-3 pb-0 mb-0 fw-bold text-theme-dark  text-28 mx-auto ">
              CUSTOM A HAIR SYSTEM
            </p>
            <p className="text-16 pt-4 px-md-5 px-3 text-just">
              At Iconive Hair Wigs, our custom section provides a personalized
              and luxurious experience. With our custom-made products service,
              you can tailor your wig to meet your unique desires. Simply share
              your preferences and expectations with our customer care
              specialist, and they will guide you through the entire process,
              ensuring you find the perfect wig that is exclusively designed for
              you.
            </p>

            <div className="p-md-5 p-3 pt-5">
              <form className="text-start">
                <input
                  type="text"
                  className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 text-black border-dark outline-none   mx-auto"
                  placeholder="Client  Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br />
                <div className="w-100 d-flex gap-2">
                  <input
                    type="number"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="Order Quantity"
                    min={1}
                    value={quantity === 0 ? null : quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    className="form-control border-top-0  bg-signup border-start-0 border-end-0 rounded-0 border-dark outline-none mx-auto w-50"
                    placeholder="Base Size"
                    value={baseSize}
                    onChange={(e) => {
                      setBaseSize(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="d-flex w-100 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Base Material</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={baseMateiralOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={baseMaterial}
                        onChange={(e) => {
                          setBaseMaterial(e.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Length</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairLengthOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairLength}
                        onChange={(e) => {
                          setHairLength(e.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex gap-3 text-start my-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Material</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairMaterialOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairMaterial}
                        onChange={(e) => {
                          setHairMaterial(e.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Color</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairColorOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairColor}
                        onChange={(e) => {
                          setHairColor(e.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex gap-3 text-start">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Pre-Haircut</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={preHairCutOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={preHairCut}
                        onChange={(e) => {
                          setPreHairCut(e.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">
                      Percentage of Grey Hair
                    </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={percentageOfGrayGolor.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={grayHairPercentage}
                        onChange={(e) => {
                          setGrayHairPercentage(e.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex w-100 my-3 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair direction</p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairDirectionOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairDIrection}
                        onChange={(e) => {
                          setHairDirection(e.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">Hair Density </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairDensityOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairDensity}
                        onChange={(e) => {
                          setHairDensity(e.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex w-100 gap-3">
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">
                      Hair texture for Ladies
                    </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={ladiesHairTextureOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairTextureForLadies}
                        onChange={(e) => {
                          setHairTextureForLadies(e.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-50 text-start">
                    <p className="text-14 pt-1 mb-2 ms-3">
                      Hair texture for Gents
                    </p>
                    <div class="btn-group w-100">
                      <Select
                        className="w-100 text-14"
                        options={hairTextureForGentsOptions.map((e) => {
                          return {
                            label: e,
                            value: e,
                          };
                        })}
                        isOptionSelected={hairTextureForGents}
                        onChange={(e) => {
                          setHairTextureForGents(e.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-100">
                  <textarea
                    className="w-100 border-0 mb-auto p-3 text-wrap h-333"
                    placeholder="Special Instructions"
                    value={specialInstructions}
                    onChange={(e) => {
                      setSpecialInstructoins(e.target.value);
                    }}
                  />
                </div>
                {/* {loading ? (
                    <PulseLoader />
                  ) : ( */}
                <button
                  type="submit"
                  className=" btn-theme-up btn  text-light px-5 py-2 my-4 me-auto"
                  value="Sign Up"
                  onClick={(e) => {
                    e.preventDefault();
                    submitCustomizationRequest();
                  }}
                >
                  {submitting ? <PulseLoader /> : "SUBMIT"}
                </button>
                {/* )} */}
                {/* <small className="text-success">{message}</small>
                  <small className="text-danger">{error}</small> */}
              </form>

              <p className="text-just py-4">
                Custom orders at Iconive are specifically crafted to meet your
                unique needs and preferences. Due to the personalized nature of
                these orders,{" "}
                <span className="fw-bold">
                  returns or exchanges are not accepted
                </span>
                . We strongly advise you to take accurate measurements to ensure
                a perfect fit for your custom hair system.{" "}
                <span className="fw-bold">
                  For a more Personalized Customization, please download Custom
                  Sheet
                </span>
                .
              </p>
              <div className="d-flex flex-column flex-lg-row gap-4 justify-content-center px-5 my-4">
                <button
                  className="btn-theme-up btn text-light px-5"
                  onClick={() => {
                    downloadCustomizationRequirementFile();
                  }}
                >
                  {downlaading ? <PulseLoader /> : "Download custom sheet"}
                </button>

                <button
                  onClick={() => {
                    navigate("/repair");
                  }}
                  className="btn btn-theme-up px-5 text-light"
                >
                  Apply for repair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscription />
    </>
  );
}
