import { RouteProps } from "react-router";
import HomePage from "./app/page";
import TestPage from "./app/test/page";
import AboutPage from "./app/about/page";
import BookReviewPage from "./app/book_review/page";
import DocPage from "./app/doc/page";

const route: RouteProps[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/book_review", element: <BookReviewPage /> },
  { path: "/test", element: <TestPage /> },
  { path: "/doc", element: <DocPage /> },
];
export default route;
