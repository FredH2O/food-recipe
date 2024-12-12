import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe";

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header>
        <Header />
      </header>
      <div className="flex flex-1 flex-col justify-evenly items-center overflow-hidden">
        <SearchRecipe />
        <RecipeCard />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
