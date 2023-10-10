import { v4 as uuid } from "uuid";
import * as Styled from "./styles/DropdownBody.styled";

export default function DropdownBody({
  list,
  onSelect,
  captionKey,
  activeList,
}) {
  return (
    <Styled.DropdownBody className="filter-dropdown__body">
      {list?.map((item) => (
        <li
          key={uuid()}
          className={`filter-dropdown__list-item ${
            activeList.some((activeItem) => activeItem.ka === item.ka)
              ? "active"
              : ""
          }`}
        >
          <button onClick={() => onSelect(item)}>{item[captionKey]}</button>
        </li>
      ))}
    </Styled.DropdownBody>
  );
}
