import styled from 'styled-components';

export const Loading = styled.div`
  text-align: center;
  min-width: 150px;
  padding-top: 50px;
  padding-right: 15%;
  padding-left: 15%;

  @media (max-width: 600px) {
    text-align: center;
    min-width: 150px;
    padding-top: 50px;

    img {
      width: 187px;
      height: 110px;
    }
  }
`;

export default Loading;
