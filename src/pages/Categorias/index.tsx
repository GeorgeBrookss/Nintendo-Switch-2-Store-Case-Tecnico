import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import type { Category, Product } from "../../types/Product";
import ProductCard from "../../components/ProductCard";
import * as S from "./styles";
import { BlinkBlur } from "react-loading-indicators";

const categorias: Category[] = [
  "Aventura",
  "Corrida",
  "RPG",
  "SCIFI",
  "Esporte",
  "Festa",
  "Simulação",
];

const Categorias = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <S.Container>
      <S.PageTitle>Categorias</S.PageTitle>

      {isLoading ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px', 
          color: '#fff',
          fontFamily: 'sans-serif'
        }}>
          <h3 style={{ marginBottom: '10px', color: '#8b0000' }}>Carregando catálogo...</h3>
          <BlinkBlur color={["#7a1d1d", "#a32727", "#cc3131", "#d75959"]} />
        </div>
      ) : (
        categorias.map((cat) => {
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
        })
      )}
    </S.Container>
  );
};

export default Categorias;