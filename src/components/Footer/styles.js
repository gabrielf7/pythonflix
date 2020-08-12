import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--pygreeneasy);
  border-top: 2px solid var(--pyellow);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 32px;
  }

  .Logo {
    max-width: 168px;
  }
`;

export default FooterBase;
