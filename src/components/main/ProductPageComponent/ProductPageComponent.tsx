import React from "react";
import { RouteComponentProps } from "react-router";
import APIAccessor from "../../usefull/APIAccessor";
import "./ProductPageComponent.scss";

interface TParams {
  id: string;
}

const api = APIAccessor.getInstance();

function ProductPageComponent({ match }: RouteComponentProps<TParams>) {
  console.log(match);
  const article = api
    .getArticles()
    .find((article) => article.id === +match.params.id);

  if (article) {
    return <div className="product-page">{article.name}</div>;
  }
}
export default ProductPageComponent;
