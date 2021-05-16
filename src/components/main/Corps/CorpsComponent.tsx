import React, { useEffect } from "react";
import Article from "../../../utils/models/Article";
import APIAccessor from "../../usefull/APIAccessor";
import ListArticleComponent from "../ListArticleComponent/ListArticleComponent";
import "./CorpsComponent.scss";

const api = APIAccessor.getInstance();

const articles: Article[] = api.getArticles();

function CorpsComponent(props: any) {
  const { handleArticles } = props;

  useEffect(() => {
    handleArticles(articles);
  });

  return (
    <div className="corps-component">
      <ListArticleComponent listArticles={articles} />
    </div>
  );
}

export default CorpsComponent;
