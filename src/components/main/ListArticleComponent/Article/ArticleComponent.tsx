import "./ArticleComponent.scss";

import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import QuantityPicker from "../../../usefull/QuantityPicker/QuantityPicker";
import Article from "../../../../utils/models/Article";
import BuyComponent from "../../../usefull/BuyComponent/BuyComponent";
import { Link } from "react-router-dom";
import APIAccessor from "../../../usefull/APIAccessor";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

const api = APIAccessor.getInstance();

function ArticleComponent({ ...article }: Article) {
  const classes = useStyles();

  const handleAddQuantityClick = () => {
    api.addToCart(article, 1);
  };

  const tmpSubheader =
    "Plus que " +
    article.quantity +
    " article" +
    (article.quantity > 1 ? "s" : "");

  return (
    <div className="article">
      <Card className="article__card">
        <Link
          to={`/product-page/${article.id}`}
          className="article__card__product"
        >
          <CardHeader
            className="article__card__header"
            title={article.name}
            subheader={tmpSubheader}
          />
          <CardMedia className={classes.media} image={article.picture.src} />
        </Link>
        <CardActions className="article__card__actions" disableSpacing>
          <div>
            <div className="price">{article.price}€</div>
            <QuantityPicker maximum={article.quantity} />
          </div>
          <BuyComponent
            handleAddQuantityClick={handleAddQuantityClick}
            longVersion={false}
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleComponent;
