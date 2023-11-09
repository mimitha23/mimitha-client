import { DollarIcon, EuroIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/CurrencySwitch.styled";

const CurrencySwitch: React.FC = () => {
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
};

export default CurrencySwitch;
