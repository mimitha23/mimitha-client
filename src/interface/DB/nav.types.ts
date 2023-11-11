type NavDropdownT = {
  _id: string;
  category: string;
  blocks: Array<NavDropdownBlockT>;
};

// PARTIALS
type NavDropdownBlockT = {
  _id: string;
  title: NavDropdownBlockTitleT;
  routes: Array<NavRouteT>;
};

type NavDropdownBlockTitleT = {
  ka: string;
  en: string;
};

type NavRouteT = {
  _id: string;
  ka: string;
  en: string;
  query: string;
};

// API
type GetNavArgsT = {
  category: string;
};

export type { NavDropdownT, GetNavArgsT };
