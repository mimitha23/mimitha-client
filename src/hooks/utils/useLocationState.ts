import { useLocation } from "react-router-dom";
import { LocationStateT, LocationStateOptionalT } from "interface/common.types";

// EXAMPLE OF LOCATION OBJECT
// {
//  category :"men", // must be always key of main nav routes e.g men,women etc.
//  productType: { // must be object {query:"query str", label:{ka:"ქართული ქეფშენი", en:"english caption"}} label: "label",
//    query : "cargo-trousers",
//    ka:"კარგო შარვალი"
//    en:"cargo trousers"
// },

export default function useLocationState() {
  const { state } = useLocation();

  const locationStateDefaults: LocationStateT = {
    category: "",
    search: "",
    productType: {
      query: "",
      ka: "",
      en: "",
    },
    title: {
      ka: "",
      en: "",
    },
    sale: "",
  };

  const setLocationState = (
    args: Partial<LocationStateOptionalT>
  ): LocationStateT => ({
    category: args.category || locationStateDefaults.category,
    productType: args.productType || locationStateDefaults.productType,
    title: args.title || locationStateDefaults.title,
    search: args.search || locationStateDefaults.search,
    sale: args.sale || locationStateDefaults.sale,
  });

  const getLocationState = () => ({
    category: state?.category || locationStateDefaults.category,
    search: state?.search || locationStateDefaults.search,
    productType: state?.productType || locationStateDefaults.productType,
    title: state?.title || locationStateDefaults.title,
    sale: state?.sale || locationStateDefaults.sale,
  });

  return {
    setLocationState,
    getLocationState,
    locationStateDefaults,
  };
}
