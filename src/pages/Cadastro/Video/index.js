import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault, { Main } from '../../../components/PageDefault';
import { Back } from '../../../components/Back';
import Button from '../../../components/Button';
// import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

export default function CadastroVideo() {
  const { handleChange, valores } = useForm();

  return (
    <PageDefault>
      <Back>
        <Button as={Link} to="/">
          Voltar
        </Button>
      </Back>
      <Main>
        <h2>Cadastrar Vídeo</h2>

        {/* <form>
          <FormField
            label="Título do vídeo"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />
        </form> */}

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </Main>
    </PageDefault>
  );
}
