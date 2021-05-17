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
            <img
              src="https://www.alimentarium.org/fr/system/files/thumbnails/image/AL001-02%20tomate.jpg"
              alt="picture"
            />
          </div>
          <div className="container">
            <div className="item__name">Tomates</div>
            <div className="item__price">2€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img
              src="data:image/jpeg;base64,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"
              alt="picture"
            />
          </div>
          <div className="container">
            <div className="item__name">Jus d'orange</div>
            <div className="item__price">4€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51w92ywIG8L._AC_UX569_.jpg"
              alt="picture"
            />
          </div>
          <div className="container">
            <div className="item__name">Lunettes</div>
            <div className="item__price">34€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img
              src="data:image/jpeg;base64,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"
              alt="picture"
            />
          </div>
          <div className="container">
            <div className="item__name">Assiettes</div>
            <div className="item__price">1.5€</div>
          </div>
        </div>
        <div className="item">
          <div className="item__picture">
            <img
              src="https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg"
              alt="picture"
            />
          </div>
          <div className="container">
            <div className="item__name">Voiture</div>
            <div className="item__price">15000€</div>
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
