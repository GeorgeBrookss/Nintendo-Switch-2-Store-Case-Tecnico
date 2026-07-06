/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import * as S from './styles'
import miiBanner from '../../../public/assets/images/carousel/Mii.avif'
import splatoonBanner from '../../../public/assets/images/carousel/Splatoon.avif'
import yoshiBanner from '../../../public/assets/images/carousel/YoshiBanner.avif'
import starFoxBanner from '../../../public/assets/images/carousel/StarFox.avif'
import starfoxThumb from '../../../public/assets/images/carousel/icons/starfox.jpg'
import miiThumb from '../../../public/assets/images/carousel/icons/tomodachi.webp'
import splatoonThumb from '../../../public/assets/images/carousel/icons/splatoon.png'
import yoshiThumb from '../../../public/assets/images/carousel//icons/Yoshibutton.jpg'


export function Banner() {
const [currentIndex, setCurrentIndex] = useState(0)

const banners = [
    {
        image: starFoxBanner,
        thumb: starfoxThumb,
        title: "Star Fox"
    },
    {
        image: miiBanner,
        thumb: miiThumb,
        title: "Mii"
    },
    {
        image: splatoonBanner,
        thumb: splatoonThumb,
        title: "Splatoon"
    },
    {
        image: yoshiBanner,
        thumb: yoshiThumb,
        title: "Yoshi"
    }
]


const nextSlide = () => {
    setCurrentIndex(prev =>
        prev === banners.length - 1 ? 0 : prev + 1
    )
}

useEffect(() => {
    const timer = setInterval(() => {
        nextSlide()
    }, 4000)
    return () => clearInterval(timer)
    }, [currentIndex])

return (
    <S.CarouselContainer>
            <S.Slider activeIndex={currentIndex}>
    {banners.map((banner) => (
        <S.BannerImage
            key={banner.title}
            src={banner.image}
            alt={banner.title}
        />
    ))}
</S.Slider>

        <S.Thumbnails>

    {banners.map((banner, index) => (

        <S.Thumbnail
            key={index}
            $active={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
        >

            <img
                src={banner.thumb}
                alt={banner.title}
            />

        </S.Thumbnail>

    ))}

</S.Thumbnails>
    </S.CarouselContainer>
)
}

export default Banner