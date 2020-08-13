import styled from 'styled-components';

const ButtonMenu = styled.button`
  background: linear-gradient(190deg, rgba(22,72,75,100) 35%, rgba(14,209,234,100) 100%);
  color: var(--white);
  border: inherit;
  border-bottom: 3px solid var(--pyellow);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  transition: opacity .2s ease-in;

    &:hover, 
    &:focus {
      opacity: .77;
      border-top: 2px solid var(--pyellow);
      border-bottom: none;
    }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(--white);
    background: var(--pyprimary);
    border-radius: 0;
    border: 0;
    text-align: center;
    transition: opacity .3s;
    
    &:hover, 
    &:focus {
      opacity: .77;
    }
  }
`;

export default ButtonMenu;
