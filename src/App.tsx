import { Routes, Route } from "react-router-dom";
import MoviesList from "./pages/Home.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import CharacterDetails from "./pages/CharacterDetails.tsx";
import "./App.scss";
import NotFound from "./pages/NotFound.tsx";
import Sidebar from "./components/Sidebar.tsx";

const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;
const VITE_ROUTES_CHARACTER = import.meta.env.VITE_ROUTES_CHARACTER;

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path={`/${VITE_ROUTES_MOVIE}/:id`} element={<MovieDetails />} />
        <Route path={`/${VITE_ROUTES_CHARACTER}/:id`} element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
