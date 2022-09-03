import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Profile() {
  return (
    <div className="flex gap-7 items-center self-stretch px-6 border-b p-1  border-slate-200 ">
      <span className="flex gap-4 items-center">
        <img
          className="rounded-full w-8 h-8 overflow-hidden object-cover "
          src="/img/img1.jpg"
        />
        <span className=" text-slate-900 text-sm">Profile</span>
      </span>
      <span className=" text-slate-600 text-sm"> 12 </span>
      <span className="rounded-full w-7 h-7 flex items-center justify-center bg-orange">
        <FontAwesomeIcon icon={faBell} />
      </span>
    </div>
  );
}

export default Profile;
