import { axiosPrivateQuery } from "service/axios";

export async function addToFavoritesQuery(payload) {
  return await axiosPrivateQuery.post(`/user/favorites/${payload.productId}`);
}

export async function removeFromFavoritesQuery(payload) {
  return await axiosPrivateQuery.delete(`/user/favorites/${payload.productId}`);
}

export async function getAllFavoritesQuery(selectQuery) {
  return await axiosPrivateQuery.get(`/user/favorites${selectQuery || ""}`);
}
