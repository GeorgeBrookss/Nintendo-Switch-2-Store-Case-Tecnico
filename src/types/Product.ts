export type Category =
    |'Aventura'
    |'Corrida'
    |'RPG'
    |'SCIFI'
    |'Esporte'
    |'Festa'


export interface Product {
    id: number
    title:string
    category:Category
    price: number
    description: string
    image: string
    sale: boolean
    releaseDate: string
}