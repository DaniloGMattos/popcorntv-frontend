import React from "react";
import { Container } from "./styles";

interface MovieBannerProps {
  imagePath: string;
}

export const MovieBanner: React.FC<MovieBannerProps> = ({
  imagePath,
}: MovieBannerProps) => {
  return (
    <Container>
      <img src={imagePath} alt='Movie banner' className='image' />
    </Container>
  );
};
