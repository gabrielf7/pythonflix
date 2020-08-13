import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

export const Main = styled.main`
  background-color: var(--pysecondary);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 16px;

  ${({ paddingAll }) => css`
     padding: ${paddingAll};
  `}

  @media (max-width: 800px) {
    form h1 {
      font-size: 29px;
    }
  }
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
