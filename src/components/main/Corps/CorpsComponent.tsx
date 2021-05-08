import React, { useState } from "react";
import Article from "../../../utils/models/Article";
import ArticleComponent from "../Article/ArticleComponent";
import "./CorpsComponent.scss";

const articles: Article[] = [
  {
    id: 0,
    name: "Tomates",
    picture: {
      src: "https://picsum.photos/500",
      alt: "Tomate en grappe",
    },
    description: "Des tomates bien fraiches",
    price: 2,
    quantity: 25,
  },
  {
    id: 1,
    name: "Rhum",
    picture: {
      src: "https://picsum.photos/500",
      alt: "Rhum (boisson alcoolisée)",
    },
    description: "70% d'alcool",
    price: 7.5,
    quantity: 15,
  },
  {
    id: 2,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/500",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
];

function CorpsComponent() {
  const [article] = useState(articles);
  const loopArticle = article.map((item) => (
    <li key={item.id}>
      <ArticleComponent article={item} />
    </li>
  ));
  return <ul>{loopArticle}</ul>;
}

export default CorpsComponent;
