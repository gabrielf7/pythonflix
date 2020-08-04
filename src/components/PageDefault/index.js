import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

export const Main = styled.main`
  background-color: var(--pyblackeasy);
  color: var(--white);
  flex: 1;
  padding-top: 30px;
  padding-left: 10%;
  padding-right: 10%;
  ${({ paddingAll }) => css`
     padding: ${paddingAll};
  `}
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
