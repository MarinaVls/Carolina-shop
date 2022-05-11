import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Context } from "../../Context/index";

export const ShopItem = ({product}) => {
    const {id, name, price, image_link} = product
    const {addToBasket, basket, setBasket} = useContext(Context)

    const navigate  = useNavigate();
    const openClick = () => {
        navigate(`/product/${id}`)
    }

    return (
        <li className="main__shop__products__item">
                                <div className="main__shop__products__item__img">
                                    <img src={image_link} alt="product"/>
                                </div>
                                <div className="main__shop__products__item__caption">
                                    <div className="main__shop__products__item__name" onClick={() => {openClick()}}>
                                        {name}
                                    </div>
                                    <div className="main__shop__products__item__price">{price}$</div>
                                    <div className="main__shop__products__item__add">
                                        <button id={id} onClick={() => {addToBasket(product, basket, setBasket)}} className="button main__shop__products__item__btn" >Добавить в корзину</button>
                                    </div>
                                </div>
                            </li>
    )
}

