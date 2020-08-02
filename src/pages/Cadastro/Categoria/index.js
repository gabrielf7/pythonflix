import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresInciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [valores, setValores] = useState(valoresInciais);

  function setValor(chave, valor) {
    // chave: nome, descricao, cor, ...
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Ma Oi..oi..oi Brazil');
    const URL_TOP = 'http://localhost:8080/categorias';

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
      <Button as={Link} to="/">
        Ir para home
      </Button>
      <h2>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h2>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresInciais);
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
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}
