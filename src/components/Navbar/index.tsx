import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <ul className='navigation'>
        <li>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </li>
        <li>
          <Link to='/'>Movies</Link>
        </li>
        <li>
          <Link to='/television'>Television</Link>
        </li>
      </ul>
    </Container>
  );
};
