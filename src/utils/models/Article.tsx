import Picture from "./Picture";

interface Article {
  id: number;
  name: string;
  description: string;
  picture: Picture;
  price: number;
  quantity: number;
}

export default Article;
