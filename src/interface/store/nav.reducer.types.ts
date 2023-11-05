import { NavDropdownT } from "interface/DB/nav.types";
import { LoadingStatusT } from "interface/store/store.common";

export interface NavStateT {
  status: LoadingStatusT;
  navDropdown: NavDropdownT;
}
