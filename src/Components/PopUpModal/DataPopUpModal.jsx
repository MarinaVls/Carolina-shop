import './PopUp.css'

export const DataPopUpModal = ({setDataPopUp}) => {

    return (
        <div className='popUp__modal'>
            <div className="popUp__modal__content" onClick={(e)=>e.stopPropagation()}>
                <h3>Подписка оформлена, Спасибо!</h3>
                <button className="button popUp__modal__btn__ok" onClick={()=>{setDataPopUp(false)}}>Ok</button>
                <button className="button popUp__modal__btn__close" onClick={()=>{setDataPopUp(false)}}>X</button>
            </div>
        </div>
    )
}