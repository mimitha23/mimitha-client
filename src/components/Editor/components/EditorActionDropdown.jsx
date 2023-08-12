import * as Styled from "./styles/EditorActionDropdown.styled";

export default function EditorActionDropdown({
  variantType,
  variants,
  setActiveDropdown,
  activeDropdown,
  name,
}) {
  return (
    <Styled.EditorActionDropdownContainer>
      <button
        onClick={() =>
          setActiveDropdown(variantType === activeDropdown ? "" : variantType)
        }
        className={`dropdown-trigger__btn ${
          variantType === activeDropdown ? "active-dropdown" : ""
        }`}
      >
        {name}
      </button>
      {variantType === activeDropdown && (
        <div className="dropdown-body">
          {variants.map((variant, i) => (
            <button key={variant._id}>
              <figure>
                <img
                  src={variant.icon}
                  alt={variant.description}
                  title={variant.description}
                />
              </figure>
            </button>
          ))}
        </div>
      )}
    </Styled.EditorActionDropdownContainer>
  );
}
