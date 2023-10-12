import PropTypes from "prop-types";
import { IconSize } from "@/utils/common/IconTypes";
import React from "react";

const ForwardMenuIcon = ({ size, fill }) => {
  const width = size === IconSize.MEDIUM ? "8" : "7";
  const height = size === IconSize.MEDIUM ? "14" : "11";
  const viewBox = size === IconSize.MEDIUM ? "0 0 8 14" : "0 0 7 11";
  const d =
    size === IconSize.MEDIUM
      ? "M1 1L7 7L1 13"
      : "M1.68624 0.750411L6.1582 5.22237L1.68624 9.69434";
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ForwardMenuIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string,
};

ForwardMenuIcon.defaultProps = {
  fill: "#3F3F46",
};

export default ForwardMenuIcon;
