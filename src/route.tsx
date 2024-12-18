import { RouteProps } from "react-router";
import HomePage from "./app/page";
import TestPage from "./app/test/page";

const route: RouteProps[] = [
  { path: "/", element: <HomePage /> },
  { path: "/test", element: <TestPage /> },
];
export default route;
