export type Category = {
  id: string;
  name: string;
  children?: Category[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  categoryId: string;
};
