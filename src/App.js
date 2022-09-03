import "./App.css";
import ArticleCard from "./atoms/article-card/ArticleCard";
import React, { useState, useEffect } from "react";
import Sidebar from "./template/sidebar/Sidebar";

import { ToggleConetext,ToggleSideBarContext } from "./ShowSidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => res.json())
      .then((res) => setArticles(res.content));
  }, []);
  const [showSideBar, setShowSideBar] = useState(true);


  return (
    
    
    <div className="grid grid-cols-12 bg-slate-200">
    <ToggleConetext.Provider value={showSideBar}>
    <ToggleSideBarContext.Provider value ={()=>setShowSideBar(!setShowSideBar)}>
      <div className="col-span-5 md:col-span-2">
      
        <Sidebar />
      </div>
      <FontAwesomeIcon icon={faBars} onClick={()=> setShowSideBar(!showSideBar)}  />
      <div className="flex flex-wrap col-span-7 md:col-span-10 grow shrink-0 gap-7 p-4 max-h-[100vh] overflow-y-auto">
        {articles?.map((article) => {
          return (
            <ArticleCard
              key={article.postId}
              image={article.coverImageUrl}
              article={article.title}
            />
          );
        })}
      </div>
      </ToggleSideBarContext.Provider>
      </ToggleConetext.Provider>
    </div>
  );
}

export default App;
