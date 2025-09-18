import { Routes, Route } from "react-router-dom";
import MoviesList from "./pages/Home.tsx";
import MovieDetails from "./pages/MovieDetails/index.tsx";
import CharacterDetails from "./pages/CharacterDetails.tsx";
import "./App.scss";
import NotFound from "./pages/NotFound.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { routes } from "./routes.ts";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path={`/${routes.movie}/:id`} element={<MovieDetails />} />
        <Route path={`/${routes.character}/:id`} element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
