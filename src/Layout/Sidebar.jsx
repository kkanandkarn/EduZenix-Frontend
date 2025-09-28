import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { setSidebar } from "../store/sidebarSlice";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Logo from "../assets/images/logo.png";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const authData = JSON.parse(localStorage.getItem("user"));
  const sidebar = useSelector((state) => state.sidebar);
  const [sidebarOpen, setSidebarOpen] = useState(sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState(SidebarItems);

  useEffect(() => {
    setSidebarOpen(sidebar.sidebarOpen);
  }, [sidebar]);

  const handleMenuClick = (route) => navigate(route);

  const handleSidebar = () => {
    dispatch(setSidebar({ sidebarOpen: !sidebarOpen }));
  };

  const isActiveMenu = (route) => location.pathname.includes(route);

  return (
    <div>
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-primary text-white h-screen duration-300 ease-in-out relative py-4`}
      >
        <div className="flex justify-end absolute top-2 right-[-25px]">
          <button
            className="bg-primary text-primaryColor px-1 py-4 rounded-r-lg cursor-pointer ease-in-out duration-300"
            onClick={handleSidebar}
          >
            {sidebarOpen ? (
              <IoIosArrowBack size={20} />
            ) : (
              <IoIosArrowForward size={20} />
            )}
          </button>
        </div>
        <div
          className={`flex flex-col justify-start ${
            sidebarOpen && "items-center"
          } mb-4 px-4 border-b pb-4 border-gray-600 ease-in-out duration-300`}
        >
          <img
            src={Logo}
            alt="logo"
            className={`${
              sidebarOpen ? "w-18 h-18" : "w-10 h-10"
            } duration-300`}
          />
          {sidebarOpen && (
            <h1 className="font-poppins text-gray-300 text-sm mt-2">
              A Complete ERP Solution
            </h1>
          )}
        </div>
        {/* <ul className="px-4 ease-in-out duration-300">
        {menuItems?.map((menuItem) => (
          <li
            key={menuItem.name}
            className={`mb-4 cursor-pointer`}
            onClick={() => handleMenuClick(menuItem.route)}
          >
            <div
              className={`text-left px-4 py-2 rounded-md font-Poppins flex items-center gap-2 text-white ${
                isActiveMenu(menuItem.route) ? "bg-slate-800" : ""
              }`}
              data-tooltip-id={`tooltip-${menuItem.name}`} // Tooltip ID
              data-tooltip-content={menuItem.name} // Tooltip Content
            >
              <div
                className={`${
                  isActiveMenu(menuItem.route) ? "text-orange-400" : ""
                }`}
              >
                {menuItem.icon}
              </div>
              {sidebarOpen && menuItem.name}
            </div>

            {!sidebarOpen && (
              <Tooltip id={`tooltip-${menuItem.name}`} place="right" />
            )}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
