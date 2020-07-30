import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria(){
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Nome da Categoria:')

    console.log('[nomeDaCategoria]', nomeDaCategoria);

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input
                       type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}