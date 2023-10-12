

import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import "primereact/resources/primereact.min.css";
import InfoIcon from "../../../assets/icons/InfoIcon";
import IconSucces from "../../../assets/icons/IconSucces";
import { ToastColors } from "../../../utils/components/atoms/ToastColors";
import useWindowSize from "../../../utils/hooks/useWindowSize";

const ToastMessage = ({
  isOpen,
  setIsOpen,
  type,
  title,
  isIcon = true,
  description,
}) => {
  const screenWidth = useWindowSize();
  const toast = useRef(null);
  useEffect(() => {
    showToast();
  }, [isOpen]);

  const showToast = () => {
    let bgColor = "";
    let color = "";
    let mainColor = "";
    let icon = "";
    switch (type) {
      case "error":
        bgColor = ToastColors.errorBgColor;
        mainColor = ToastColors.errorMainColor;
        color = ToastColors.toastTextColor;
        icon = <InfoIcon />;
        break;
      case "success":
        bgColor = ToastColors.successBgColor;
        mainColor = ToastColors.successMainColor;
        color = ToastColors.toastTextColor;
        icon = <IconSucces />;
        break;
      default:
        bgColor = "";
        color = "";
        mainColor = "";
        icon = <InfoIcon />;
    }

    if (isOpen) {
      toast.current.show({
        content: (
          <div className="flex items-center justify-center pl-3 2XL:pl-4.375 pr-4 2XL:pr-5.75 py-4 2XL:py-5.75">
            <style>
              {`
                .p-toast-message-content{
                    background: ${bgColor};
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    paddingY: 1rem;
                    margin-top: ${screenWidth > 3860 ? "150px" : "70px"}; 
                }
                .p-toast {
                    opacity: 1;
                }
                .p-toast-icon-close-icon {
                    margin-right: 10px;
                }
                `}
            </style>
            <div className="flex flex-row items-center justify-center">
              <div
                className="h-10 sm:h-12 2XL:h-16.25 w-[6px] rounded-12.5"
                style={{
                  background: `${mainColor}`,
                }}
              ></div>
              <div className="flex flex-row ml-4">
                <div
                  style={{
                    margin: "auto",
                    display: !isIcon ? "none" : "block",
                  }}
                >
                  {icon}
                </div>
                <div className="flex flex-col ml-4.5 sm:max-w-105 2XL:max-w-275">
                  <span className="text-4 2XL:text-6 font-bold leading-6">
                    {title}
                  </span>
                  <span className="text-3 2XL:text-4 font-normal leading-6">
                    {description ?? ""}
                  </span>
                </div>
              </div>
              <div
                className="ml-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></div>
            </div>
          </div>
        ),
        life: 3000,
      });
    }
  };
  return (
    <div className="absolute z-10 w-full flex items-center justify-center pt-25 2XL:pt-62.5">
      <Toast
        ref={toast}
        position="top-center"
        onRemove={() => setIsOpen(false)}
        style={description ? { height: "80px" } : {}}
      />
    </div>
  );
};

export default ToastMessage;
