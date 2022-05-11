import { useEffect, useState } from "react"
import { FilterModal } from "../Shop/FilterModal"
import { ShopItem } from "../Shop/ShopItem"
import { Spin, Space } from 'antd';
import './Shop.css'


export const Shop = () => {
    
    const [data, setData] = useState([]);
    const [filterValue, setFilterValue]  = useState('default');
    const [defaultData,  setDefaultData] = useState([]);

    useEffect (()=>{
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('shopData', JSON.stringify(json))
            setData([...json])
            setDefaultData([...json]) 
        }) 
    }, [])

    useEffect(() => {
        let sortData = [];
        switch(filterValue){
            case 'asc': 
            sortData = data.sort((a,b) => {
                return a.price - b.price
            })
            break;
            case 'desc': 
            sortData = data.sort((a,b) => {
                return b.price - a.price
            })
            break;
            case 'default': 
            sortData = defaultData
            break;
        }
        setData([...sortData]);
    },[filterValue])

    return (
        <div className="main__shop">
            <div className="container">
                <h1>Магазин</h1>
                {data.length > 0 ?
                    <div className="main__shop__wrapper">
                        <div className="main__shop__filter">
                            <FilterModal filterValue={filterValue} setFilterValue={setFilterValue} />
                        </div>
                        <div className="main__shop__products">
                            <ul className="main__shop__products__items">
                                    {data.map((product, index) => {
                                        return <ShopItem key={index} product={product} />
                                    })}
                                </ul> 
                        </div>
                    </div>
                    
                : <div className="spin__wrapper">
                    <Space  size="middle">
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                    </Space>
                </div>}
            </div>
        </div>
    )
}

                    