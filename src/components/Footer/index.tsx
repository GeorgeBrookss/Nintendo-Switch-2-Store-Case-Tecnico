import * as S from "./styles"

const Footer = () => {
    return (
        <S.Footer>

            <S.Container>

                <S.Column>

                    <S.Title>
                        Nintendo Switch 2 Store
                    </S.Title>

                    <S.Text>
                        Projeto desenvolvido para portfólio.
                    </S.Text>

                </S.Column>

                <S.Column>

                    <S.SubTitle>
                        Navegação
                    </S.SubTitle>

                    <S.Link href="/">
                        Início
                    </S.Link>

                    <S.Link href="/categorias">
                        Categorias
                    </S.Link>

                </S.Column>

                <S.Column>

                    <S.SubTitle>
                        Tecnologias
                    </S.SubTitle>

                    <S.Text>React</S.Text>

                    <S.Text>TypeScript</S.Text>

                    <S.Text>Styled Components</S.Text>

                    <S.Text>JSON Server</S.Text>

                </S.Column>

            </S.Container>

            <S.Copyright>

                © 2026 George Brooks

            </S.Copyright>

        </S.Footer>
    )
}

export default Footer