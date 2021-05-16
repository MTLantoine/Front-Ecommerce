import { IconButton } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import NotFoundComponent from "../../NotFoundComponent/NotFoundComponent";
import APIAccessor from "../../usefull/APIAccessor";
import BuyComponent from "../../usefull/BuyComponent/BuyComponent";
import QuantityPicker from "../../usefull/QuantityPicker/QuantityPicker";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./ProductPageComponent.scss";

interface TParams {
  id: string;
}

const api = APIAccessor.getInstance();

function ProductPageComponent({ match }: RouteComponentProps<TParams>) {
  const article = api
    .getArticles()
    .find((article) => article.id === +match.params.id);

  const handleAddQuantityClick = () => {
    if (article) {
      api.addToCart(article, 1);
    }
  };

  if (article) {
    return (
      <div className="product-page-container">
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
                <BuyComponent
                  handleAddQuantityClick={handleAddQuantityClick}
                  longVersion={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="back-to-shopping">
          <Link to="/">
            <IconButton className="back-button">
              <ArrowBackIcon />
              <div className="text">Revenir en arrière</div>
            </IconButton>
          </Link>
        </div>
      </div>
    );
  } else {
    return <NotFoundComponent />;
  }
}
export default ProductPageComponent;
