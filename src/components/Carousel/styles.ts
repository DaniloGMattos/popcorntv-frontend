import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  .navigation {
    display: flex;
    align-items: center;
    li:not(:first-child) {
      font-size: 1.5rem;
      color: var(--white);

      transition: color 0.2s;
      &:hover {
        color: var(--gray-300);
      }
    }
    li:not(:last-child) {
      margin-right: 5rem;
    }
  }
`;
