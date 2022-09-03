import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSideBar } from "../../ShowSidebarContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { toggleButton, toggleSideBar } = useSideBar();
  const location = useLocation();
  return (
    <div className="flex justify-between items-center bg-slate-200 py-3 px-3 shadow-sm sticky top-0">
      <div className="flex gap-2">
        {!toggleButton && (
          <button onClick={() => toggleSideBar()}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <span>{ location?.state?.title || 'Discover' }</span>
      </div>
      <div>
        <button className="btn bg-blue-600 px-4 rounded-xl text-white">+</button>
      </div>
    </div>
  );
}

export default Header;
