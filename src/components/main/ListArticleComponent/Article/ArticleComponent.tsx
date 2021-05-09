import React from "react";
import "./ArticleComponent.scss";

function ArticleComponent(article: any) {
  const item = article.article;
  return (
    <div className="article">
      <div className="article__picture">
        <img
          className="picture"
          src={item.picture.src}
          alt={item.picture.alt}
        />
      </div>
      <div className="article__title">{item.name}</div>
    </div>
  );
}

export default ArticleComponent;
