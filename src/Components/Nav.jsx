import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav  className="header__wrapper__nav">
             <ul className="nav header__nav">
                <Link to='/'><li>Главная</li></Link>
                <Link to='/shop'><li>Магазин</li></Link>
                <Link to='/about'><li>О нас</li></Link>
                <Link to='/contacts'><li>Контакты</li></Link>
            </ul>
        </nav>
    )
}

                    