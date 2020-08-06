import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import { Back } from '../../../components/Back';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const { handleChange, valores } = useForm({

  });

  return (
    <PageDefault>
      <Back>
        <Button as={Link} to="/">
          Voltar
        </Button>

        <Button as={Link} to="/cadastro/categoria">
          Categoria
        </Button>
      </Back>
      <Main>
        <h1>$_Cadastro de Vídeo</h1>

        {/* <form>
          <FormField
            label="Título do vídeo"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />
        </form>
        <Button type="submit">
          Cadastrar
        </Button> */}
      </Main>
    </PageDefault>
  );
}

export default CadastroVideo;
