import { axiosPrivateQuery, axiosPublicQuery } from "service/axios";

export async function login(payload) {
  return await axiosPublicQuery.post("/auth/login", payload);
}

export async function logout() {
  return await axiosPrivateQuery.post("/auth/logout");
}

export async function googleLogin(payload) {
  return await axiosPublicQuery.post("/auth/login/google", payload);
}

export async function registration(payload) {
  return await axiosPublicQuery.post("/auth/register", payload);
}
