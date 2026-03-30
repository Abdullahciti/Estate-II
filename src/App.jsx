import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Properties from "./routes/properties/Properties";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import AboutPage from "./routes/about/AboutPage";
import ErrorPage from "./routes/errorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
