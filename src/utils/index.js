export const addToBasket = (product, basket, setBasket) => {
    
    let findIndex = basket.findIndex( ({id}) => id ===product.id)
    if ( findIndex !== -1) {
        basket[findIndex].count += 1 
    }else {
        product.count = 1
        basket.push(product)
    }

    localStorage.setItem('basket', JSON.stringify(basket))
    setBasket([...basket])
}