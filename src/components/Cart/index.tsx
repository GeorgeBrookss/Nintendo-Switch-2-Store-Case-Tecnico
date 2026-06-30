import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { IMaskInput } from "react-imask";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ isOpen, onClose }: Props) => {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [formData, setFormData] = useState({
    nome: "", email: "", cpf: "", tel: "", cartao: "",
  });

  if (!context) return null;
  const { cart, addToCart, decreaseQuantity } = context;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep("cart"), 300);
  };

  const isFormValid = () => {
    const { nome, email, cpf, tel, cartao } = formData;

    return (
        nome.trim().length > 3 &&
        email.includes("@") &&
        cpf.replace(/\D/g, "").length === 11 &&
        tel.replace(/\D/g, "").length === 11 &&
        cartao.replace(/\D/g, "").length === 16
    );
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <S.CartOverlay $isOpen={isOpen}>
      <S.CartHeader>
        <h2>{step === "cart" ? "Carrinho" : "Pagamento"}</h2>
        <S.CloseButton onClick={handleClose}>X</S.CloseButton>
      </S.CartHeader>

      <div>
        {step === "cart" && (
          <>
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio</p>
            ) : (
              cart.map((item) => (
                <S.ItemContainer key={item.id}>
                  <p><strong>{item.title}</strong></p>
                  <S.ItemControls>
                    <img src={item.image} alt={item.title} />
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                    <p>R$ {item.price.toFixed(2)}</p>
                  </S.ItemControls>
                </S.ItemContainer>
              ))
            )}
          </>
        )}

        {step === "checkout" && (
          <S.CheckoutForm>
            <S.Input name="nome" placeholder="Nome Completo" onChange={handleInputChange} />
            <S.Input name="email" type="email" placeholder="E-mail" onChange={handleInputChange} />
            <S.MaskInput
              mask="000.000.000-00"
              value={formData.cpf}
              placeholder="CPF"
              onAccept={(value) =>
                  setFormData({ ...formData, cpf: value as string })
              }
            />
            <S.MaskInput
              mask="(00) 00000-0000"
              value={formData.tel}
              placeholder="Telefone"
              onAccept={(value) =>
                  setFormData({ ...formData, tel: value as string })
              }
            />
            <S.MaskInput
              mask="0000 0000 0000 0000"
              value={formData.cartao}
              placeholder="Número do Cartão"
              onAccept={(value) =>
                  setFormData({ ...formData, cartao: value as string })
              }
            />
            <p>
              Total: <strong>R$ {total.toFixed(2)}</strong>
            </p>
          </S.CheckoutForm>
        )}
      </div>

      <S.CartFooter>
        {step === "cart" && cart.length > 0 && (
          <>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <S.ActionButton onClick={() => setStep("checkout")}>
              Finalizar Compra
            </S.ActionButton>
          </>
        )}

        {step === "checkout" && (
          <div>
            <S.ActionButton $variant="secondary" onClick={() => setStep("cart")}>
              Voltar
            </S.ActionButton>
            <S.ActionButton
              disabled={!isFormValid()}
              onClick={() => {
                onClose();
                navigate("/sucesso");
              }}
            >
              Pagar Agora
            </S.ActionButton>
          </div>
        )}
      </S.CartFooter>
    </S.CartOverlay>
  );
};

export default Cart;