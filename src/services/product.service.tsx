import { Product } from "../types/models";

export const getProducts = (categoryId?: number): Promise<Product[]> => {
  let url = "http://localhost:3000/products";

  if (categoryId) url += "?categoryId=" + categoryId;
  
  return fetch(url)
    .then(response => response.json())
    .then((data: Product[]) => data);
};