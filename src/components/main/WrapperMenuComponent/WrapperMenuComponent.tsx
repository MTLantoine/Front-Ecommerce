import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import ItemInCart from "../ItemInCart/ItemInCart";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

function WrapperMenuComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div className="menu-anchor">
      <IconButton onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className="drawer"
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <ItemInCart />
      </Drawer>
    </div>
  );
}

export default WrapperMenuComponent;
