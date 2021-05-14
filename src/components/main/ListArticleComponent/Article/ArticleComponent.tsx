import "./ArticleComponent.scss";

import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

function ArticleComponent(article: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [buyQuantity, setBuyQuantity] = React.useState(0);
  const item = article.article;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddQuantityClick = (value: number) => {
    setBuyQuantity(value);
  };

  const tmpSubheader =
    "Plus que " + item.quantity + " article" + (item.quantity > 1 ? "s" : "");

  return (
    <div className="article">
      <Card className="article__card">
        <CardHeader
          className="article__card__header"
          title={item.name}
          subheader={tmpSubheader}
        />
        <CardMedia className={classes.media} image={item.picture.src} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleComponent;
