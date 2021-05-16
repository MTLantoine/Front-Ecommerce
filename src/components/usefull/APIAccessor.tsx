import Article from "../../utils/models/Article";
import Cart from "../../utils/models/Cart";
import Client from "../../utils/models/Client";
import ItemInCart from "../main/ItemInCart/ItemInCart";

const cartComponent = ItemInCart.getInstance();
class APIAccessor {
  private static instance: APIAccessor;

  private cart: Cart[] = [];

  public static getInstance() {
    if (!APIAccessor.instance) {
      APIAccessor.instance = new APIAccessor();
    }

    return APIAccessor.instance;
  }

  public getArticles(): Article[] {
    let articles: Article[] = [];

    articles.push({
      id: 0,
      name: "Tomates",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/800/400",
        alt: "Tomate en grappe",
      },
      price: 2,
      quantity: 25,
    });

    articles.push({
      id: 1,
      name: "Rhum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/500",
        alt: "Rhum (boisson alcoolisée)",
      },
      price: 7.5,
      quantity: 15,
    });

    articles.push({
      id: 2,
      name: "Jus d'orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 3,
      name: "Clémentine",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/800",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 4,
      name: "Pomme de terre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/400/800",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 5,
      name: "Salade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/500/300",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 6,
      name: "Montre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/300/500",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 1,
    });

    articles.push({
      id: 7,
      name: "Lunettes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/190",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 8,
      name: "Stylo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/100/500",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 9,
      name: "Livre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/100/600",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 10,
      name: "Télévision",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/110/500",
        alt: "Jus de fruis en briquette",
      },
      price: 350,
      quantity: 13,
    });

    articles.push({
      id: 11,
      name: "Lit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/110/600",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 12,
      name: "Bureau",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/120/600",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 13,
      name: "Assiettes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/120/700",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 14,
      name: "T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/130/600",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 15,
      name: "Chaussures",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/130/700",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    articles.push({
      id: 16,
      name: "Voiture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/140/700",
        alt: "Jus de fruis en briquette",
      },
      price: 15000,
      quantity: 3,
    });

    articles.push({
      id: 17,
      name: "Jambon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est sed dui dapibus posuere non vitae ipsum. Maecenas finibus nisl ac iaculis volutpat. Nunc tincidunt nec sem quis tempus. Aenean auctor rutrum nunc, nec feugiat turpis lacinia id. Nunc eleifend imperdiet tristique. Nam pellentesque nisl nec finibus vulputate. Phasellus sit amet ante aliquam, varius elit id, molestie mauris. Ut imperdiet sodales magna, aliquam rhoncus odio fermentum sed. Sed lorem lacus, aliquam sit amet dignissim ut, posuere nec ante. Phasellus dapibus erat at elit euismod, rutrum vulputate nulla ornare.",
      picture: {
        src: "https://picsum.photos/140/800",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    return articles;
  }

  public getArticleById(id: number) {
    return this.getArticles().find((element) => element.id === id);
  }

  public getClients() {
    let clients: Client[] = [];

    clients.push({
      firstname: "Antoine",
      lastname: "Mortelier",
      address: "27 rue rené cassin",
    });

    clients.push({
      firstname: "Logan",
      lastname: "Chenavier",
      address: "18 place Victor Hugo",
    });

    return clients;
  }

  public getCart() {
    return this.cart;
  }

  public addToCart(item: Article, quantity: number) {
    if (this.cart.find((element) => element.articleId === item.id)) {
      this.cart.forEach((element) => {
        if (element.articleId === item.id) {
          element.quantity += quantity;
        }
      });
    } else {
      const cart: Cart = {
        articleId: item.id,
        quantity: quantity,
      };
      this.cart.push(cart);
    }

    const boughtArticles = this.getGoodArticles(this.getCart());
    cartComponent.updateCart(boughtArticles);
  }

  public getGoodArticles(cart: Cart[]) {
    const boughtArticles: {
      name: string | undefined;
      pic: string | undefined;
      quantity: number | undefined;
      price: number | undefined;
    }[] = [];
    cart.forEach((element) => {
      boughtArticles.push({
        name: this.getArticleById(element.articleId)?.name,
        pic: this.getArticleById(element.articleId)?.picture.src,
        quantity: element.quantity,
        price: this.getArticleById(element.articleId)?.price,
      });
    });

    return boughtArticles;
  }
}

export default APIAccessor;
