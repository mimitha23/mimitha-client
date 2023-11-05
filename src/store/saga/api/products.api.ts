import { axiosPublicQuery } from "service/axios";
import { SearchProductsArgsT } from "interface/DB/product.types";

export async function getAllProductsQuery(payload: any) {
  return await axiosPublicQuery.get(
    `/products/developed?${payload}&select=title,price,category,productType,isEditable,soldOut,size,color,_id,thumbnails`
  );
}

export async function searchProductsQuery(payload: SearchProductsArgsT) {
  return await axiosPublicQuery.get(
    `/products/search?search=${payload.search}&locale=${payload.locale}`
  );
}
