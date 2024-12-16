import axios from "axios";

const apiKey = import.meta.env.VITE_FOOD_API_KEY;

const apiClient = axios.create({
  baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
});

export const fetchRecipe = async (tags = "", number = 1) => {
  try {
    const response = await apiClient.get("/recipes/random", {
      params: { tags, number },
    });
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching recipe!!", error);
    throw error.response?.data || new Error("Failed to fetch data.");
  }
};
