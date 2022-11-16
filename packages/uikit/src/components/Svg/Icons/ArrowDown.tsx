import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        clipPath="url(#prefix__clip0_275_1086)"
        stroke="#A099A4"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 9.727l-2.182 2.182-2.182-2.182" />
        <path d="M7.545 2.09h1.091a2.182 2.182 0 012.182 2.183v7.636M1 4.273L3.182 2.09l2.182 2.182" />
        <path d="M6.455 11.91H5.364a2.182 2.182 0 01-2.182-2.183V2.091" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_275_1086">
          <path fill="#fff" transform="rotate(90 6.545 7)" d="M0 0h13.091v13.091H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
