import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../api/api"
import type { Product } from "../../types/Product"
import { CartContext } from "../../context/CartContext"
import * as S from "./styles" 
const Produto = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const context = useContext(CartContext)

    useEffect(() => {
        if (id) {
            getProductById(Number(id)).then(setProduct)
        }
    }, [id])

    if (!context) return null

    const { addToCart } = context
    
    if (!product) return <S.LoadingText>Carregando...</S.LoadingText>

    return (
        <S.Container>            
            <S.ProductImage
                src={product.image}
                alt={product.title}
            />
            <S.InfoContainer>
            <S.CategoryTag>{product.category}</S.CategoryTag>
            <S.Title>{product.title}</S.Title>
                
            <S.Price>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.price)}
            </S.Price>
                
            <S.Description>
                <strong>Descrição:</strong> <br/>
                {product.description}
            </S.Description>

            <S.AddButton onClick={() => {
                addToCart(product)
                console.log('Adicionado:', product)
                }}>
                Adicionar ao carrinho
            </S.AddButton>
            </S.InfoContainer>
        </S.Container>
    )
}

export default Produto