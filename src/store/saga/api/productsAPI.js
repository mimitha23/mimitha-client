import { axiosPublicQuery } from "service/axios";

export async function getAllProductsQuery() {
  return await axiosPublicQuery.get("/products/developed?isPublic=1");
}

export async function searchProductsQuery(payload) {
  return await axiosPublicQuery.get(
    `/products/search?search=${payload.search}&locale=${payload.locale}`
  );
}
