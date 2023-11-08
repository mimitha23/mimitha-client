import { v4 as uuid } from "uuid";

import { useTranslationContext } from "providers/globals/I18nextProvider";

import * as Styled from "./styles/DropdownBody.styled";

import {
  ActiveFilterDropdownT,
  FilterItemT,
} from "interface/store/filter.reducer.types";

interface DropdownBodyT {
  list: Array<FilterItemT>;
  dropdownType: ActiveFilterDropdownT;
  selectedQueries: Array<string>;
  onSelect: (key: ActiveFilterDropdownT, value: FilterItemT) => void;
}

const DropdownBody: React.FC<DropdownBodyT> = ({
  list,
  onSelect,
  dropdownType,
  selectedQueries,
}) => {
  const { currentLocale } = useTranslationContext();

  const onSelectOption = (item: FilterItemT) => onSelect(dropdownType, item);

  return (
    <Styled.DropdownBody className="filter-dropdown__body">
      {list?.map((item) => (
        <li
          key={uuid()}
          className={`filter-dropdown__list-item ${
            selectedQueries.some((query) => query === item.query)
              ? "active"
              : ""
          }`}
        >
          <button onClick={() => onSelectOption(item)}>
            {item[currentLocale]}
          </button>
        </li>
      ))}
    </Styled.DropdownBody>
  );
};

export default DropdownBody;
