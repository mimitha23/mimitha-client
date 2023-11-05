import { axiosPublicQuery } from "service/axios";
import { GetNavArgsT } from "interface/DB/nav.types";

export async function getNav(payload: GetNavArgsT) {
  return await axiosPublicQuery.get(
    `/app/navigation/client?category=${payload}`
  );
}
