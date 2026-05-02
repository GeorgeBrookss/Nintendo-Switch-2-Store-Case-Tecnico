import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import type { Category, Product } from "../../types/Product";
import ProductCard from "../../components/ProductCard";
import * as S from "./styles";

const categorias: Category[] = [
  "Aventura",
  "Corrida",
  "RPG",
  "SCIFI",
  "Esporte",
  "Festa",
];

const Categorias = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <S.Container>
      <S.PageTitle>Categorias</S.PageTitle>

      {categorias.map((cat) => {
        const filtered = products.filter((p) => p.category === cat);

        if (filtered.length === 0) return null;

        return (
          <S.CategorySection key={cat}>

            <S.CategoryTitle>{cat}</S.CategoryTitle>

            <S.ProductsContainer>

              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </S.ProductsContainer>
          </S.CategorySection>
        );
      })}
    </S.Container>
  );
};

export default Categorias;