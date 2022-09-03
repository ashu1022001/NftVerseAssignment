
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Community from "../../components/community/Community";
import Explore from "../../components/explore/Explore";
import Footer from "../../components/footer/Footer";
import Personal from "../../components/personal/Personal";
import Profile from "../../components/profile/Profile";
import { useSideBar } from "../../ShowSidebarContext";
import { faBars, faFacebookF } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
 
 const sideBar = useSideBar();

  return (
    sideBar.toggleButton && (
      <div
        className={`flex justify-between  items-center flex-col rounded h-screen bg-white`}
      >
        <div className="flex justify-between items-center py-3 border-b border-slate-200 w-full px-3">
          <div>

            <h3 className="font-semibold">SmartUp</h3>
          </div>
          <button onClick={() => sideBar.toggleSideBar()}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
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
