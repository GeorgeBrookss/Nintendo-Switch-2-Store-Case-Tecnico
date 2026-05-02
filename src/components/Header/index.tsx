import * as S from "./styles";
import CartIcon from "../../assets/images/Icons/CartIcon.png"
type Props = {
  onToggleCart: () => void;
};

const Header = ({ onToggleCart }: Props) => {
  return (
    <S.HeaderContainer>
    <S.NavLink to="/">
      <h2>Switch 2 Store</h2>
    </S.NavLink>

      <S.Nav>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/categorias">Categorias</S.NavLink>
        <S.CartButton onClick={onToggleCart}>
          <img src={CartIcon} alt="Carrinho de Compras" />
        </S.CartButton>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;