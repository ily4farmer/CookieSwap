import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        clipPath="url(#prefix__clip0_454_21838)"
        stroke="#A099A4"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z" />
        <path d="M8 4v4l2.667 1.333" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_454_21838">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
