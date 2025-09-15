import { Routes, Route, Link } from "react-router-dom";
import MoviesList from "./pages/Home.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import CharacterDetails from "./pages/CharacterDetails.tsx";
import "./App.scss";
import NotFound from "./pages/NotFound.tsx";

const VITE_ROUTES_MOVIE = import.meta.env.VITE_ROUTES_MOVIE;
const VITE_ROUTES_CHARACTER = import.meta.env.VITE_ROUTES_CHARACTER;

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">
          <Link to='/'>
            <h1>iToDev</h1>
          </Link>
        </div>
        <div className="menu">
          <Link to='/'>Home</Link>
          <a href="">Categories</a>
          <a href="">Trending</a>
          <a href="">Saved</a>
          <a href="">Playlist</a>
        </div>
        <div className="profile">
          <a href="">Settings</a>
          <a href="">Profile</a>
        </div>
      </div>
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path={`/${VITE_ROUTES_MOVIE}/:id`} element={<MovieDetails />} />
        <Route
          path={`/${VITE_ROUTES_CHARACTER}/:id`}
          element={<CharacterDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
