import { axiosPrivateQuery } from "service/axios";

export async function createListQuery(payload) {
  return await axiosPrivateQuery.post(`/user/lists`, payload);
}

export async function addToListQuery(payload) {
  return await axiosPrivateQuery.post(
    `/user/lists/${payload.listId}/${payload.productId}`
  );
}

export async function removeFromListQuery(payload) {
  return await axiosPrivateQuery.delete(
    `/user/lists/${payload.listId}/${payload.productId}`
  );
}

export async function getAllListQuery() {
  return await axiosPrivateQuery.get(`/user/lists`);
}

export async function getAllFromListQuery(payload) {
  return await axiosPrivateQuery.get(`/user/lists/${payload.listId}`);
}
