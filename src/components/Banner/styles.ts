import styled from 'styled-components'
import { theme } from '../../styles/theme';

export const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
    object-fit: contain;
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
    background: ${(props) => props.theme.colors.primary};
    }
    @media (max-width: 1023px) {
        display: none;
    }

    &.left { left: 10px; }
    &.right { right: 10px; }
`

export const Thumbnails = styled.div`
    display:flex;
    justify-content:center;
    gap:20px;
    margin-top:25px;
`

export const Thumbnail = styled.button<{ $active:boolean }>`
    width:90px;
    height:50px;
    overflow:hidden;
    border-radius:10px;
    cursor:pointer;
    border:${props =>
        props.$active
            ? `3px solid ${theme.colors.primary}`
            : "3px solid transparent"};
    transition:.35s;
    background:none;
    padding:0;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:translateY(-4px);
    }
`