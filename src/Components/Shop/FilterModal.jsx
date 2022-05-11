import { Collapse } from 'antd';
import 'antd/dist/antd.css';

export const FilterModal = ({ filterValue, setFilterValue}) => {
    const { Panel } = Collapse;

    const clickFilter = (value) => {
        setFilterValue(value)
    }
    return (
        <div className="main__shop__filter__wrapper">
            <div className='main__shop__filter__sort'>Cортировать</div>
            <hr />
                <label>
                    <input type="radio" defaultChecked={filterValue === 'default' ? true : false} name="filter" onClick={() => {clickFilter("default")}}/>
                    По умолчанию
                </label>
                <label>
                    <input type="radio" defaultChecked={filterValue === 'asc' ? true : false} name="filter" onClick={() => {clickFilter("asc")}} />
                    По возрастанию
                </label>
                <label>
                    <input type="radio" defaultChecked={filterValue === 'desc' ? true : false} name="filter" onClick={() => {clickFilter("desc")}}/>
                    По убыванию
                </label>
        </div>
    )
}


