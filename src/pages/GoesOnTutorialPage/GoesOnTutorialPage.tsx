import { Navigation, Footer } from "components";
import GoesOnTutorial from "components/GoesOnTutorial/GoesOnTutorial";
import GoesOnTutorialProvider from "providers/GoesOnTutorialContext";

const GoesOnTutorialPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <GoesOnTutorialProvider>
        <GoesOnTutorial />
      </GoesOnTutorialProvider>
      <Footer />
    </>
  );
};

export default GoesOnTutorialPage;
