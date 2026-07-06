export type Category =
    |'Aventura'
    |'Corrida'
    |'RPG'
    |'SCIFI'
    |'Esporte'
    |'Festa'
    |'Simulação'

export interface Product {
    id: number
    title: string
    category: Category
    price: number
    description: string
    image: string
    gallery: string[]
    background: string
    sale: boolean
    releaseDate: string
}