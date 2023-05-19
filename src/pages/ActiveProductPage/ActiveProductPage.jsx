import { useScrollToTop } from "hooks/domBase";

import { Navigation } from "components";
import ActiveProduct from "components/ActiveProduct/ActiveProduct";

export default function EditorPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ActiveProduct />
    </>
  );
}
