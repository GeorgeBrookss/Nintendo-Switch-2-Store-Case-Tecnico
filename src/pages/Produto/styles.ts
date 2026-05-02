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
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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