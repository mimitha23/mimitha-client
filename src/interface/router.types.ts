import React from "react";

type RouterT = {
  path: string;
  name: string;
  element: React.ReactNode;
  children: Array<RouterT>;
};

export type { RouterT };
