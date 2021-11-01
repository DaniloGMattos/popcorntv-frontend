import React, { useEffect, useState } from "react";
import { MovieBanner } from "../../components/MovieBanner";
import { MovieSelector } from "../../components/MovieSelector";

import api from "../../services/api";
import { Container, Title } from "./styles";
import { IMovie } from "../../utils/implementations/IMovie";

export function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [imagePath, setImagePath] = useState("");
  const [isDetails, setIsDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const { data } = await api.get("/movies");
      const firstImagePath = data[0].backdrop_path;
      setImagePath(`https://image.tmdb.org/t/p/original/${firstImagePath}`);
      setMovies(data);
    }

    loadMovies();
  }, []);
  function handleMovieSelection(movie: IMovie) {
    setIsDetails(true);
    setImagePath(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`);

    setSelectedMovie(movie);
  }
  function handleReturnToAllMovies() {
    setIsDetails(false);
  }
  return !isDetails ? (
    <>
      <MovieBanner imagePath={imagePath} />
      <Container>
        <section>
          <Title>Top Rated</Title>
          <div className='grid'>
            {movies.map((movie) => (
              <MovieSelector
                movie={movie}
                handleMovieSelection={handleMovieSelection}
                key={movie.id}
                imagePath={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
              ></MovieSelector>
            ))}
          </div>
        </section>
      </Container>
    </>
  ) : (
    <>
      <MovieBanner isDetails imagePath={imagePath} />
      <Container>
        <section className={isDetails ? "detailsSection" : ""}>
          <MovieSelector
            movie={selectedMovie}
            handleMovieSelection={handleMovieSelection}
            imagePath={selectedMovie.poster_path}
            title={selectedMovie.title}
            release_date={selectedMovie.release_date}
          ></MovieSelector>
          <div className='textContainer'>
            {" "}
            <h1>{selectedMovie.title}</h1> <h2>Sinopse & info</h2>{" "}
            <p>{selectedMovie.overview}</p>{" "}
          </div>
          <button
            onClick={() => {
              handleReturnToAllMovies();
            }}
          >
            Voltar
          </button>
        </section>
      </Container>
    </>
  );
}
