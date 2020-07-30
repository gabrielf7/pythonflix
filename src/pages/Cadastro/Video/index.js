import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroVideo() {
    return(
      <PageDefault>
        <h1>Cadastrar Vídeo para PythonFlix</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    );
}