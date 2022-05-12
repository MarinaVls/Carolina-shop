import { Link } from 'react-router-dom';
import facebook from '../../image/f-icon.png';
import pint from '../../image/pint-icon.png'
import insta from '../../image/inst-icon.png'
import './Footer.css'
import { useState } from 'react';

export const Footer = () => {
    const [message, setMessage] = useState(false)
    const showMessage = () => {
        let name = document.querySelector('#firstName');
        let phone = document.querySelector('#phone');

        if(name.value == '' || phone.value == '') {
            setMessage(false)
        }else {
        setMessage(true)
        setTimeout(() => {
            setMessage(false)
        }, [1000]) }
        
    }

    return (
        <footer className="footer">
                <div className="footer__top">
                    <div className="footer__top__wrapper">
                        <nav className="footer__wrapper__nav">
                            <ul className="footer__nav">
                                <Link to='/'><li>Главная</li></Link>
                                <Link to='/shop'><li>Магазин</li></Link>
                                <Link to='/about'><li>О нас</li></Link>
                                <Link to='/contacts'><li>Контакты</li></Link>
                            </ul>
                        </nav>
                        <div className="footer__adress">
                            <div>Ул. Арбат, 1а, Москва, 119019, Россия</div>
                            <div className="footer__work-clock"> Расписание работы
                                <span>С пон. по пят.: 7:00–22:00</span>
                                <span>Суббота: 7:00–19:00</span>
                            </div>
                        </div>
                        <div className="footer__top__info">
                            <div className="footer__top__info__wrapper">Служба поддержки
                                <a href="tel:+7 (495) 000-00-00">Т: +7 (495) 000-00-00</a>
                                <a href="tel:+7 (495) 000-00-00">Ф: +7 (495) 000-00-00</a>
                                <a href="mailto:info@mysite.ru">info@mysite.ru</a>
                            </div>
                            <div className="footer__social">
                                <a href='https://www.instagram.com/?hl=ru' target='_blank'><img src={insta} /></a>
                                <a href='https://www.pinterest.ru/' target='_blank'><img src={pint} /></a>
                                <a href='https://www.facebook.com/' target='_blank'><img src={facebook} /></a>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="footer__top__form">
                        <p>Новости, акции и скидки по эл. почте</p>
                        <form method='get' action='#' className="footer__wrapper__form">
                            <input id='firstName' type="text" name="name" placeholder="Имя" required/>
                            <input id='phone' type="tel" name="phone" placeholder="Телефон" required/>
                            <button className="button footer__form__btn" onClick={() => {showMessage()}} type="submit" >Подписаться</button>
                            {message && <div className='show__message'>Информация отправлена. Спасибо!</div>}
                        </form>
                    </div>
                </div>
                <div className="footer__bottom">
                   <div className="footer__bottom__wrapper">© 2023 Carolina.</div>
                </div>
        </footer>
    )
}




