import React from "react";
import Article from "../../../utils/models/Article";
import Cart from "../../../utils/models/Cart";
import APIAccessor from "../../usefull/APIAccessor";
import "./ItemInCart.scss";

// const api = APIAccessor.getInstance();

class ItemInCart extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  private static instance: ItemInCart;

  public static getInstance() {
    if (!ItemInCart.instance) {
      ItemInCart.instance = new ItemInCart({});
    }

    return ItemInCart.instance;
  }

  public updateCart(cart: any) {
    console.log(cart);
  }

  public getCart() {
    return (
      <div className="cart-recap">
        <div className="item">
          <div className="item__picture">
            <img src="https://picsum.photos/120" alt="picture" />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">7€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img src="https://picsum.photos/120" alt="picture" />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">7€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img src="https://picsum.photos/120" alt="picture" />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">7€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img src="https://picsum.photos/120" alt="picture" />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">7€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img src="https://picsum.photos/120" alt="picture" />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">7€</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="item-in-cart">
        <div className="cart-title">Panier</div>
        {this.getCart()}
      </div>
    );
  }
}

export default ItemInCart;
