import React from "react";

export interface RouterT {
  path: string;
  name: string;
  element: React.ReactNode;
  children: Array<RouterT>;
}
