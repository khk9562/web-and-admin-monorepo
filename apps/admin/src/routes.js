import React from "react";
import Main from "./views/pages/main/Main";
import Home from "./views/pages/home/Home";

const routes = [
  { path: "/", name: "Main", element: Main },
  { path: "/home", name: "Home", element: Home },
];

export default routes;
