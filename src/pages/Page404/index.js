import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import StylesPage404 from './styles';

export const Page404 = () => (
  <PageDefault>
    <StylesPage404>
      <div align="center">
        <h1>Error 404</h1>
        <h4>Esta página não existe ou ainda está em desenvolvimento.</h4>
        <Button as={Link} to="/">Volte para home</Button>
        <p>Ou</p>
        <h3>Acesse a Live do <strong>MarcoBruno na Twitch</strong></h3>
        <Button as="a" href="https://www.twitch.tv/marcobrunodev">Acesse aqui</Button>
      </div>

    </StylesPage404>
    {/* <Iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" scrolling="no" frameborder="no" /> */}
  </PageDefault>
);
export default Page404;
