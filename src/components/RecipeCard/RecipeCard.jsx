const RecipeCard = () => {
  return (
    <div className="border-2 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48" src="" alt="Image here" />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 truncate">Recipe Here</h2>
        <p className="text-gray-700 text-sm line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa
          alias a eaque vitae qui autem saepe aut cupiditate amet consectetur
          modi labore quisquam provident voluptatem aliquid officiis, repellat
          animi!
        </p>
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
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold">
          View Recipe
        </button>
        <span className="text-gray-600 text-sm"> ⭐⭐⭐⭐</span>
      </div>
    </div>
  );
};
export default RecipeCard;
