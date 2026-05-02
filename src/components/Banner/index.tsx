/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import * as S from './styles'
import Lbutton from '../../assets/images/Icons/LButton.png'
import Rbutton from '../../assets/images/Icons/RButton.png'

import miiBanner from '../../assets/images/Mii.avif'
import splatoonBanner from '../../assets/images/Splatoon.avif'
import yoshiBanner from '../../assets/images/YoshiBanner.avif'

export function Banner() {
const [currentIndex, setCurrentIndex] = useState(0)

const images = [
    miiBanner, 
    splatoonBanner,
    yoshiBanner,
]

const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
}

const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
}

useEffect(() => {
    const timer = setInterval(() => {
        nextSlide()
    }, 3000)
    return () => clearInterval(timer)
    }, [currentIndex])

return (
    <S.CarouselContainer>
            <S.NavButton className="left" onClick={prevSlide}>
                <img src={Lbutton} alt="Left-button" />
            </S.NavButton>

            <S.Slider activeIndex={currentIndex}>
                {images.map((src, index) => (
            <S.BannerImage
                    key={index}
                    src={src}
                    alt={`Banner ${index + 1}`} />
                ))}
        </S.Slider>

        <S.NavButton className="right" onClick={nextSlide}>
            <img src={Rbutton} alt="Right-button" />
        </S.NavButton>
    </S.CarouselContainer>
)
}

export default Banner