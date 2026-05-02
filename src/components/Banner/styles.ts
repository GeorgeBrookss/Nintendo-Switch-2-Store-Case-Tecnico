import styled from 'styled-components'
import { theme } from '../../styles/theme';

export const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
`

interface SliderProps {
    activeIndex: number;
}

export const Slider = styled.div<SliderProps>`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`

export const BannerImage = styled.img`
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 300px;
    border-bottom: 20px solid ${theme.colors.primary};
`

export const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${theme.colors.secondary};
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    z-index: 2;

    img {
        max-width: 100px;
        width: 100%;
        max-height: 100px;
        height: 100%;
        border-radius: 50px;

        
    }

    &:hover {
    background: ${(props) => props.theme.colors.white};
    }
    @media (max-width: 1023px) {
        display: none;
    }

    &.left { left: 10px; }
    &.right { right: 10px; }
`