import PropTypes from "prop-types";
import { IconSize, IconColors } from "@/utils/common/IconTypes";
import React from "react";

const CalendarIcon = ({ fill, iconSize }) => {
  const width =
    iconSize === IconSize.LARGE
      ? "24"
      : iconSize === IconSize.MEDIUM
      ? "15"
      : "11";
  const height =
    iconSize === IconSize.LARGE
      ? "27"
      : iconSize === IconSize.MEDIUM
      ? "16"
      : "12";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4818 3.26588H20.2966V0.895508H17.9262V3.26588H6.07436V0.895508H3.70399V3.26588H2.51881C1.2151 3.26588 0.148438 4.33254 0.148438 5.63625V24.5992C0.148438 25.9029 1.2151 26.9696 2.51881 26.9696H21.4818C22.7855 26.9696 23.8521 25.9029 23.8521 24.5992V5.63625C23.8521 4.33254 22.7855 3.26588 21.4818 3.26588ZM21.4818 24.5992H2.51881V11.5622H21.4818V24.5992ZM21.4818 9.1918H2.51881V5.63625H21.4818V9.1918Z"
        fill={fill}
      />
    </svg>
  );
};

CalendarIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
};

CalendarIcon.defaultProps = {
  fill: IconColors.COMMON_BLACK,
  size: IconSize.SMALL,
};

export default CalendarIcon;
