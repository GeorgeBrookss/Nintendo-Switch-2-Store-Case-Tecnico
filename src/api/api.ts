const BASE_URL = 'https://nintendo-switch-2-store-api-2.onrender.com/products'

export const getProducts = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

export const getProductById = async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
}