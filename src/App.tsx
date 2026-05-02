import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CartContext } from "./context/CartContext";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import  Header from "./components/Header";
import  Cart  from "./components/Cart";
import  Home  from "./pages/Home";
import  Produto from "./pages/Produto";
import  Categorias from "./pages/Categorias";
import  Success from "./pages/Success";

function App() {
  const context = useContext(CartContext);

  if (!context) return null;

  const { isOpen, setIsOpen } = context;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />

        <Header onToggleCart={() => setIsOpen(!isOpen)} />
        <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
