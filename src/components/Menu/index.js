import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
// import Button from '../Button';

function Menu({
  children,
}) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PythonFlix Logo" />
      </Link>
      <div>
        {children}
      </div>
    </nav>
  );
}

export default Menu;
