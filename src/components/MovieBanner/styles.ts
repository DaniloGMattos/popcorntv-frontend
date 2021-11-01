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
  transition: 0.2s;
  button {
    display: ${(props) => (props.isDetails ? `none` : `block`)};
    position: absolute;
    top: 80%;
    right: 72%;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight: bold;
    width: 21rem;
    height: 3.2rem;
    background-color: #fff;
    border: none;
    transition: 0.3s;
    &:hover {
      background-color: #e5e5e5;
    }
  }
  img {
    flex: 1;
    height: ${(props) => (props.isDetails ? `180%` : `100%`)};
  }
`;
