import { axiosPrivateQuery, axiosPublicQuery } from "service/axios";

export async function login(payload) {
  return await axiosPublicQuery.post("/");
}

export async function logout() {
  return await axiosPrivateQuery.post("/");
}

export async function googleLogin(payload) {
  return await axiosPublicQuery.post("/");
}

export async function registration(payload) {
  return await axiosPublicQuery.post("/");
}
