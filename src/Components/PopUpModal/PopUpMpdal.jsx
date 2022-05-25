import './PopUp.css'

export const PopUpMpdal = ({children}) => {
    return (
        <div className='popUp__modal'>
            <div className="popUp__modal__content" onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}