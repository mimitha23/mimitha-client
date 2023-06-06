import { useScrollToTop } from "hooks/domBase/index";

import Gallery from "components/Gallery/Gallery";
import { Navigation, Footer } from "components/index";

export default function GalleryPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Gallery />
      <Footer />
    </>
  );
}
