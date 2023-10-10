import { DollarIcon, EuroIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

export default function CurrencySwitch(props) {
  return (
    <Styled.CurrencySwitch>
      <button>
        <EuroIcon />
      </button>
      <button>
        <DollarIcon />
      </button>
    </Styled.CurrencySwitch>
  );
}
