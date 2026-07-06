import styled from "styled-components";

export const HomePage = styled.div`
    max-width: 1296px;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    margin-top: 50px;

    h2 {
        margin-top: 40px;
    }
`

export const ListaGames = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    justify-self: center;
    margin-bottom: 40px;
    padding-bottom: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

export const ListaGames2 = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    justify-self: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`