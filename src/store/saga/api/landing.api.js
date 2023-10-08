import { axiosPublicQuery } from "service/axios";

export async function getLanding() {
  return await axiosPublicQuery.get("/landing");
}
