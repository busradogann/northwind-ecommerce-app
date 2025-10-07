import { Categories } from "../types/models";

export const getCategories = (): Promise<Categories[]> => {
  let url = "http://localhost:3000/categories";
  
  return fetch(url)
    .then(response => response.json())
    .then((data: Categories[]) => data);
};