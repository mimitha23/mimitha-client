import { NavDropdownT } from "interface/DB/nav.types";
import { LoadingStatusT } from "interface/store/store.common";

type NavStateT = {
  status: LoadingStatusT;
  navDropdown: NavDropdownT;
};

export type { NavStateT };
