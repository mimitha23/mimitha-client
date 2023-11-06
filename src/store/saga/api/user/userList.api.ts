import { axiosPrivateQuery } from "service/axios";

import {
  DeleteListArgsT,
  AddToListArgsT,
  GetAllFromListArgsT,
} from "interface/DB/userLists.types";

export async function createListQuery(payload: { title: string }) {
  return await axiosPrivateQuery.post(`/user/lists`, payload);
}

export async function deleteListQuery(payload: DeleteListArgsT) {
  return await axiosPrivateQuery.delete(`/user/lists/${payload.listId}`);
}

export async function addToListQuery(payload: AddToListArgsT) {
  return await axiosPrivateQuery.post(
    `/user/lists/${payload.listId}/${payload.productId}`
  );
}

export async function removeFromListQuery(payload: AddToListArgsT) {
  return await axiosPrivateQuery.delete(
    `/user/lists/${payload.listId}/${payload.productId}`
  );
}

export async function getAllListQuery() {
  return await axiosPrivateQuery.get(`/user/lists`);
}

export async function getAllFromListQuery(payload: GetAllFromListArgsT) {
  return await axiosPrivateQuery.get(`/user/lists/${payload.listId}`);
}
