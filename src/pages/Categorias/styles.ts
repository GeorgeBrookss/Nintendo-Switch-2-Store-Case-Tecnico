import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

export const PageTitle = styled.h1`
  margin-bottom: 32px;
  color: ${(props) => props.theme.colors.text};
`

export const CategorySection = styled.div`
  margin-bottom: 40px;
`

export const CategoryTitle = styled.h2`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.secondary};
`

export const ProductsContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    justify-self: center;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    justify-self: center;
    grid-template-columns: 1fr;
  }

`