import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe";
import AboutUs from "./components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <SearchRecipe />
            <RecipeCard />
          </>
        ),
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
