import type { Product } from "../../types/Product";
import * as S from "./styles";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <S.CardContainer>
      <S.ProductImage src={product.image} alt={product.title} />

      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>

      {product.sale && <S.SaleBadge>Promoção</S.SaleBadge>}

      <S.DetailsLink to={`/produto/${product.id}`}>
        <S.DetailsButton>Ver detalhes</S.DetailsButton>
      </S.DetailsLink>
    </S.CardContainer>
  );
};

export default ProductCard;