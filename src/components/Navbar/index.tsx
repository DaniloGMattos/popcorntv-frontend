import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <nav className='container'>
        <ul className='navigation'>
          <li>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </li>
          <li>
            <Link to='/'>Filmes</Link>
          </li>
          <li>
            <Link to='/television'>Televisão</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
