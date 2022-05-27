import { Drawer } from 'antd';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import { BasketItem } from '../Basket/BasketItem';
import { FormaOrder } from '../Forma/FormaOrder';
import './CustomerOrder.css'

export const CustomerOrder = ({visible, setVisible, total}) => {
    const { basket, setBasket } = useContext(Context)
    const [orderPopUp, setOrderPopUp] = useState(false)

    const onClose = () => {
        setVisible(false);
    };

    const onCloseAndClearBasket = () => {
        setVisible(false)
        setOrderPopUp(false)
        setBasket([])
        localStorage.setItem('basket', '')
    }; 

    return (
      <Drawer className='order__drawer' title="Оформление заказа" placement="right" onClose={onClose}  visible={visible} >
        <div className="customer__order__wrapper">
            <div className="customer__order__basket__items">
                <ul className="basket__shopping__items">
                    {basket.map((item, index)=>{
                        return <BasketItem item={item} key={index}  />
                    })}
                </ul>
            </div>
            <div className="price__total__order">
                <div>Cумма Вашего заказа:</div>
                <div>{total.toFixed(1)}$</div>
            </div>
            <div className="customer__wrapper">
                <div className="customer__data">Контактные данные</div>
                {visible && <FormaOrder onCloseAndClearBasket={onCloseAndClearBasket} orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>}
            </div>
        </div>
      </Drawer>
    )
}