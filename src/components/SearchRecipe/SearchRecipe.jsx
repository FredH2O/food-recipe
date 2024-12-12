const SearchRecipe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 flex flex-col items-center text-center bg-gray-100 rounded shadow"
    >
      <label htmlFor="search" className="mb-2 text-lg font-bold text-gray-600">
        Enter Recipe
      </label>

      <input
        name="search"
        type="text"
        id="search"
        placeholder="Type a recipe name..."
        className="p-2 w-full max-w-md rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <button className="bg-green-400 text-white rounded w-fit p-2 m-1">
        Search
      </button>
    </form>
  );
};

export default SearchRecipe;
