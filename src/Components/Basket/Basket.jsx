import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { BasketItem } from "../Basket/BasketItem"
import lock from '../../image/zamok.png';
import '../Basket/Basket.css'
import { CustomerOrder } from "./СustomerOrder";

export const Basket = () => {
    let { basket, setBasket } = useContext(Context) 
    const [total, setTotal] = useState(0)
    const [visible, setVisible] = useState(false);
    const [showBasketItem, setShowBasketItem] = useState(true)

    const removeProduct = (id) => {
        basket =  basket.filter((product) => id !== product.id)
        setBasket([...basket])
        localStorage.setItem('basket', JSON.stringify(basket))
    }

    const increase = (id) => { 
        basket.map((product) => {
            if (product.id === id) {
                product.count = product.count + 1  
            }

        })   
        localStorage.setItem('basket', JSON.stringify(basket))
        setBasket([...basket])  
    }

    const decrease = (id) => {
        basket.map((product) => {
            if (product.id === id) {
                product.count = product.count - 1 >= 1 ? product.count - 1 : 0
            } 

            if(product.count == 0){
                removeProduct(id)
            }
        })      
        localStorage.setItem('basket', JSON.stringify(basket))
        setBasket([...basket]);
    }

    const changeValue = (id, value) => {
        basket.map((product) => {
            if (product.id === id) {
                product.count = value;
            }
        })    
        localStorage.setItem('basket', JSON.stringify(basket))  
        setBasket([...basket]);
    }

    const showDrawer = () => {
        setVisible(true);
    };

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
                                    changeValue={changeValue}
                                    showBasketItem={showBasketItem} setShowBasketItem={setShowBasketItem}
                                    /> 
                                })}
                            </ul>
                        </div>
                        {basket.length > 0 ?  
                        <div className="basket__order">
                            <div className="basket__order__title" >Детали заказа</div>
                            <hr className="hr"/>
                            <div className="basket__order__wrapper">
                                <div className="basket__order__total">Итого</div>
                                <div className="basket__order__price">{total.toFixed(1)}$</div>
                            </div>
                            <div className="basket__order__checkout">
                                <button className="button basket__order__btn" onClick={()=>{showDrawer()}}>Оформить заказ</button>
                                {visible && <CustomerOrder visible={visible} setVisible={setVisible} total={total}/> }
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
