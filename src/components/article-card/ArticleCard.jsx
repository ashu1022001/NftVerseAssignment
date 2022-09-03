import React, { useState, useEffect } from "react";
import Sidebar from "../../template/sidebar/Sidebar";

function ArticleCard(props) {
  return (
    <a className="hover:scale-105 duration-300" href="#" rel="noreferrer">
      <div className="w-128 h-64 bg-white rounded-lg overflow-hidden flex flex-col ">
        <div className="w-full h-4/5 overflow-hidden">
          <img src={props.image} className="w-full h-full object-cover" />
        </div>
        <div className="w-full  p-2 overflow-hidden text-slate-700	">
          <span>{props.article}</span>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
