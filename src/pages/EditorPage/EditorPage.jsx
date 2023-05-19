import { useScrollToTop } from "hooks/domBase";

import { Navigation } from "components";
import Editor from "components/Editor/Editor";

function EditorPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Editor />
    </>
  );
}

export default EditorPage;
