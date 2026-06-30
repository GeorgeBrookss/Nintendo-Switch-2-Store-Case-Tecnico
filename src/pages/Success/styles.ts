import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 40px 20px;
  position: absolute;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 10000;
`

export const Content = styled.div`
  max-width: 600px;
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export const Icon = styled.span`
  display: block;
  justify-self: center;
  max-width: 300px;
  margin-bottom: 10px;
  margin-top: 200px;

  @media(max-width:768px){
      img{
        width:100px;
    }
  }

`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.success};
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: ${(props) => props.theme.fonts.bold};

  @media(max-width:768px){
      font-size: 20px;
  }
`

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: ${theme.colors.success};
`

export const WarningBox = styled.div`
  background: ${theme.colors.secondary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;

  h2 {
    margin-top: 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.warning};
    margin-top: 10px;
  }
`

export const HomeButton = styled.button`
  padding: 15px 40px;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`