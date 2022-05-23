import { useContext, useState } from "react"
import { Context } from "../../Context"
import facebook from '../../image/f-icon.png';
import pint from '../../image/pint-icon.png'
import insta from '../../image/inst-icon.png'
import './PopUp.css'

export const SocialPopUp = () => {
    const { closePopUp, handleClick} = useContext(Context)
    
    return (
        <div className="popUp__modal" onClick={()=>{closePopUp()}}>
            <div className="popUp__modal__wrapper" onClick={(e)=>handleClick(e)}>
                <div className="footer__social">
                    <a href='https://www.instagram.com/?hl=ru' target='_blank'><img src={insta} /></a>
                    <a href='https://www.pinterest.ru/' target='_blank'><img src={pint} /></a>
                    <a href='https://www.facebook.com/' target='_blank'><img src={facebook} /></a>
                </div>
                <button className="button popUp__modal__btn__close" onClick={()=>{closePopUp()}}>X</button>
            </div>
        </div>
    )
}