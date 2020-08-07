import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

export const Main = styled.main`
  background-color: var(--pyblueblack);
  color: var(--white);
  flex: 1;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 16px;
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
