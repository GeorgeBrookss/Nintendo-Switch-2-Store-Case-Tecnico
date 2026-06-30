import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Footer = styled.footer`
    margin-top:80px;
    background:#111;
    color:white;
`

export const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding:50px 20px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:40px;

    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`

export const Column = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`

export const Title = styled.h2`
font-size:24px;
`

export const SubTitle = styled.h3`
font-size:18px;
`

export const Text = styled.p`
line-height:1.6;
`

export const Link = styled.a`
color:white;
text-decoration:none;
transition:.3s;

&:hover{
    color: ${theme.colors.primary};
}
`

export const Copyright = styled.div`
padding:20px;
text-align:center;
background:#090909;
font-size:14px;
`