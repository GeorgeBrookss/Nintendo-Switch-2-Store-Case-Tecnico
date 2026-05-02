import styled from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: ${(props) => props.theme.fonts.bold};
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`