import { useScrollToTop } from "hooks/domBase";
import { Navigation, Footer } from "components";
import Editor from "components/Editor/Editor";

export default function EditorPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Editor />
      <Footer />
    </>
  );
}
