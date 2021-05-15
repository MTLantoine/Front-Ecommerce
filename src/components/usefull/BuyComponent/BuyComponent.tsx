import React from "react";
import "./BuyComponent.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { IconButton } from "@material-ui/core";

function BuyComponent() {
  const [isLoading, setLoading] = React.useState(false);

  var icon = isLoading ? (
    <AutorenewIcon className="spinning" />
  ) : (
    <AddShoppingCartIcon />
  );

  const handleAddClick = () => {
    setLoading(!isLoading);
  };

  return (
    <div className={`buy-article ${isLoading ? "spinning" : ""}`}>
      <IconButton className="buy-article__icon" onClick={handleAddClick}>
        {icon}
      </IconButton>
    </div>
  );
}

export default BuyComponent;
