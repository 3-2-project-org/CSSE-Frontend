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
          icon: "O",
        },
        {
          title: "Tasks",
          url: "/admin/tasks",
          icon: "T",
        },
        {
          title: "People",
          url: "/admin/people",
          icon: "P",
        },
        {
          title: "Sites",
          url: "/admin/sites",
          icon: "S",
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
