import styled from 'styled-components';

const Button = styled.button`
    background: linear-gradient(-7deg,  rgba(14,209,234,100) 25%, rgba(20,80,78,100) 45%);
    color: var(--white);
    border: inherit;
    border-left: 3px solid var(--pyellow);
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
    transition: .5s ease-in;

    &:hover, 
    &:focus {
      /* opacity: .57; */
      transition-delay: 5s;
      background: linear-gradient(7deg,  rgba(14,209,234,100) 25%, rgba(20,80,78,100) 45%);
    }
`;

export default Button;
