import { DollarIcon, EuroIcon } from "components/Layouts/Icons";

export default function CurrencySwitch(props) {
  return (
    <div className="valute-switch__box">
      <button>
        <EuroIcon />
      </button>
      <button>
        <DollarIcon />
      </button>
    </div>
  );
}
