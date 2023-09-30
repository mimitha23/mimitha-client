import { useScrollToTop } from "hooks/domBase";
import { Navigation, Footer } from "components";
import Editor from "components/Editor/Editor";
import EditorProver from "providers/EditorProvider";

export default function EditorPage() {
  useScrollToTop();

  return (
    <EditorProver>
      <Navigation />
      <Editor />
      <Footer />
    </EditorProver>
  );
}
