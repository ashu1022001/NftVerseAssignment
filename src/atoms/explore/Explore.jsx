import { faBoxes, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <div className="flex flex-col gap-3 border-b p-1 self-stretch px-6 pb-2 border-slate-200">
      <Link to='/' state={{title: 'Discover'}} className="flex btn gap-9 text-slate-600 items-center">
        <span className="">
          <FontAwesomeIcon icon={faBoxes} />
        </span>
        <span className="text-xs"> Discover</span>
        <span className="w-7 text-center h-4 rounded-full bg-blue-600 text-xs text-white">
          24
        </span>
      </Link>

      <Link to='/' state={{title: 'SmartUp'}} className="flex btn gap-9 text-slate-600 items-center">
        <span className="">
          <FontAwesomeIcon icon={faCircle} />
        </span>
        <span className="text-xs"> SamartUp</span>
      </Link>
    </div>
  );
}

export default Explore;
