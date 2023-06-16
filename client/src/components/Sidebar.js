import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Sidebar({ showSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("sheynews-user");
    navigate("/");
  };
  const menuItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Posted",
      path: "/posted",
    },
    {
      title: "AddNews",
      path: "/add",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Logout",
      path: "/logout",
    },
  ];

  return (
    <div
      className={`min-h-screen max-h-full transition-all duration-300 bg-primary overflow-hidden h-screen flex flex-col ${
        showSidebar ? "w-48" : "w-0"
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold mt-10 ml-10 text-gray-200 ">
          SheyNews
        </h1>
      </div>
      <div className="flex flex-col mt-20">
        {menuItems.map((item) => {
          return item.title !== "Logout" ? (
            <Link
              to={`${item.path}`}
              className={`pl-10 py-5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 text-sm
               ${
                 location.pathname.includes(item.path) &&
                 "bg-[#145c2aaf] text-yellow-200 font-bold"
               }
              `}
            >
              {item.title}
            </Link>
          ) : (
            <span
              onClick={logout}
              className="pl-10 py-5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 text-sm cursor-pointer"
            >
              Logout
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
