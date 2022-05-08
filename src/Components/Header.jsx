import { Nav } from '../Components/Nav'
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import shoppingBag from '../image/shopping-bag.png'
import { useContext } from 'react';
import { Context } from '../Context';

export const Header = () => {
    const { basket } = useContext(Context)
    
    const getBasketCount = () => {
        let count = 0;
        if (basket.length === 0) {
            return count
        }else {
        basket.map((item) => {
            count = count + item.count
            })
            return count
        }
    }
    return(
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <Nav />
                    <div className="header__wrapper__logo">
                        <div className="logo">
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
                </div>
            </div>
        </header>     
    )
}



