import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="layout flex w-full h-full">
      <div className="sidebar">
        <Sidebar showSidebar={showSidebar} />
      </div>
      <div className="w-full">
        <div className="header bg-primary h-20 w-full flex items-center cursor-pointer">
          <HiOutlineMenuAlt1
            onClick={() => setShowSidebar(!showSidebar)}
            color="gray"
            size={50}
          />
        </div>
        {/* //this makes content scroll and not the sidebar */}
        <div className="content max-h-[85vh] overflow-y-auto ">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
