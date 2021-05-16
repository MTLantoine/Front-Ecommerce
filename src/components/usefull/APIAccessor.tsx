import Article from "../../utils/models/Article";
import Client from "../../utils/models/Client";

class APIAccessor {
  private static instance: APIAccessor;

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
      picture: {
        src: "https://picsum.photos/140/700",
        alt: "Jus de fruis en briquette",
      },
      price: 15000,
      quantity: 3,
    });

    articles.push({
      id: 17,
      name: "Jambom",
      picture: {
        src: "https://picsum.photos/140/800",
        alt: "Jus de fruis en briquette",
      },
      price: 1.5,
      quantity: 165,
    });

    return articles;
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
  }
}

export default APIAccessor;
