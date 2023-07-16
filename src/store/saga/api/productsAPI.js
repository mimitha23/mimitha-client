import { axiosPublicQuery } from "service/axios";

export async function getPopularProducts() {
  return await axiosPublicQuery.get("/products/developed?isPublic=1");
}

export async function getAllProducts() {
  return await axiosPublicQuery.get("/products/developed?isPublic=1");
}
