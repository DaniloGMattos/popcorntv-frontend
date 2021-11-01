import React from "react";
import { IMovie } from "../../utils/implementations/IMovie";
import { Container } from "./styles";

interface IMovieSelector {
  imagePath: string;
  title: string;
  release_date: Date;
  handleMovieSelection(movie: IMovie): void;
  movie: IMovie;
}

export const MovieSelector: React.FC<IMovieSelector> = ({
  imagePath,
  title,
  release_date,
  handleMovieSelection,
  movie,
}: IMovieSelector) => {
  const date = new Date(release_date);
  return (
    <>
      <Container onClick={() => handleMovieSelection(movie)}>
        <div
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${imagePath}")`,
          }}
        ></div>
        <span className='title'>{title}</span>
        <span>{date.getFullYear()}</span>
      </Container>
    </>
  );
};
