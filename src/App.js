import "./App.css";
import ArticleCard from "./atoms/article-card/ArticleCard";
import React, { useState, useEffect } from "react";
import Sidebar from "./template/sidebar/Sidebar";

function App() {
  const [articles, setArticles] = useState([]);

   useEffect(() => {
     fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => res.json())
      .then((res) => setArticles(res.content));
  }, []);

  return (

    <div className="flex p-3 bg-slate-200">
    <div className="fixed h-screen top-0">
    <Sidebar/>
    </div>
    <div className="flex ml-72 flex-wrap justify-start gap-6  gap-y-7	 ">
      {
        articles?.map(article =>{
          return(
            <ArticleCard 
            key = {article.postId}
            image = {article.coverImageUrl}
            article = {article.title}
            
            
            />
          )

        })
      }
    </div>
    </div>
  );
}

export default App;
