import { Navigation, Footer } from "components";
import GoesOnTutorial from "components/GoesOnTutorial/GoesOnTutorial";
import GoesOnTutorialProvider from "providers/GoesOnTutorialContext";

export default function GoesOnTutorialPage() {
  return (
    <>
      <Navigation />
      <GoesOnTutorialProvider>
        <GoesOnTutorial />
      </GoesOnTutorialProvider>
      <Footer />
    </>
  );
}
