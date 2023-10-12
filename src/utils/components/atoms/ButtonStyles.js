import {
  ButtonStyles,
  IconButtonStateColors,
} from "@/utils/common/ButtonTypes";
import _ from "lodash";

export const handleButtonBackground = (
  buttonStyle,
  stateColor,
  hoverEffectOn
) => {
  switch (buttonStyle) {
    case ButtonStyles.FILLED:
      return `bg-white ${hoverEffectOn && "hover:bg-backgroundPrimaryLight"}`;
    case ButtonStyles.ACTIVE:
      return `bg-backgroundPrimary border-backgroundPrimary ${
        hoverEffectOn && "hover:bg-opacity-80"
      }`;
    case ButtonStyles.OUTLINED:
      switch (stateColor) {
        case IconButtonStateColors.COMMON_WHITE:
          return `bg-transparent border-0.25 border-white ${
            hoverEffectOn && "hover:opacity-50"
          }`;
        case IconButtonStateColors.PRIMARY_BLUE:
          return `bg-transparent border-0.25 border-backgroundPrimary ${
            hoverEffectOn && "hover:bg-backgroundPrimaryLight"
          }`;
        default:
          return "";
      }
    case ButtonStyles.IDLE:
      return `bg-iconButtonIdleColor ${
        hoverEffectOn && "hover:bg-iconButtonHoverIdleColor"
      }`;
    case ButtonStyles.DISABLED:
      return `bg-transparent border-0.25 border-pricingCardBorderColor ${
        hoverEffectOn && "hover:bg-iconButtonHoverIdleColor"
      }`;
    default:
      return "";
  }
};

export const handleButtonTextColor = (buttonStyle, stateColor) => {
  if (_.isEqual(buttonStyle, ButtonStyles.FILLED)) return "text-black";
  else if (_.isEqual(buttonStyle, ButtonStyles.OUTLINED)) {
    if (_.isEqual(stateColor, IconButtonStateColors.COMMON_WHITE))
      return "text-white";
    else if (_.isEqual(stateColor, IconButtonStateColors.PRIMARY_BLUE))
      return "text-backgroundPrimary";
  } else if (_.isEqual(buttonStyle, ButtonStyles.ACTIVE)) return "text-white";
  else if (_.isEqual(buttonStyle, ButtonStyles.IDLE))
    return "text-iconButtonIdleTextColor";
  else if (_.isEqual(buttonStyle, ButtonStyles.DISABLED))
    return "text-pricingCardBorderColor";
  else return "text-white";
};
