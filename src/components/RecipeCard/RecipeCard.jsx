import { useEffect, useState } from "react";
import { fetchRecipe } from "../../API/API";
import DOMPurify from "dompurify";

const RecipeCard = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pickedRecipe = async () => {
      try {
        const data = await fetchRecipe("vegetarian,dessert");
        setRecipe(data.recipes[0]);
        console.log(data.recipes[0]);
      } catch (error) {
        setError(error.message || "Something went wrong..");
      } finally {
        setLoading(false);
      }
    };

    pickedRecipe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const cleanedSummary = DOMPurify.sanitize(recipe.summary);

  return (
    <div className="border-2 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48" src={recipe.image} alt="Image here" />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 truncate">{recipe.title}</h2>
        <p
          className="text-gray-700 text-sm line-clamp-5"
          dangerouslySetInnerHTML={{ __html: cleanedSummary }}
        />
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          Tag 1
        </span>
        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
          Tag 2
        </span>
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
          Tag 3
        </span>
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <a
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
          href={recipe.spoonacularSourceUrl}
          target="_blank"
        >
          View Recipe
        </a>

        <span className="text-gray-600 text-sm"> ⭐⭐⭐⭐</span>
      </div>
    </div>
  );
};
export default RecipeCard;
