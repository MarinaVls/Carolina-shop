import { useContext, useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import buttonCart from '../../image/button-cart.png'
import buttonBack from '../../image/button-back.png'
import { Context } from "../../Context/index"
import { Collapse } from 'antd';
import './Product.css'

export const Product = () => {
    const { Panel } = Collapse;
    const [product, setProduct] = useState({})
    const params = useParams()
    const { idParam } = params
    const {addToBasket, basket, setBasket} = useContext(Context)
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
                            <Collapse >
                                <Panel header='Description' >
                                    {product.description}
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>   
            </div>
        </div>  
    )
}