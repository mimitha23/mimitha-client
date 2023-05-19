import * as Styled from "./styles/EditorActionDropdown.styled";

function EditorActionDropdown({
  variantType,
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
          {[
            "/assets/icons/pocket.png",
            "/assets/icons/pocket.png",
            "/assets/icons/pocket.png",
          ].map((variant, i) => (
            <button key={`${variant}--${i}`}>
              <figure>
                <img src={variant} alt={variant} title={variant} />
              </figure>
            </button>
          ))}
        </div>
      )}
    </Styled.EditorActionDropdownContainer>
  );
}

export default EditorActionDropdown;
