import * as S from "./styles";
import CartIcon from "../../../public/assets/images/Icons/CartIcon.png"
import LogoImg from "../../../public/assets/images/Icons/Nintendo_Switch_2_logo.svg.webp"
import { MainTitle, NavButton } from "./styles";
type Props = {
  onToggleCart: () => void;
};

const Header = ({ onToggleCart }: Props) => {
  return (
    <S.HeaderContainer>
    <S.NavLink to="/">
      <div style={{ display: "flex", alignItems: "center" }}>
        <S.Logo src={LogoImg} alt="Nintendo Switch 2 Store" />
        <MainTitle>Switch 2 Store</MainTitle>
      </div>
    </S.NavLink>

      <S.Nav>
        <S.NavLink to="/">
        <NavButton>        
        Home
        </NavButton>
        </S.NavLink>
        <S.NavLink to="/categorias">
        <NavButton>
        Categorias
        </NavButton>
        </S.NavLink>
        <S.CartButton onClick={onToggleCart}>
          <img src={CartIcon} alt="Carrinho de Compras" />
        </S.CartButton>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;