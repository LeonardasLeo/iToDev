import { useParams } from "react-router-dom";
import "../styles/pages/CharacterDetails.scss";
import { useGetRelatedFilms } from "../hooks/useGetRelatedFilms";
import { useGetCurrentCharacter } from "../hooks/useGetCurrentCharacter";
import { useEffect } from "react";
import MovieList from "../components/MovieList";
import LoadingSkeleton from "../components/LoadingSkeleton";

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const { getRelatedFilms, relatedFilms, moviesLoading, movieError } = useGetRelatedFilms();
  const { currentCharacter, charLoading, charError, getCurrentCharacter } =
    useGetCurrentCharacter();
  console.log(relatedFilms.length);

  useEffect(() => {
    if (!currentCharacter) {
      getCurrentCharacter(id);
    }
  }, [currentCharacter, getCurrentCharacter, id]);

  useEffect(() => {
    if (relatedFilms.length === 0) {
      getRelatedFilms();
    }
  }, [getRelatedFilms, relatedFilms.length]);

  if (charLoading || moviesLoading) return <LoadingSkeleton itemType="character" />;

  if (charError || !currentCharacter) return <div>{charError}</div>;
  if (movieError) return <div>{movieError}</div>;

  return (
    <div className="character-details-wrapper">
      <div className="character-container">
        <section className="character-image">
          <img src="/character.jpg" alt="character image" />
        </section>
        <section className="character-info">
          <h1>{currentCharacter.name}</h1>
          <p>
            <strong>Height:</strong> {currentCharacter.height}
          </p>
          <p>
            <strong>Mass:</strong> {currentCharacter.mass}
          </p>
          <p>
            <strong>Gender:</strong> {currentCharacter.gender}
          </p>
          <p>
            <strong>Hair color:</strong> {currentCharacter.hair_color}
          </p>
          <p>
            <strong>Skin color:</strong> {currentCharacter.skin_color}
          </p>
          <p>
            <strong>Eye color:</strong> {currentCharacter.eye_color}
          </p>
          <p>
            <strong>Birth year</strong> {currentCharacter.birth_year}
          </p>
        </section>
      </div>

      <MovieList />
    </div>
  );
};

export default CharacterDetails;
