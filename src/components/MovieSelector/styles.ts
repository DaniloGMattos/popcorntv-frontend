import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 12rem;

  div {
    height: 13rem;
    background-color: #fff;
    width: 11rem;
    border-radius: 10px;
    margin: 0.7rem 0;
    display: flex;
    background-position: center;
    background-size: cover;
    img {
      flex: 1;
    }
  }
  .title {
    font-weight: bold;
  }
`;
