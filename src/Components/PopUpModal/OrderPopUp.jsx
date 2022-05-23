import { useContext } from "react"
import { Context } from "../../Context"
import './PopUp.css'

export const OrderPopUp = () => {
    const { closePopUp, handleClick} = useContext(Context)

    return (
        <div className="popUp__modal" onClick={()=>{closePopUp()}}>
            <div className="popUp__modal__wrapper" onClick={(e)=>handleClick(e)}>
                <h3>
                Мы временно не принимаем онлайн-заказы
                </h3>
                <p>
                Чтобы завершить покупку, пожалуйста, свяжитесь с нами.
                </p>
                <button className="button popUp__modal__btn__ok" onClick={()=>{closePopUp()}}>Ok</button>
                <button className="button popUp__modal__btn__close" onClick={()=>{closePopUp()}}>X</button>
            </div>
        </div>
    )
}