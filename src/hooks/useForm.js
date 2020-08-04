import { useState } from 'react';

function useForm(valoresInciais) {
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

  function clearForm() {
    setValores(valoresInciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
