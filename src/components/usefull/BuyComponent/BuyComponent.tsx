import React from "react";
import "./BuyComponent.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { IconButton } from "@material-ui/core";

function BuyComponent({ longVersion }: { longVersion: Boolean }) {
  const [isLoading, setLoading] = React.useState(false);

  var icon = isLoading ? (
    <AutorenewIcon className="spinning" />
  ) : (
    <AddShoppingCartIcon />
  );

  const handleAddClick = () => {
    setLoading(!isLoading);
  };

  var addButton;
  if (longVersion) {
    addButton = (
      <IconButton className="buy-article__icon" onClick={handleAddClick}>
        <div className="text">Ajouter au panier</div>
        {icon}
      </IconButton>
    );
  } else {
    addButton = (
      <IconButton className="buy-article__icon" onClick={handleAddClick}>
        {icon}
      </IconButton>
    );
  }

  return (
    <div className={`buy-article ${isLoading ? "spinning" : ""}`}>
      {addButton}
    </div>
  );
}

export default BuyComponent;
