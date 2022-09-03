import { faBars, faFacebookF } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Community from "../../atoms/community/Community";
import Explore from "../../atoms/explore/Explore";
import Footer from "../../atoms/footer/Footer";
import Personal from "../../atoms/personal/Personal";
import Profile from "../../atoms/profile/Profile";
import { useToggle, useToggleSideBar } from "../../ShowSidebarContext";

function Sidebar() {
 
  const showSideBar = useToggle();
  const toggleSideBar = useToggleSideBar();

  return (
    showSideBar && (
      <div
        className={`flex justify-between  items-center flex-col rounded transition ease-in-out duration-300 h-screen bg-white`}
      >
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => toggleSideBar()}
        />

        <Profile />
        <Explore />
        <Community />
        <Personal />
        <Footer />
      </div>
    )
  );
}

export default Sidebar;
