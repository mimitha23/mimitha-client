import {
  AddToFavoritesArgsT,
  RemoveFromFavoritesArgsT,
  GetAllFavoritesIdsArgsT,
} from "interface/DB/userFavorites.types";

import { axiosPrivateQuery } from "service/axios";

export async function addToFavoritesQuery(payload: AddToFavoritesArgsT) {
  return await axiosPrivateQuery.post(`/user/favorites/${payload.productId}`);
}

export async function removeFromFavoritesQuery(
  payload: RemoveFromFavoritesArgsT
) {
  return await axiosPrivateQuery.delete(`/user/favorites/${payload.productId}`);
}

export async function getAllFavoritesIdsQuery(
  payload: GetAllFavoritesIdsArgsT
) {
  return await axiosPrivateQuery.get(`/user/favorites${payload?.query || ""}`);
}

export async function getAllFavoritesQuery() {
  return await axiosPrivateQuery.get(`/user/favorites`);
}
