import "./index.css";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen w-full">
        <RecipeCard />
      </div>
    </>
  );
}

export default App;
