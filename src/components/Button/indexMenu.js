import styled from 'styled-components';

const ButtonMenu = styled.button`
  background-color: inherit;
  color: var(--pyprimary);
  border: inherit;
  border-bottom: 1px solid var(--pyprimary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .5s ease-in;

    &:hover, 
    &:focus {
      opacity: .50;
      border-top: 2px solid var(--white);
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
      opacity: .85;
    }
  }
`;

export default ButtonMenu;
