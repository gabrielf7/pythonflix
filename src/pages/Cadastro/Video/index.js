import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import Menu from '../../../components/Menu';
import { Back } from '../../../components/Back';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import ButtonMenu from '../../../components/Button/indexMenu';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

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
          // eslint-disable-next-line no-alert
          // alert('Essa ação está sendo salva.');

          history.push('/');
        }}
        >
          <FormField
            label="Título do vídeo:"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Link: https://www.youtube.com/watch?v=uOgDa1rlqjE"
            name="url"
            value={valores.url}
            onChange={handleChange}
          />

          <FormField
            label="Escolha a categoria:"
            name="url"
            value={valores.categoria}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
      </Main>
    </PageDefault>
  );
}

export default CadastroVideo;
