import "./App.css";

import React, { useState } from "react";
import Sidebar from "./template/sidebar/Sidebar";

import { ToggleConetext, ToggleSideBarContext } from "./ShowSidebarContext";
import { ROUTES } from "./routes";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="grid grid-cols-12 bg-slate-200">
      <ToggleConetext.Provider value={showSideBar}>
        <ToggleSideBarContext.Provider
          value={() => setShowSideBar(!showSideBar)}
        >
          {showSideBar && (
            <div className={`col-span-5 fixed top-0 left-0 md:static md:col-span-2 z-10`}>
              <Sidebar />
            </div>
          )}
          <div
            className={` flex flex-col ${
              showSideBar ? "col-span-12 md:col-span-10" : "col-span-12"
            }  grow shrink-0 gap-3 max-h-[100vh] overflow-y-auto`}
          >
            <Routes>
              {ROUTES.map((route) => {
                return <Route key={route.path} path={route.path} element={<route.component />} />;
              })}
            </Routes>
          </div>
        </ToggleSideBarContext.Provider>
      </ToggleConetext.Provider>
    </div>
  );
}

export default App;
