import { RouteProps } from "react-router";
import HomePage from "./app/page";
import TestPage from "./app/test/page";
import AboutPage from "./app/about/page";

const route: RouteProps[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/test", element: <TestPage /> },
];
export default route;
