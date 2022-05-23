import { useNavigate } from "react-router-dom";
import { Count } from "./Count";

export const BasketItem = ({item, removeProduct, increase, decrease,changeValue }) => {
    const {id, name, price, image_link, count} = item
    

    const navigate  = useNavigate();
    const openProduct = () => {
        navigate(`/product/${id}`)
    }

    return (
        <>
            <hr />
            <li className="basket__shopping__item">
                <div className="basket__shopping__item__img">
                    <img src={image_link} onClick={() => {openProduct()}} />
                </div>
                <div className="basket__shopping__item__description">
                    <div className="basket__shopping__item__name">{name}</div>
                    <div className="basket__shopping__item__price">{price}$</div>
                </div>
                <div className="basket__shopping__item__count">{<Count count={count} id={id} increase={increase} decrease={decrease} changeValue={changeValue} />}</div>
                <div className="basket__shopping__item__price__total">{(price *count).toFixed(1)}$</div>
                <div className="basket__shopping__item__button">
                    <button id={id} className="button basket__shopping__delete" onClick={() => {removeProduct(id)}}>X</button>
                </div>
            </li>
        </>
    )
}
