import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={24} height={24} rx={2} fill="#F4F6F9" />
      <path
        d="M18 20V10M12 20V4M6 20v-6"
        stroke="#A099A4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
