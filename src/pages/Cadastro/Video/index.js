import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import Menu from '../../../components/Menu';
import { Back } from '../../../components/Back';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import ButtonMenu from '../../../components/Button/indexMenu';
import videosRespository from '../../../repositories/videos';
import categoriasRespository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  // const errors = {
  //   titulo: 'Por favor, insira no máximo 25 caracteres',
  //   url: 'Por favor, insira de acordo com exemplo acima',
  //   categoria: 'Por favor, insira uma categoria existente',
  // };

  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRespository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Menu>
        <ButtonMenu as={Link} to="/cadastro/categoria">
          Nova categoria
        </ButtonMenu>
      </Menu>
      <Back>
        <Button as={Link} to="/">
          Ir para home
        </Button>
      </Back>
      <Main>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          // const categoriaEscolhida = categorias.find((categoria) => {
          //   return categoria.titulo === valores.categoria;
          // });
          // const categoriaEscolhida = categorias.find((categoria) => (
          //   categoria.titulo === valores.categoria
          // ));

          videosRespository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: 'categoriaEscolhida.id',
          })
            .then(() => {
              // eslint-disable-next-line no-console
              console.log('Cadastrado com sucesso!!!');
              history.push('/');
            });
        }}
        >
          <div>
            <FormField
              label="Título do vídeo:"
              name="titulo"
              placeholder="Insira o título do vídeo"
              value={valores.titulo}
              onChange={handleChange}
            />

            {/* {errors.titulo && <span>{errors.titulo}</span>} */}
          </div>

          <div>
            <FormField
              placeholder="https://www.youtube.com/watch?v=uOgDa1rlqjE"
              label="Link:"
              name="url"
              value={valores.url}
              onChange={handleChange}
            />

            {/* {errors.url && <span>{errors.url}</span>} */}
          </div>

          <div>
            <FormField
              label="Categoria:"
              name="categoria"
              placeholder="Digite o nome da categoria"
              value={valores.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

            {/* {errors.categoria && <span>{errors.categoria}</span>} */}
          </div>

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
      </Main>
    </PageDefault>
  );
}

export default CadastroVideo;
