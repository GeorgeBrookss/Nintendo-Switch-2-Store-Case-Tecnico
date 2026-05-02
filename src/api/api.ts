const BASE_URL = 'http://localhost:3001/products'

export const getProducts = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

export const getProductById = async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
}