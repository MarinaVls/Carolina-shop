import { Nav } from '../Components/Nav'
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import facebook from '../image/f-icon.png';
import pint from '../image/pint-icon.png'
import insta from '../image/inst-icon.png'

export const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer__top">
                    <div className="footer__top__wrapper">
                        <nav className="footer__wrapper__nav">
                            <ul className="nav footer__nav">
                                <li>Главная</li>
                                <li>Магазин</li>
                                <li>О нас</li>
                                <li>Контакты</li>
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
                                <span>Т: +7 (495) 000-00-00</span>
                                <span>Ф: +7 (495) 000-00-00</span>
                                <span>info@mysite.ru</span>
                            </div>
                            <div className="footer__social">
                                <a><img src={insta} /></a>
                                <a><img src={pint} /></a>
                                <a><img src={facebook} /></a>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="footer__top__form">
                        <p>Новости, акции и скидки по эл. почте</p>
                        <form className="footer__wrapper__form">
                            <label><input type="text" name="name" placeholder="Имя" /></label>
                            <label><input type="tel" name="phone" placeholder="Телефон" /></label>
                            <button className="button footer__form__btn">Подписаться</button>
                        </form>
                    </div>
                </div>
                <div className="footer__bottom">
                   <div className="footer__bottom__wrapper">© 2023 Carolina.</div>
                </div>
        </footer>
    )
}





