import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import AboutUs from "./components/AboutUs/AboutUs";
import SurveyForm from "./components/SurveyForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <RecipeCard />
          </>
        ),
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "survey",
        element: <SurveyForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
