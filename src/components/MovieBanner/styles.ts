import styled from "styled-components";
interface ContainerProps {
  isDetails?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.isDetails ? `33vh` : `50vh`)};
  background-color: #fff;
  border-radius: ${(props) => (props.isDetails ? `0 0 80px 80px` : `0`)};
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  position: relative;
  transition: 0.3s;

  h1 {
    display: ${(props) => (props.isDetails ? `none` : `block`)};
    position: absolute;
    top: 25%;
    right: 74%;
    max-width: 20rem;
    font-size: 3rem;
    z-index: 9999;
  }
  button {
    display: ${(props) => (props.isDetails ? `none` : `block`)};
    position: absolute;
    top: 80%;
    right: 72%;
    border-radius: 10px;

    width: 21rem;
    height: 3.2rem;
    background-color: #fff;
    border: none;
    transition: 0.3s;
    z-index: 9999;
    .buttonContent {
      display: flex;
      width: inherit;
      height: inherit;
      justify-content: center;
      align-items: center;
      padding-right: 4rem;
      .buttonIcon {
        margin-right: 3rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    &:hover {
      background-color: #e5e5e5;
    }
  }
  .image {
    flex: 1;
    filter: ${(props) => (props.isDetails ? `none` : `brightness(70%)`)};
    height: ${(props) => (props.isDetails ? `180%` : `100%`)};
  }
`;
