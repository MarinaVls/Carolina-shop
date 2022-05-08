import { useEffect, useState } from "react"
import { ShopItem } from "./ShopItem"

export const Shop = () => {

    const [data, setData] = useState([])
    
    useEffect (()=>{
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
        .then(response => response.json())
        .then(json => setData(json))
        localStorage.setItem('shopData', JSON.stringify(data)) 
    }, [data])

    return (
        <div className="main__shop">
            <div className="container">
                <h1>Магазин</h1>
                {data.length > 0 ?
                    <div className="main__shop__wrapper">
                        <div className="main__shop__filter">
                            <div>Фильтр</div>
                            <div>По умолчанию</div>
                            <div>По возрастанию</div>
                            <div>По убыванию</div>
                        </div>
                        <div className="main__shop__products">
                            <ul className="main__shop__products__items">
                                    {data.map((product, index) => {
                                        return <ShopItem key={index} product={product} />
                                    })}
                                </ul> 
                        </div>
                    </div>
                : <p>Loading...</p> }
            </div>
        </div>
    )
}

                    