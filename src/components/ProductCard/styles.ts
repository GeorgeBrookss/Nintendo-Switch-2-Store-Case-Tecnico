import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div`
  border: 1px solid ${theme.colors.text};
  background: ${theme.colors.text2};
  backdrop-filter: blur(10px);
  padding: 16px;
  border-radius: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors?.primary || `${theme.colors.primary}`};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 12px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: ${theme.colors.secondary};
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 20px;
  color: ${theme.colors.secondary};
`;

export const SaleBadge = styled.span`
  color: ${(props) => props.theme.colors?.primary || `${theme.colors.primary}`};
  font-weight: bold;
  margin-bottom: 12px;
  display: block;
`;

export const DetailsLink = styled(Link)`
  width: 100%;
  margin-top: 0;
  text-decoration: none;
`;

export const DetailsButton = styled.button`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background: ${theme.colors.text};
  color: ${theme.colors.white};
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors?.primary || `${theme.colors.primary}`};
  }
`;