import React, { useEffect, useState } from "react";
import { MovieBanner } from "../../components/MovieBanner";
import { MovieSelector } from "../../components/MovieSelector";

import api from "../../services/api";
import { Container, Title } from "./styles";

interface Movie {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const { data } = await api.get("/movies");
      const firstImagePath = data[0].backdrop_path;
      setImagePath(`https://image.tmdb.org/t/p/original/${firstImagePath}`);
      setMovies(data);
    }

    loadMovies();
  }, []);
  return (
    <>
      <MovieBanner imagePath={imagePath} />
      <Container>
        <section>
          <Title>Sucessos</Title>
          <div className='grid'>
            {movies.map((movie) => (
              <MovieSelector
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
  );
}
