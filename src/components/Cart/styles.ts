import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CartOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? "0" : "-350px")};
    width: 320px;
    height: 100vh;
    background: ${theme.colors.secondary};
    backdrop-filter: blur(10px);
    color: ${theme.colors.white};
    padding: 20px;
    overflow-y: auto;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    box-shadow: -5px 0 15px ${theme.colors.secondary};
    border-left: 1px solid ${theme.colors.text2};
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

        h2 {
            margin: 0;
            font-size: 1.5rem;
        }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 1.2rem;
    transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }
`;

export const ItemContainer = styled.div`
    border-bottom: 1px solid ${theme.colors.text};
    padding-bottom: 15px;
    margin-bottom: 15px;

    p {
        margin: 0 0 8px 0;
}
`;

    export const ItemControls = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;

        button {
            height: 35px;
            width: 35px;
            font-size: 20px;
            font-weight: bold;
            color: ${theme.colors.white};
            background-color: red;
        }

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 4px;
}

    span {
        min-width: 20px;
        text-align: center;
}

    p {
        margin-left: auto;
        font-size: 0.9rem;
        font-weight: bold;
}
`;

export const CheckoutForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.text};
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 0.9rem;
    outline: none;

        &:focus {
            border-color: ${(props) => props.theme.colors?.primary || `${theme.colors.primary}`};
        }
`;

export const CartFooter = styled.div`
    margin-top: 20px;
    border-top: 1px solid ${theme.colors.text};
    padding-top: 15px;

        h3 {
            margin-bottom: 15px;
        }
`;

export const ActionButton = styled.button<{ $variant?: "secondary" }>`
    width: 100%;
    padding: 12px;
    background: ${(props) =>
        props.$variant === "secondary" ? `${theme.colors.text}` : props.theme.colors?.primary || `${theme.colors.primary}`};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:hover:not(:disabled) {
            filter: brightness(1.1);
        }
`;