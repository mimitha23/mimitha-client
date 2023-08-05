import { useLocation } from "react-router-dom";

// EXAMPLE OF LOCATION OBJECT
// {
//  category :"men", // must be always key of main nav routes e.g men,women etc.
//  productType: { // must be obejct {query:"query str", label:{ka:"ქართული ქეფშენი", en:"english caption"}} label: "label",
//    query : "cargo-trousers",
//    ka:"კარგო შარვალი"
//    en:"cargo trousers"
// },

export default function useLocationState() {
  const { state } = useLocation();

  function setLocationState({ category, productType, title, search, sale }) {
    const locationStateDefaults = getLocationStateDefaults();

    return {
      category: category || locationStateDefaults.category,
      productType: productType || locationStateDefaults.productType,
      title: title || locationStateDefaults.title,
      search: search || locationStateDefaults.search,
      sale: sale || locationStateDefaults.sale,
    };
  }

  function getLocationState() {
    return {
      category: state?.category || "",
      search: state?.search || "",
      productType: state?.productType || {
        query: "",
        ka: "",
        en: "",
      },
      title: state?.title || {
        ka: "",
        en: "",
      },
      sale: state?.sale || "",
    };
  }

  function getLocationStateDefaults() {
    return {
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
  }

  return {
    setLocationState,
    getLocationState,
    getLocationStateDefaults,
    state,
  };
}
