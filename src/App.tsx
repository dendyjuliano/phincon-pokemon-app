import React from "react";
import Home from "./module/Home/container";
import PokemonDetail from "./module/PokemonDetail/container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-pokemon",
      element: <Home />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
