import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

export const Page404 = () => (
  <PageDefault>
    <div align="center">
      <h1>Error 404</h1>
      <h4>Esta página não existe ou ainda está em desenvolvimento.</h4>
      <Button as={Link} to="/">Volte para home</Button>
    </div>
    <div align="center">
      <p>Ou</p>
      <h3>Acesse a Live do <strong>MarcoBruno na Twitch</strong></h3>
      <Button as="a" href="https://www.twitch.tv/marcobrunodev">Acesse aqui</Button>
    </div>
    {/* <Iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" scrolling="no" frameborder="no" /> */}
  </PageDefault>
);
export default Page404;
