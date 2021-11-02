import React from "react";
import { IMovie } from "../../utils/implementations/IMovie";
import { Container } from "./styles";
import icon from "../../images/playArrow.svg";

interface MovieBannerProps {
  isDetails?: boolean;
  selectedMovie: IMovie;
  handleMovieSelection(movie: IMovie): void;
}

export const MovieBanner: React.FC<MovieBannerProps> = ({
  isDetails,
  selectedMovie,
  handleMovieSelection,
}: MovieBannerProps) => {
  return (
    <Container isDetails={isDetails}>
      <h1>{selectedMovie.title}</h1>
      <button onClick={() => handleMovieSelection(selectedMovie)}>
        <div className='buttonContent'>
          {" "}
          <img src={icon} alt='play icon' className='buttonIcon' />
          <span>Learn more</span>
        </div>
      </button>

      <img
        src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
        alt='Movie banner'
        className='image'
      />
    </Container>
  );
};
