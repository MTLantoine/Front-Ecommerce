import Picture from "./Picture";

interface Article {
  id: number;
  name: string;
  picture: Picture;
  description: string;
  price: number;
  quantity: number;
}

export default Article;
