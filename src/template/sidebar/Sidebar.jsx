import { faBars, faFacebookF } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../atoms/footer/Footer";

function Sidebar() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className={`flex justify-end rounded transition ease-in-out duration-300 h-screen bg-white ${showSideBar ? "w-60" : "w-4"}  `}>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowSideBar(!showSideBar)}
      />
    <Footer/>
    </div>
  );
}

export default Sidebar;
