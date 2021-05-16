import React, { useState } from "react";
import Article from "../../../utils/models/Article";
import SearchBar from "../../usefull/SearchBar/SearchBar";
import WrapperMenuComponent from "../WrapperMenuComponent/WrapperMenuComponent";
import ArticleComponent from "./Article/ArticleComponent";
import "./ListArticleComponent.scss";

const areSimilar = (str1: string, str2: string) => {
  return str1.toLowerCase().includes(str2.toLowerCase());
};

function ListArticleComponent(listArticles: any) {
  const loopArticle = listArticles.listArticles.map((item: any) => {
    return (
      <li className="list-articles__item" key={item.id}>
        <ArticleComponent {...item} />
      </li>
    );
  });

  const [articles, setArticles] = useState(loopArticle);

  const handleSearch = (value: string) => {
    var newArticles: Article[] = [];
    listArticles.listArticles.forEach((element: Article) => {
      if (areSimilar(element.name, value)) {
        newArticles.push(element);
      }
    });

    const newLoopArticle = newArticles.map((item: any) => {
      return (
        <li className="list-articles__item" key={item.id}>
          <ArticleComponent {...item} />
        </li>
      );
    });
    setArticles(newLoopArticle);
  };

  return (
    <div className="list-articles">
      <WrapperMenuComponent />
      <SearchBar handleSearch={handleSearch} />
      <ul className="list-articles__container">{articles}</ul>
    </div>
  );
}

export default ListArticleComponent;
