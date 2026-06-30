import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import ProductCard from "../../components/ProductCard";
import type { Product } from "../../types/Product";
import {HomePage, ListaGames, ListaGames2} from './styles'
import Banner from '../../components/Banner'
import { BlinkBlur } from "react-loading-indicators";
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const promotions = products.filter((p) => p.sale).slice(0, 4);

  const news = products
    .filter((p) => !p.sale)
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    )
    .slice(0, 6);

  return (
    <>
    <Banner />
    <HomePage>
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
          <>
            <h2>Promoções</h2>
            <ListaGames>
              {promotions.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </ListaGames>

            <h2>Novidades</h2>
            <ListaGames2>
              {news.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </ListaGames2>
          </>
        )}
      </HomePage>
    </>
  );
};

export default Home;
