import styled from 'styled-components';

export const Loading = styled.div`
  text-align: center;
  width: inherit;
  min-width: 320px;
  padding-top: 50px;
  padding-right: 15%;
  padding-left: 15%;

  @media (max-width: 600px) {
    text-align: center;
    padding: 64px;
    padding-top: 25px;
  }
`;

export default Loading;
