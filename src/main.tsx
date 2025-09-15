import { StrictMode } from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SkeletonTheme baseColor="#3c3c3c" highlightColor="#4b4b4b">
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </SkeletonTheme>
);
