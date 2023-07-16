import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilterDropdown } from "store/selectors/filterSelectors";
import { filterActions } from "store/reducers/filterReducer";

export default function useFilter() {
  const dispatch = useDispatch();

  const activeFilterDropdown = useSelector(selectActiveFilterDropdown);

  function activateFilter({ filterType }) {
    dispatch(filterActions.setActiveFilter({ filterType }));
  }

  return { activeFilterDropdown, activateFilter };
}
