import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/python-logo-green64.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente desenvolvido por <a href="https://github.com/gabrielf7">J.G</a>, durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <a href="https://github.com/gabrielf7/pythonflix">
        <img src={LogoFooter} alt="Projeto do GitHub" />
      </a>
    </FooterBase>
  );
}

export default Footer;
