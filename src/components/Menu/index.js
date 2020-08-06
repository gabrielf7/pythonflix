import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PythonFlix Logo" />
      </Link>
      <Route>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo conteúdo
        </Button>
      </Route>
    </nav>
  );
}

export default Menu;
