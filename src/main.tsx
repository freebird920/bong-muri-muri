// import reacrt
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import react-router
import { BrowserRouter, Route, Routes } from "react-router";

// import css
import "./index.css";

// import component
import NavbarComp from "./components/navbar/NavbarComp.tsx";
import HomePage from "./app/page.tsx";
import AboutPage from "./app/about/page.tsx";
import DocPage from "./app/doc/page.tsx";
import DocPerceptronPage from "./app/doc/perceptron/page.tsx";
import BookReviewPage from "./app/book_review/page.tsx";
import DocLossFunctionPage from "./app/doc/loss_function/page.tsx";
import DocCrossEntropyPage from "./app/doc/cross_entropy/page.tsx";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route
          path="/book_review"
          element={<BookReviewPage></BookReviewPage>}
        ></Route>
        <Route path="/doc">
          <Route index element={<DocPage></DocPage>} />
          <Route
            path="perceptron"
            element={<DocPerceptronPage></DocPerceptronPage>}
          ></Route>
          <Route
            path="loss_function"
            element={<DocLossFunctionPage></DocLossFunctionPage>}
          ></Route>
          <Route
            path="cross_entropy"
            element={<DocCrossEntropyPage></DocCrossEntropyPage>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
