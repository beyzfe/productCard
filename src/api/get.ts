import { Categories, Product } from "../types/product";
import { API_URL } from "./config";

export async function getProducts(): Promise<Product[]> {
  const data = await fetch(`${API_URL}/products`);
  return await data.json();
}
export async function getCategories(): Promise<Categories[]> {
  const data = await fetch(`${API_URL}/products/categories`);
  return await data.json();
}
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  if (!response.ok) throw new Error("Kategoriye göre ürünler alınamadı");
  return await response.json();
}
