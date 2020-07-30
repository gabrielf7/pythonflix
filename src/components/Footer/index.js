import React from 'react';
import { FooterBase } from './styles';
import LogoPythonFlix from '../../assets/Logo.png';
import LogoImersaoReact from '../LogoImersaoReact';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/gabrielf7/pythonflix">
        <img className="Logo" src={LogoPythonFlix} alt="Projeto do Python no GitHub" />
      </a>
      <p>
        Orgulhosamente desenvolvido por <a href="https://github.com/gabrielf7">J.G</a>, durante a
        {' '}
        <a href="https://www.alura.com.br/">
          <LogoImersaoReact />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
