import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-self: center;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.colors.white};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`

export const CategoryTag = styled.span`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: bold;
  align-self: flex-start;
`

export const Price = styled.p`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  margin: 16px 0;
`

export const Description = styled.p`
  line-height: 1.6;
  color: ${theme.colors.text};
  font-size: 1.1rem;
`

export const AddButton = styled.button`
  margin-top: 24px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.bold};
  text-transform: uppercase;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const LoadingText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 100px;
  color: ${(props) => props.theme.colors.secondary};
`

export const GallerySection = styled.div`
    margin-top:40px;
`

export const GalleryTitle = styled.h2`
    margin-bottom:20px;
    font-size:1.6rem;
`

export const GalleryGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:16px;
    :hover{
        cursor:zoom-in;
    }
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`

export const GalleryImage = styled.img`
    width:100%;
    border-radius:10px;
    cursor:pointer;
    transition:.3s;
    &:hover{
        transform:scale(1.03);
    }
`

export const ModalOverlay = styled.div`
    position:fixed;
    margin-top: 50px;
    inset:0;
    background:rgba(0,0,0,.85);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
`

export const ModalContent = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
`

export const ModalImage = styled.img`
    max-width:80vw;
    max-height:80vh;
    border-radius:12px;
`

export const CloseButton = styled.button`
    position:absolute;
    top:-50px;
    right:0;
    font-size:32px;
    background:none;
    border:none;
    color:white;
    cursor:pointer;
`

export const ArrowButton = styled.button<{left?:boolean}>`
    position:absolute;
    ${(props)=>props.left ? "left:-70px;" : "right:-70px;"}
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(6px);
    border:none;
    width:55px;
    height:55px;
    border-radius:50%;
    color:white;
    font-size:28px;
    cursor:pointer;
    transition:.3s;

    &:hover{
        background:${theme.colors.primary};
    }

    @media(max-width:768px){
        ${(props)=>props.left ? "left:5px;" : "right:5px;"}
    }

`

export const Background = styled.div<{ image: string }>`
    position: fixed;
    inset: 0;
    z-index: -2;
    filter: blur(4px) brightness(.5) saturate(.8);
    transform: scale(1.08);
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const BackgroundOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.65);
    z-index: -1;
`