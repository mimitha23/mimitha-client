import "./landingPage.css";
import { CategoriesNavbar, SearchBar } from "../index";

export default function LandingPage(props) {
  return (
    <main className="landingPage">
      <div className="upperPanel">
        <CategoriesNavbar />
        <SearchBar />
      </div>
    </main>
  );
}
