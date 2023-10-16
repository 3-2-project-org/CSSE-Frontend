import React, { useEffect } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utils/accessLocalStorage";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  const getNavBarData = () => {
    const { type } = getDataFromLocalStorage("user") || "admin";
    let navBarData = [];
    const navdata = {
      admin: [
        {
          title: "Overview",
          url: "/admin/overview",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          title: "Tasks",
          url: "/admin/tasks",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                clipRule="evenodd"
              />
              <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
              <path
                fillRule="evenodd"
                d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          title: "People",
          url: "/admin/people",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                clipRule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
          ),
        },
        {
          title: "Sites",
          url: "/admin/sites",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
      manager: [
        {
          title: "Overview",
          url: "/manager/overview",
          icon: "O",
        },
        {
          title: "Tasks",
          url: "/manager/tasks",
          icon: "T",
        },
        {
          title: "People",
          url: "/manager/people",
          icon: "P",
        },
        {
          title: "Sites",
          url: "/manager/sites",
          icon: "S",
        },
      ],
      supplier: [
        {
          title: "Overview",
          url: "/supplier/overview",
          icon: "O",
        },
        {
          title: "Orders",
          url: "/supplier/orders",
          icon: "T",
        },
        {
          title: "Deliveries",
          url: "/supplier/deliveries",
          icon: "P",
        },
        {
          title: "Products",
          url: "/supplier/products",
          icon: "S",
        },
        {
          title: "Payments",
          url: "/supplier/payments",
          icon: "S",
        },
      ],
      procument: [
        {
          title: "Overview",
          url: "/procument/overview",
          icon: "O",
        },
        {
          title: "Tasks",
          url: "/procument/tasks",
          icon: "T",
        },
        {
          title: "People",
          url: "/procument/people",
          icon: "P",
        },
        {
          title: "Sites",
          url: "/procument/sites",
          icon: "S",
        },
      ],
    };

    if (type === "admin") {
      navBarData.push(navdata.admin);
    } else if (type === "sales manager") {
      navBarData.push(navdata.procument);
    } else if (type === "supplier") {
      navBarData.push(navdata.supplier);
    } else if (type === "site manager") {
      navBarData.push(navdata.manager);
    }

    return navBarData;
  };
  return (
    <div className="flex flex-row">
      <div className="w-52 bg-white min-h-screen border-r-2 flex flex-col justify-between py-11 px-4">
        <div>
          {getNavBarData()[0].map((data) => (
            <Link to={data.url}>
              <div className="flex items-center ml-2 mt-4">
                <span className="text-red-500">{data.icon}</span>
                <span className="text-sm font-bold text-[#999] ml-2">
                  {data.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="ml-2 mt-8">
          <span className="text-md font-bold text-[#999]">Accounts</span>
          <div className="flex items-center mt-4 cursor-pointer">
            <span className="text-primary">
              <Person2OutlinedIcon />
            </span>
            <span className="text-sm font-bold text-[#999] ml-2">Profile</span>
          </div>
          <div
            className="flex items-center mt-4 cursor-pointer"
            onClick={handleLogout}
          >
            <span className="text-primary">
              <LogoutOutlinedIcon />
            </span>
            <span className="text-sm font-bold text-[#999] ml-2">Logout</span>
          </div>
          <div className="flex mt-6">
            <div className="h-4 w-4 border-2 border-primary rounded-sm"></div>
            <div className="h-4 w-4 ml-2 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Layout;
