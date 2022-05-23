import { useContext } from "react"
import { Context } from "../../Context"
import './PopUp.css'

export const FormPopUp = () => {
    const { closePopUp, handleClick} = useContext(Context)

    return (
        <div className="popUp__modal" onClick={()=>{closePopUp()}}>
            <div className="popUp__modal__wrapper" onClick={(e)=>handleClick(e)}>
                <h3>
                Информация отправлена! Спасибо
                </h3>
                <button className="button popUp__modal__btn__ok" onClick={()=>{closePopUp()}}>Ok</button>
                <button className="button popUp__modal__btn__close" onClick={()=>{closePopUp()}}>X</button>
            </div>
        </div>
    )
}