import styled from "styled-components";

export const Container = styled.main`
  margin: 0 4rem;
  .grid {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }
  .detailsSection {
    display: flex;
    margin-top: 5%;
    .textContainer {
      margin-top: 0.5rem;
      margin-left: 2rem;
      h1 {
        font-size: 64px;
        margin-bottom: 1rem;
        max-width: 600px;
      }
      h2 {
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 20px;
        max-width: 600px;
      }
    }
    button {
      background-color: transparent;
      border-color: #fff;
      color: #fff;
      height: 2.5rem;
      width: 5rem;
      border-radius: 10px;
      font-size: 20px;
      margin-top: 1rem;
    }
  }
`;
export const Title = styled.h1`
  margin-top: 1rem;
`;
