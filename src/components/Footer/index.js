import React from 'react';
import { FooterBase } from './styles';
import LogoPythonFlix from '../../assets/Logo.png';
import LogoImersaoReact from '../LogoImersaoReact';

function Footer() {
  return (
    <FooterBase>
      <div className="center">
        <a href="https://github.com/gabrielf7/pythonflix">
          <img className="Logo" src={LogoPythonFlix} alt="Projeto do Python no GitHub" />
        </a>
        <p>
          Desenvolvido orgulhosamente por <a href="https://github.com/gabrielf7"> $JG,</a> durante a Imersão React da <a href="https://www.alura.com.br/"> Alura.</a>
        </p>
        <a href="https://www.alura.com.br/imersao-react"><LogoImersaoReact /></a>
      </div>
    </FooterBase>
  );
}

export default Footer;
