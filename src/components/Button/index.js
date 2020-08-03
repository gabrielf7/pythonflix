import styled from 'styled-components';

const Button = styled.button`
    background-color: inherit;
    color: var(--primary);
    border: inherit;
    border-bottom: 1px solid var(--primary);
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
`;

export default Button;
