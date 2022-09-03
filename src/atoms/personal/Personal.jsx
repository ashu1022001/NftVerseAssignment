import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Personal() {
  return (
    <div className="flex pb-2 flex-col self-stretch px-6 border-slate-200 border-b gap-2">
      <div className="  flex items-center gap-7">
        <FontAwesomeIcon className="" icon={faUser} />
        <span className=" text-slate-900 text-xs">Personal</span>
      </div>
      <div className=" ml-11 list-none flex flex-end text-xs gap-2 text-slate-500 flex-col">
        <span>In progress</span>
        <span>Completed</span>
        <span>Read Later</span>
      </div>
    </div>
  );
}

export default Personal;
