import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Área para Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}