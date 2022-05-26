import { Link, NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'
import shoppingBag from '../../image/shopping-bag.png'
import burger from '../../image/burger__menu.png'
import { useContext, useState } from 'react';
import { Context } from '../../Context/index';
import './Header.css'

export const Header = () => {
    const { basket } = useContext(Context)
    const [menuActive, setMenuActive] = useState(false)

    const getBasketCount = () => {
        let count = 0;
        if(basket.length === 0) {
            return count
        }else{
            basket.map((item) => {
                count = count + item.count
            })
            return count
        }
    } 

    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="container">
                    <nav className="header__wrapper__nav">
                        <div className="button burger__btn" onClick={()=> setMenuActive(!menuActive)} >
                            <img src={burger} alt="menu"/>
                        </div>
                        <div className={menuActive ? "menuActive" : "header__menu"} onClick={() => {setMenuActive(false)}}>
                            <ul  className="header__menu__wrapper" onClick={e => e.stopPropagation()}>
                                <NavLink className="no-active" to='/'><li>Главная</li></NavLink>
                                <NavLink className="no-active" to='/shop'><li>Магазин</li></NavLink>
                                <NavLink className="no-active" to='/about'><li>О нас</li></NavLink>
                                <NavLink className="no-active" to='/contacts'><li>Контакты</li></NavLink>
                            </ul>
                        </div>
                        <div className="header__wrapper__logo">
                            <div className="header__logo">
                                <Link to='/'><img src={logo} alt='logo'/></Link>
                            </div>
                            <h2>магазин натуральной косметики</h2>
                        </div>
                        <div className="header__basket">
                            <Link to='/basket'>
                                <img src={shoppingBag} alt='basket'/>
                                <span>{getBasketCount()}</span> 
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>     
    )
}



