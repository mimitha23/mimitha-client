export interface NavDropdownT {
  _id: string;
  category: string;
  blocks: Array<NavDropdownBlockT>;
}

// PARTIALS
export interface NavDropdownBlockT {
  _id: string;
  title: NavDropdownBlockTitleT;
  routes: Array<NavRouteT>;
}

export interface NavDropdownBlockTitleT {
  ka: string;
  en: string;
}

export interface NavRouteT {
  _id: string;
  ka: string;
  en: string;
  query: string;
}

// API
export interface GetNavArgsT {
  category: string;
}
