import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      {/* <Link to="/">
        <img className="Logo" src={Logo} alt="PythonFlix Logo" />
      </Link>
      {Route !== '/cadastro/video' && (
        <Button as={Link} to="/cadastro/video">
          Novo vídeo
        </Button>
      )}
      {Route === '/cadastro/video' && (
        <Button as={Link} to="/cadastro/categoria">
          Novo Categoria
        </Button>
      )} */}
      <Link to="/">
        <img className="Logo" src={Logo} alt="PythonFlix Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
