import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context/index";
import './About.css'

export const About = () => {
    const {image} = useContext(Context)
    const [listOfImage, setListOfImage] = useState([]);

   /*  const listOfImageProducts = () => {
        let shopData = JSON.parse(localStorage.getItem('shopData'));
            shopData = shopData.map((image) => {
                 
            })
    } */

   
    return (
        <div className="main__about">
            <div className="main__about__wrapper">
                <div className="main__about__history">
                    <h1>Наша история</h1>
                    <p>Многие из Вас знают, что натуральная косметика безопасна для нашего здоровья и  оказывает позитивное воздействие 
                        на кожу. Именно поэтому наша косметика соответствует всем требованиям международных эко-сертификатов, 
                        а составы и производство тщательно проверяются независимыми организациями, такими как NaTrue, BDIH и ECOCERT.
                    </p>
                    <ul>Почему выгодно покупать косметику в нашем магазине?
                        <li>Покупая в интернет-магазине Сarolina Вы можете быть уверены, что любой товар имеет все необходимые 
                            сертификаты, а при каждой покупке Вам выдается чек.
                        </li>
                        <li>Бесплатная доставка в течении трех дней.</li>
                        <li>Скидка 10 % при заказе от 50$.</li>
                        <li>Бесплатные пробники с каждым заказом.</li>
                        <li>Бесплатная консультация специалиста. Наша команда на связи с 7.00 до 22.00 по будням,  чтобы поделиться 
                            добрым советом и помочь сделать правильный выбор.</li>
                    </ul>
                </div>
                <div className="main__about__product-img">
                            
                </div>
            </div>
        </div>
    )
}

                    