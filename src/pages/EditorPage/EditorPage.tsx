import { useScrollToTop } from "hooks/domBase";
import { Navigation, Footer } from "components";
import Editor from "components/Editor/Editor";
import EditorProver from "providers/EditorProvider";

const EditorPage: React.FC = () => {
  useScrollToTop();

  return (
    <EditorProver>
      <Navigation />
      <Editor />
      <Footer />
    </EditorProver>
  );
};

export default EditorPage;
