import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilterDropdown } from "store/selectors/filter.selectors";
import { filterActions } from "store/reducers/filter.reducer";

export default function useFilter() {
  const dispatch = useDispatch();

  const activeFilterDropdown = useSelector(selectActiveFilterDropdown);

  function activateFilter({ filterType }) {
    dispatch(filterActions.setActiveFilter({ filterType }));
  }

  return { activeFilterDropdown, activateFilter };
}
