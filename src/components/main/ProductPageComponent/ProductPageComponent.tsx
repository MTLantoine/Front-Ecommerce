import React from "react";
import { RouteComponentProps } from "react-router";
import NotFoundComponent from "../../NotFoundComponent/NotFoundComponent";
import APIAccessor from "../../usefull/APIAccessor";
import BuyComponent from "../../usefull/BuyComponent/BuyComponent";
import QuantityPicker from "../../usefull/QuantityPicker/QuantityPicker";
import "./ProductPageComponent.scss";

interface TParams {
  id: string;
}

const api = APIAccessor.getInstance();

function ProductPageComponent({ match }: RouteComponentProps<TParams>) {
  const article = api
    .getArticles()
    .find((article) => article.id === +match.params.id);

  if (article) {
    return (
      <div className="product-page">
        <div className="product-page__left-part">
          <div className="picture">
            <img
              className="picture__img"
              src={article.picture.src}
              alt={article.picture.alt}
            />
          </div>
        </div>
        <div className="product-page__right-part">
          <div className="name">{article.name}</div>
          <div className="description">{article.description}</div>
          <div className="quantity">
            Plus que&nbsp;
            <span className="important">
              {article.quantity} articles restants
            </span>
            &nbsp;!!!
          </div>
          <div className="buy">
            <div className="price">{article.price}€</div>
            <div className="selector">
              <QuantityPicker maximum={article.quantity} />
            </div>
            <div className="buy-button">
              <BuyComponent longVersion={true} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFoundComponent />;
  }
}
export default ProductPageComponent;
