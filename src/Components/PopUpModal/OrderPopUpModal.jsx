import './PopUp.css'

export const OrderPopUpModal = ({ valuesModal, onCloseAndClearBasket, setOrderPopUp}) => {

    return (
        <div className='popUp__modal'>
            <div className="popUp__modal__content" onClick={(e)=>e.stopPropagation()}>
                <h3>
                    <span>{valuesModal.username}</span>, Ваш заказ принят!
                </h3>
                <div className="popUp__modal__content__adress">Доставка будет осуществлена по адресу: <span>{valuesModal.country}, {valuesModal.adress}</span></div>
                <p>
                    Ожидайте, пожалуйста, с Вами свяжуться для уточнения деталей.
                </p>
                <button className="button popUp__modal__btn__ok" onClick={()=>{onCloseAndClearBasket()}}>Ok</button>
                <button className="button popUp__modal__btn__close" onClick={()=>{setOrderPopUp(false)}}>X</button>
            </div>
        </div>
    )
}