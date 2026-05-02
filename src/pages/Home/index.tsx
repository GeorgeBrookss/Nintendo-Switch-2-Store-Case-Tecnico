import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import ProductCard from "../../components/ProductCard";
import type { Product } from "../../types/Product";
import {HomePage, ListaGames} from './styles'
import Banner from '../../components/Banner'
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const promotions = products.filter((p) => p.sale).slice(0, 4);

  const news = products
    .filter((p) => !p.sale)
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    )
    .slice(0, 4);

  return (
    <>
    <Banner />
    <HomePage>
      <h2>Promoções</h2>
      <ListaGames>
        {promotions.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ListaGames>

      <h2>Novidades</h2>
      <ListaGames>
        {news.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ListaGames>
    </HomePage>
    </>
  );
};

export default Home;
