import { axiosPublicQuery } from "service/axios";

export async function getNav(payload) {
  return await axiosPublicQuery.get(
    `/app/navigation/client?category=${payload}`
  );
}
