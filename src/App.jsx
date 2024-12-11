import "./index.css";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header>
        <Header />
      </header>
      <div className="flex flex-1 justify-center items-center overflow-hidden">
        <RecipeCard />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
