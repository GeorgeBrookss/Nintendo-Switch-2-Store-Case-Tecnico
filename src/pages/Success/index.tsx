import { Link } from "react-router-dom"
import * as S from "./styles"
import SuccessIcon from "../../assets/images/Icons/SuccessImg.webp"

const Success = () => {
  return (
    <S.Overlay>
      <S.Content>
        <S.Icon> <img src={SuccessIcon} alt="Personagem Link confirmando compra com joinha" /> </S.Icon>
        
        <S.Title>PEDIDO REALIZADO COM SUCESSO!</S.Title>

        <S.Message>
          Parabéns! Sua reserva para o <strong>Nintendo Switch 2</strong> foi registrada em nossa base de dados fictícia.
        </S.Message>

        <S.WarningBox>
          <h2>AVISO IMPORTANTE!</h2>
          <p>
            Esta é uma <strong>loja de demonstração</strong>. <br/>
            Não houve cobrança real no seu cartão e nenhum produto será enviado. <br/>
          </p>
        </S.WarningBox>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.HomeButton>
            Voltar para a Loja
          </S.HomeButton>
        </Link>
      </S.Content>
    </S.Overlay>
  )
}

export default Success