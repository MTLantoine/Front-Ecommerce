import React, { useState } from "react";
import Article from "../../../utils/models/Article";
import ListArticleComponent from "../ListArticleComponent/ListArticleComponent";
import "./CorpsComponent.scss";

const articles: Article[] = [
  {
    id: 0,
    name: "Tomates",
    picture: {
      src: "https://picsum.photos/800/400",
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
      src: "https://picsum.photos/200",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
  {
    id: 3,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/800",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
  {
    id: 4,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/400/800",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
  {
    id: 5,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/500/300",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
  {
    id: 6,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/300/500",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
  {
    id: 7,
    name: "Jus d'orange",
    picture: {
      src: "https://picsum.photos/1900",
      alt: "Jus de fruis en briquette",
    },
    description: "Jus d'orange frais",
    price: 1.5,
    quantity: 165,
  },
];

function CorpsComponent() {
  const [article] = useState(articles);
  return (
    <div className="corps-component">
      <ListArticleComponent listArticles={article} />
    </div>
  );
}

export default CorpsComponent;
