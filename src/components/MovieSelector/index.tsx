import React from "react";
import { Container } from "./styles";

interface IMovieSelector {
  imagePath: string;
  title: string;
  release_date: Date;
}

export const MovieSelector: React.FC<IMovieSelector> = ({
  imagePath,
  title,
  release_date,
}: IMovieSelector) => {
  const date = new Date(release_date);
  return (
    <>
      <Container>
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
