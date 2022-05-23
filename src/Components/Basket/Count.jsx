import Increase from '../../image/increase.png'
import Decrease from '../../image/decrease.png'
export const Count = ({count, id, increase, decrease, changeValue}) => {
    return (
        <div className="basket__shopping__item__count__wrapper">
            <button type="button" className="button count__down" onClick={() => {decrease(id)}}>
                <img src={Decrease} alt="Decrease" />
            </button>
            <input onChange={(e) => {changeValue(id, +e.target.value)}} type='number' className="count__input" value={count} />
            <button type="button" className="button count__up" onClick={() => {increase(id)}}>
                <img src={Increase} alt="Increase" />
            </button>
        </div>
    )
}