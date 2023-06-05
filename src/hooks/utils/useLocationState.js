import { useLocation } from "react-router-dom";

// EXAMPLE OF LOCATION OBJECT
// {
//  search_for :"men", // must be always key of main nav routes e.g men,women etc.
//  query: { // must be obejct {query:"query str", label:{ka:"ქართული ქეფშენი", en:"english caption"}} label: "label",
//    query : "cargo-trousers",
//    label : {
//      ka:"კარგო შარვალი"
//      en:"cargo trousers"
//    },
// },

export default function useLocationState() {
  const { state } = useLocation();

  function setLocationState({ search_for, query, queryLabel }) {
    return {
      search_for: search_for || "",
      query: {
        query: query || "",
        label: queryLabel || null,
      },
    };
  }

  function getLocationState() {
    return {
      search_for: state?.search_for || "",
      query: {
        query: state?.query?.query || "",
        label: state?.query?.label || null,
      },
    };
  }

  return { setLocationState, getLocationState };
}
