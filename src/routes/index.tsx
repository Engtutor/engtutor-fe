import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export { AppRoutes };
