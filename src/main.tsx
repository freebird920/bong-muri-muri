// import reacrt
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import react-router
import { BrowserRouter, Route, Routes } from "react-router";

// import css
import "./index.css";

// import component
import NavbarComp from "./components/navbar/NavbarComp.tsx";
import route from "./route.tsx";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarComp></NavbarComp>
      <Routes>
        {route.map((element) => (
          <Route key={element.path} {...element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
