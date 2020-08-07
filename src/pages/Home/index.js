import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories';
import PageDefault from '../../components/PageDefault';
import Carregando from '../../assets/external.gif';
import Menu from '../../components/Menu';
import ButtonMenu from '../../components/Button/indexMenu';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      <Menu>
        <ButtonMenu as={Link} to="/cadastro/video">
          Novo contéudo
        </ButtonMenu>
      </Menu>
      {dadosIniciais.length === 0 && (
        <div style={{ textAlign: 'center', margin: '10%' }}>
          <img src={Carregando} alt="loading" />
        </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Com o crescimento do Data Science e Machine Learning, cada vez mais bibliotecas são escritas em Python, aumentando a adoção desta linguagem que nasceu no século passado. Mas, o que é Python e quais os seus usos? O Gui Silveira explica neste Hipsters.tube!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
