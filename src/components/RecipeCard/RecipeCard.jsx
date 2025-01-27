import { useState } from "react";
import { fetchRecipe } from "../../API/API";
import DOMPurify from "dompurify";

const RecipeCard = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRecipe("vegetarian,dessert");
      setRecipe(data.recipes[0]);
    } catch (error) {
      setError(error.message || "Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  const handleGetRecipe = () => {
    fetchRandomRecipe();
  };

  const cleanedSummary = recipe ? DOMPurify.sanitize(recipe.summary) : "";

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <button
        onClick={handleGetRecipe}
        className="bg-blue-500 hover:bg-blue-800 hover:text-slate-300 text-slate-100 px-4 py-2 rounded font-bold mb-4"
      >
        Generate Random Recipe
      </button>

      {loading && (
        <p className="animate-bounce text-slate-300 font-bold">Loading...</p>
      )}
      {error && <p className="text-slate-300 font-bold">Error: {error}</p>}
      {recipe && (
        <div className="border-2 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img className="w-full h-48" src={recipe.image} alt="Image here" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 truncate">{recipe.title}</h2>
            <p
              className="text-gray-700 text-sm line-clamp-5"
              dangerouslySetInnerHTML={{ __html: cleanedSummary }}
            />
          </div>

          <div className="px-6 pt-4 pb-2 space-x-1">
            {recipe.cheap && (
              <span
                title="Cheap and Affordable"
                className="inline-block bg-blue-100 border-2 border-slate-300 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                💰
              </span>
            )}

            {recipe.cookingMinutes < 10 && (
              <span
                title="Quick Meal"
                className="inline-block border-2 border-slate-300 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
              >
                ⌚
              </span>
            )}

            {recipe.dairyFree && (
              <span
                title="Dairy-free"
                className="inline-block bg-yellow-100 border-2 border-slate-300 text-cyan-400 text-sm px-3 py-1 rounded-full"
              >
                {recipe.dairyFree && "🥛"}
              </span>
            )}

            {recipe.glutenFree && (
              <span
                title="Gluten-free"
                className="inline-block border-slate-300 border-2 bg-yellow-100 text-orange-400 text-sm px-3 py-1 rounded-full"
              >
                🌾
              </span>
            )}

            {recipe.vegetarian && (
              <span
                title="Vegetarian"
                className="inline-block border-slate-300 border-2 bg-yellow-100 text-lime-500 text-sm px-3 py-1 rounded-full"
              >
                🌿
              </span>
            )}

            {recipe.veryHealthy && (
              <span
                title="Healthy"
                className="inline-block bg-yellow-100 border-2 border-slate-300 text-amber-800 text-sm px-3 py-1 rounded-full"
              >
                💪🏻
              </span>
            )}
          </div>

          <div className="px-6 py-4 flex flex-col justify-start">
            <a
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
              href={recipe.spoonacularSourceUrl}
              target="_blank"
              title="More info!"
            >
              View Recipe
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
