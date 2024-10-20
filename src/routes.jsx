import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // Importing ErrorPage

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Set error element
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id", // URL parameter for movie ID
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
];

export default routes;









