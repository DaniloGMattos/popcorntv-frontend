import React from "react";
import { Container } from "./styles";

interface MovieBannerProps {
  imagePath: string;
  isDetails?: boolean;
}

export const MovieBanner: React.FC<MovieBannerProps> = ({
  imagePath,
  isDetails,
}: MovieBannerProps) => {
  return (
    <Container isDetails={isDetails}>
      <button>Assista agora</button>
      <img src={imagePath} alt='Movie banner' className='image' />
    </Container>
  );
};
