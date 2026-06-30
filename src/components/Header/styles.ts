import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 16px 32px;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    margin: 0 auto;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid red;

    @media (max-width: 767px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 12px;
        gap: 22px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
`;

export const CartButton = styled.button`
    background: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: transform 0.2s;

    img{
        max-width: 35px;
        max-height: 30px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const Logo = styled.img`
    max-width: 100px;
    max-height: 50px;
    border-radius: 10px;
    margin-right: 10px;

    @media (max-width: 767px) {
        max-width: 20px;
        border-radius: 3px;

    }
    @media (max-width: 500px) {
        font-size: 12px;
        gap: 22px;
    }
`;

export const MainTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.primary};

    &:hover {
        color: ${theme.colors.secondary};
    }   

    @media (max-width: 767px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
        gap: 22px;
    }
    @media (max-width: 374px) {
        width: 40px;
        gap: 22px;
    }
`;

export const NavButton = styled.button`
    font-size: 15px;
    color: ${theme.colors.primary};
    background: transparent;
    border: none;
    
    &:hover {
        color: ${theme.colors.secondary};
        border-bottom: 2px solid ${theme.colors.secondary};   
    }

`
