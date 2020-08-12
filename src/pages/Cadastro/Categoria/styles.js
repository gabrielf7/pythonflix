import styled from 'styled-components';

export const Lista = styled.div`
  margin-top: 20px;
  width: 50% 50%;
  background-color: var(--pygreeneasy);
  color: var(--white);
  border: 2px solid var(--pyprimary);
  box-sizing: border-box;
  cursor: pointer;
  font-style: normal;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  h2 {
    padding-left: 16px;
  }

  @media (max-width: 800px) {
    h2 {
      font-style: normal;
      font-size: 14px;
    }

    li {
      font-style: normal;
      font-size: 12px;
    }
  }
`;

export default Lista;
