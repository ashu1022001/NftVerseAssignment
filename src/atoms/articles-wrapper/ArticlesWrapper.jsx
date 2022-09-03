import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import ArticleCard from "../article-card/ArticleCard";

export default function ArticlesWrapper() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => res.json())
      .then((res) => setArticles(res.content));
  }, []);


  return (
    <>
      <Header />
      <div className={`flex flex-wrap gap-3  grow shrink-0 p-4`}>
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
    </>
  );
}
