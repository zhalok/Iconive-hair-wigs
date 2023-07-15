/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Blog.css";
import Subscription from "../../Components/Subscription/Subscription";
import BackupIcon from "@mui/icons-material/Backup";
import banner from "../../.././src/Components/Images/Blog/blogbanner.png";
import BasicHair from "./BasicHair";
import BaseHair from "./BaseHair";

export default function Blog() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="d-flex justify-content-center pt-4 pb-2 gap-5">
        <p
          onClick={() => {
            setActive(1);
          }}
          className={`${active === 1 ? "text-themeY " : "drop unclick"}`}
        >
          Basic Guide
        </p>
        <p
          onClick={() => {
            setActive(2);
          }}
          className={`${active === 2 ? "text-themeY " : "drop unclick"}`}
        >
          Base & Hair Guide
        </p>
        <p
          onClick={() => {
            setActive(3);
          }}
          className={`${active === 3 ? "text-themeY " : "drop unclick"}`}
        >
          Wearing & Size Guide
        </p>
        <p
          onClick={() => {
            setActive(4);
          }}
          className={`${active === 4 ? "text-themeY " : "drop unclick"}`}
        >
          Hair Wave-Curl & Density Guide
        </p>
        <p
          onClick={() => {
            setActive(5);
          }}
          className={`${active === 5 ? "text-themeY " : "drop unclick"}`}
        >
          Color Guide
        </p>
      </div>
      <div>
        {active === 1 && <BasicHair />}
        {active === 2 && <BaseHair />}
        {active === 3 && <BasicHair />}
        {active === 4 && <BasicHair />}
        {active === 5 && <BasicHair />}
      </div>

      <Subscription />
    </>
  );
}