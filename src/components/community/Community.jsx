import React from "react";
import { Link } from "react-router-dom";
import {  communities } from "../../data/side-menu";

function Community() {

    

  return (
    <div className="flex flex-col gap-4 pb-5 border-b p-1 self-stretch px-6 border-slate-200">

        {
            communities.map(community=>{
                return(
                    <Link state={{ title: community?.name }} to={community?.link} className=" btn flex items-center gap-5" key={community.name}>
                    <img
                      className="rounded-full w-8 h-8 overflow-hidden object-cover "
                      src={`${community.image}.jpg`}
                    />
                    <span className=" text-slate-900 text-xs">{community.name}</span>
                  </Link>
                )
            })
        }
      {/*<button className=" btn flex items-center gap-5">
        <img
          className="rounded-full w-8 h-8 overflow-hidden object-cover "
          src="/img/img2.jpg"
        />
        <span className=" text-slate-900 text-xs">Man community</span>
      </button>
      <button className=" btn flex items-center gap-5">
        <img
          className="rounded-full w-8 h-8 overflow-hidden object-cover "
          src="/img/img3.jpg"
        />
        <span className=" text-slate-900 text-xs">Fun community</span>
      </button>
      <button className=" btn flex items-center gap-5">
        <img
          className="rounded-full w-8 h-8 overflow-hidden object-cover "
          src="/img/img4.jpg"
        />
        <span className=" text-slate-900 text-xs">Tech community</span>
      </button>
      <button className=" btn flex items-center gap-5">
        <img
          className="rounded-full w-8 h-8 overflow-hidden object-cover "
          src="/img/img5.jpg"
        />
        <span className=" text-slate-900 text-xs">Lead community</span>
  </button>*/}
    </div>
  );
}

export default Community;
