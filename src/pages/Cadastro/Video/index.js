import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import { Back } from '../../../components/Back';
import Button from '../../../components/Button';

export default function CadastroVideo() {
  return (
    <PageDefault>
      <Back>
        <Button as={Link} to="/">
          Voltar
        </Button>
      </Back>
      <Main>
        <h2>Cadastrar Vídeo</h2>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </Main>
    </PageDefault>
  );
}
