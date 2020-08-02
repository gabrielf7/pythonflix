import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import Iframe from './styles';
// import Voltar from '../../assets/back.svg';

export const Page404 = () => (
  <PageDefault>
    <div align="center">
      <h1>Error 404</h1>
      <h4>Esta página não existe ou ainda está em desenvolvimento.</h4>
      <Button as={Link} to="/">Volte para home</Button>
    </div>
    <Iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" scrolling="no" frameborder="no" />
  </PageDefault>
);
export default Page404;
