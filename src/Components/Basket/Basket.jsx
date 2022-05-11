import { useContext, useEffect } from "react"
import { Context } from "../../Context"
import { BasketItem } from "../Basket/BasketItem"
import lock from '../../image/zamok.png';
import '../Basket/Basket.css'

export const Basket = () => {

    const { basket } = useContext(Context)


    return (
            <div className="container">
                <div className="basket">
                    <div className="basket__wrapper">
                        <div className="basket__shopping">
                            <div className="basket__title">Моя корзина</div>
                            <ul className="basket__shopping__items">
                                {basket.map((item, index)=>{
                                    return <BasketItem item={item} key={index}/>
                                })}
                            </ul>
                        </div>
                        <div className="basket__order">
                            <div className="basket__order__title" >Детали заказа</div>
                            <hr/>
                            <div className="basket__order__wrapper">
                                <div className="basket__order__total">Итого</div>
                                <div className="basket__order__price">$</div>
                            </div>
                            <div className="basket__order__checkout">
                                <button className="button basket__order__btn">Оформить заказ</button>
                            </div>
                            <div className="basket__order__payment">
                                <img src={lock} alt="lock"/>
                                <span>Безопасный платёж</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
