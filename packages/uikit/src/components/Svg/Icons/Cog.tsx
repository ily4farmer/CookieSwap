import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM12.667 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM3.333 8.667a.667.667 0 100-1.334.667.667 0 000 1.334z"
        fill="#A099A4"
        stroke="#A099A4"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
