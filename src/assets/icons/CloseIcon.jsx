import PropTypes from "prop-types";
import { IconSize } from "@/utils/common/IconTypes";

const CloseIcon = ({ size }) => {
  const width = size === IconSize.LARGE ? "15" : "12";
  const height = size === IconSize.LARGE ? "14" : "12";
  const viewBox = size === IconSize.LARGE ? "0 0 15 14" : "0 0 12 12";
  const d1 =
    size === IconSize.LARGE
      ? "M13.8203 1L1.82031 13"
      : "M10.5123 1.37842L1.56836 10.3223";
  const d2 =
    size === IconSize.LARGE
      ? "M1.82031 1L13.8203 13"
      : "M1.56836 1.37842L10.5123 10.3223";
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d1}
        stroke="#27272A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d2}
        stroke="#27272A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  size: PropTypes.string,
};

CloseIcon.defaultProps = {
  size: IconSize.LARGE,
};

export default CloseIcon;
