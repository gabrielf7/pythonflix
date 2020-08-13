import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Back } from '../../../components/Back';
import useForm from '../../../hooks/useForm';
import Menu from '../../../components/Menu';
import ButtonMenu from '../../../components/Button/indexMenu';
import Carregando from '../../../assets/snake.gif';
import { Lista } from './styles';
import { Loading } from '../../../components/Loading/styles-loading-v1';

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
      <Menu>
        <ButtonMenu as={Link} to="/cadastro/video">
          Novo vídeo
        </ButtonMenu>
      </Menu>
      <Back>
        <Button as={Link} to="/">
          Ir para home
        </Button>
      </Back>
      <Main>
        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              valores,
            ]);

            clearForm();
          }}
        >
          <h1>
            Cadastro de Categoria
          </h1>
          <FormField
            label="Nome da Categoria:"
            type="text"
            value={valores.nome}
            name="nome"
            placeholder="Insira um nome para categoria"
            onChange={handleChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            value={valores.descricao}
            name="descricao"
            placeholder="Insira uma descrição"
            onChange={handleChange}
          />

          <FormField
            label="Selecione a cor:"
            type="color"
            value={valores.cor}
            name="cor"
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Lista>
          <h2>Lista de Categoria</h2>
          {categorias.length === 0 && (
            <Loading>
              <img src={Carregando} alt="loading" />
              <p>Carregando...</p>
            </Loading>
          )}
          <ul>
            {categorias.map((categoria) => (
              <li key={`${categoria.titulo}`}>
                {categoria.titulo}
              </li>
            ))}
          </ul>
        </Lista>
      </Main>
    </PageDefault>
  );
}
