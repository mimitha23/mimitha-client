import { useScrollToTop } from "hooks/domBase/index";

import Gallery from "components/Gallery/Gallery";
import { Navigation, Footer } from "components/index";

const GalleryPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryPage;
