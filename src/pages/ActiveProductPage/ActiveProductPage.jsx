import { useScrollToTop } from "hooks/domBase";

import { Navigation, Footer } from "components/index";
import ActiveProduct from "components/ActiveProduct/ActiveProduct";

export default function EditorPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ActiveProduct />
      <Footer />
    </>
  );
}
