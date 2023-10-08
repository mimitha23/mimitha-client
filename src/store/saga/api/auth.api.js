import { axiosPrivateQuery, axiosPublicQuery } from "service/axios";

export async function loginQuery(payload) {
  return await axiosPublicQuery.post("/auth/login", payload);
}

export async function logoutQuery() {
  return await axiosPrivateQuery.post("/auth/logout");
}

export async function googleLoginQuery(payload) {
  return await axiosPublicQuery.post("/auth/login/google", payload);
}

export async function registrationQuery(payload) {
  return await axiosPublicQuery.post("/auth/register", payload);
}

export async function forgotPasswordQuery(payload) {
  return await axiosPublicQuery.post("/auth/forgot-password", payload);
}

export async function confirmEmailQuery(payload) {
  return await axiosPublicQuery.put("/auth/forgot-password", payload);
}

export async function updatePasswordQuery(payload) {
  return await axiosPublicQuery.patch("/auth/forgot-password", payload);
}
