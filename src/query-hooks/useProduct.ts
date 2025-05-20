import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get";

export function useProduct() {
  return useQuery({ queryKey: ["product"], queryFn: getProducts });
}
