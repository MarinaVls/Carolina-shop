import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { BasketItem } from "../Basket/BasketItem"
import lock from '../../image/zamok.png';
import '../Basket/Basket.css'
import { OrderPopUp} from "../PopUpModal/OrderPopUp";

export const Basket = () => {
    const { basket, setBasket, openPopUp, showPopUp } = useContext(Context) 
    const [total, setTotal] = useState(0)

    const removeProduct = (id) => {
        let basketRemove = basket.filter((product) => id !== product.id)
        setBasket([...basketRemove])
        localStorage.setItem('basket', JSON.stringify(basketRemove))
    }

    const increase = (id) => { 
        basket.map((product) => {
            if (product.id === id) {
                product.count = product.count + 1
            }
        })      
        setBasket([...basket]);
    }

    const decrease = (id) => {
        basket.map((product) => {
            if (product.id === id) {
                product.count = product.count - 1 > 1 ? product.count - 1 : 1
            }
        })      
        setBasket([...basket]);
    }

    const changeValue = (id, value) => {
        basket.map((product) => {
            if (product.id === id) {
                product.count = value;
            }
        })      
        setBasket([...basket]);
    }

    useEffect(()=>{        
        let summ = basket.reduce((total, {count, price}) => count * price + total, 0);
        setTotal(summ);
    },[basket])

    return (
            <div className="container">
                <div className="basket">
                    <div className="basket__wrapper">
                        <div className="basket__shopping">
                            <div className="basket__title">
                                {basket.length > 0 ? 'Моя корзина' : 'Ваша корзина пуста'} 
                            </div>
                            <ul className="basket__shopping__items">
                                {basket.map((item, index)=>{
                                    return <BasketItem item={item} key={index}
                                    removeProduct={removeProduct} 
                                    increase={increase} 
                                    decrease={decrease}
                                    changeValue={changeValue}/> 
                                })}
                            </ul>
                        </div>
                        {basket.length > 0 ?  
                        <div className="basket__order">
                            <div className="basket__order__title" >Детали заказа</div>
                            <hr/>
                            <div className="basket__order__wrapper">
                                <div className="basket__order__total">Итого</div>
                                <div className="basket__order__price">{total.toFixed(1)}$</div>
                            </div>
                            <div className="basket__order__checkout">
                                <button className="button basket__order__btn" onClick={()=>{openPopUp()}}>Оформить заказ</button>
                               {showPopUp &&  <OrderPopUp/>}
                            </div>
                            <div className="basket__order__payment">
                                <img src={lock} alt="lock"/>
                                <span>Безопасный платёж</span>
                            </div>
                        </div>
                        : ''}
                    </div>
                </div>
            </div>
    )
}
