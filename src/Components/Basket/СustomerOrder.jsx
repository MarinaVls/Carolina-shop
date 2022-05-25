import { Drawer } from 'antd';
import { useContext } from 'react';
import { Context } from '../../Context';
import { BasketItem } from './BasketItem';
import { FormOrder } from './FormOrder';
import './CustomerOrder.css'

export const CustomerOrder = ({visible, setVisible, total}) => {
    const { basket, setBasket, setModalActive } = useContext(Context)

    const onClose = () => {
        setVisible(false);
    };

    const onCloseAndClearBasket = () => {
        setVisible(false)
        setModalActive(false)
        setBasket([])
        localStorage.setItem('basket', '');
    }; 

    return (
      <Drawer title="Оформление заказа" placement="right" onClose={onClose}  visible={visible}>
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
                {visible && <FormOrder onCloseAndClearBasket={onCloseAndClearBasket}/>}
            </div>
        </div>
      </Drawer>
    )
}