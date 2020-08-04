import styled from 'styled-components';

export const Back = styled.div`
  background-color: var(--black);
  padding-top: 5px;
  margin-left: -5%;
  padding-right: 2%;

  @media (max-width: 800px) {
    flex: 1;
    padding-top: 30px;
    padding-left: 2%;
    padding-right: 30%;
  }
`;

export default Back;
