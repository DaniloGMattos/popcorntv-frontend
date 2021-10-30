import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import "./styles.scss";
export const Navbar = () => {
  return (
    <>
      <nav className='container'>
        <ul className='navigation'>
          <li>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </li>
          <li>
            <Link to='/'>Series</Link>
          </li>
          <li>
            <Link to='/movies'>Filmes</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
