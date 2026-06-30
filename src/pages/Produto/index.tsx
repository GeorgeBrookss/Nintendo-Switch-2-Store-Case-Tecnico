import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../api/api"
import type { Product } from "../../types/Product"
import { CartContext } from "../../context/CartContext"
import * as S from "./styles" 
import { BlinkBlur } from "react-loading-indicators"

const Produto = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const context = useContext(CartContext)
    const [selectedImage, setSelectedImage] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            getProductById(Number(id))
                .then(setProduct)
                .catch((error) => {
                    console.error("Erro ao carregar o produto:", error);
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [id])

    if (!context) return null

    const { addToCart } = context
    
    if (isLoading || !product) {
        return (
            <div style={{ 
                textAlign: 'center', 
                padding: '120px 20px',
                color: '#fff',
                fontFamily: 'sans-serif'
            }}>
                <h3 style={{ marginBottom: '10px', color: '#8b0000' }}>Carregando detalhes do produto...</h3>
                <BlinkBlur color={["#7a1d1d", "#a32727", "#cc3131", "#d75959"]} />
            </div>
        )
    }

    const openModal = (index: number) => {
        setSelectedImage(index)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const nextImage = () => {
        setSelectedImage((prev) =>
            prev === product.gallery.length - 1 ? 0 : prev + 1
        )
    }

    const previousImage = () => {
        setSelectedImage((prev) =>
            prev === 0 ? product.gallery.length - 1 : prev - 1
        )
    }

    return (
        <>
            <S.Background image={product.background} />
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

                    <S.GallerySection>
                        <S.GalleryTitle>Galeria</S.GalleryTitle>
                        <S.GalleryGrid>
                            {product.gallery.map((image, index) => (
                                <S.GalleryImage
                                    key={index}
                                    src={image}
                                    alt={`${product.title} ${index + 1}`}
                                    onClick={() => openModal(index)}
                                />
                            ))}
                        </S.GalleryGrid>
                    </S.GallerySection>
                </S.InfoContainer>
            </S.Container>

            {modalOpen && (
                <S.ModalOverlay onClick={closeModal}>
                    <S.ModalContent onClick={(e)=>e.stopPropagation()}>
                        <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
                        <S.ArrowButton left onClick={previousImage}>❮</S.ArrowButton>
                        <S.ModalImage
                            src={product.gallery[selectedImage]}
                            alt={product.title}
                        />
                        <S.ArrowButton onClick={nextImage}>❯</S.ArrowButton>
                    </S.ModalContent>
                </S.ModalOverlay>
            )}
        </>
    )
}
export default Produto