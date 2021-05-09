import React from "react";
import ArticleComponent from "./Article/ArticleComponent";
import "./ListArticleComponent.scss";

function ListArticleComponent(listArticles: any) {
  console.log(listArticles);
  const loopArticle = listArticles.listArticles.map((item: any) => (
    <li className="list-articles__item" key={item.id}>
      <ArticleComponent article={item} />
    </li>
  ));
  return <ul className="list-articles">{loopArticle}</ul>;
}

export default ListArticleComponent;
