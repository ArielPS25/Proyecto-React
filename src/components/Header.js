import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Blogeando con Ñandú</h1>
      <nav>
        <Link to="/">Menú/ </Link>
        <Link to="/create">Crear entrada/ </Link>
        <Link to="/edit-posts"> Editar entrada</Link>
      </nav>
    </header>
  );
};

export default Header;
