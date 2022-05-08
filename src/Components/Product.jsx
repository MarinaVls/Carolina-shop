import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import buttonCart from '../image/button-cart.png'
import buttonBack from '../image/button-back.png'
import { Context } from "../Context/index"

export const Product = () => {
    const [product, setProduct] = useState({})
    const {addToBasket, basket, setBasket} = useContext(Context)
    const params = useParams()
    const { idParam } = params
    const navigate = useNavigate();
    
    useEffect (()=>{
        let shopData = JSON.parse(localStorage.getItem('shopData'));
        shopData = shopData.find(shopProduct => shopProduct.id == idParam);
        setProduct(shopData);
    }, [])

    const goShop = () => {
        navigate('/shop');
    }

    return (
        <div className="main__product">
            <div className="container">
                <div className="main__product__wrapper">
                    <div className="main__product__image">
                        <img src={product.image_link} alt="product" />
                    </div>
                    <div className="main__product__caption">
                        <div className="main__product__name">
                            {product.name}
                        </div>
                        <div className="main__product__price">
                            {product.price} $
                        </div>
                        <button className="button main__product__btn-back" onClick={() => {goShop()}}><img src={buttonBack} alt='buttonBack'/></button>
                        <button className="button main__product__btn-cart" onClick={() => {addToBasket(product, basket, setBasket)}}><img src={buttonCart} alt='buttonCart'/></button>
                        <div className="main__product__description">
                            <span>О товаре:</span>
                            {product.description}
                        </div>
                    </div>
                </div>   
            </div>
        </div>  
    )
}