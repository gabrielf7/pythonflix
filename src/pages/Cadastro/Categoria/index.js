import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Back } from '../../../components/Back';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const valoresInciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valoresInciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://pythonflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Curso de FrontEnd',
    //       cor: '#00ec1c',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Curso de BackEnd',
    //       cor: '#00ec1c',
    //     },
    //   ]),
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <Back>
        <Button as={Link} to="/cadastro/video">
          Voltar
        </Button>
      </Back>
      <Main>
        <h1>
          Cadastro de Categoria:
          { ' ' }
          {valores.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            valores,
          ]);

          clearForm();
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            value={valores.nome}
            name="nome"
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            value={valores.descricao}
            name="descricao"
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            value={valores.cor}
            name="cor"
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </Main>
    </PageDefault>
  );
}
