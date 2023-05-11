import axios from "axios";

export const axiosPublicQuery = axios.create({
  baseURL: "",
  withCredentials: true,
});
