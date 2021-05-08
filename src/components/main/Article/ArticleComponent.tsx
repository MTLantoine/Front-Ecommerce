import React from "react";
import "./ArticleComponent.scss";

function ArticleComponent(article: any) {
  const item = article.article;
  return <div>{item.name}</div>;
}

export default ArticleComponent;
