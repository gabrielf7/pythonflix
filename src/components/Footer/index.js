import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import LogoPythonFlix from '../../assets/Logo.png';
import LogoImersaoReact from '../LogoImersaoReact';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={LogoPythonFlix} alt="Projeto do Python no GitHub" />
      </Link>
      <p>
        Desenvolvido orgulhosamente por <a href="https://github.com/gabrielf7"> $JG,</a> durante a Imersão React da <a href="https://www.alura.com.br/"> Alura.</a>
      </p>
      <a href="https://www.alura.com.br/imersao-react"><LogoImersaoReact /></a>
    </FooterBase>
  );
}

export default Footer;
