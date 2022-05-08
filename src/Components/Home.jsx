import logo from '../image/logo.png'
import Model from '../image/home-page.png'
import infoReklama1 from '../image/home-page2.png'
import infoReklama2 from '../image/home-page3.png'
import bird from '../image/home-page4.png'
import arrowRight from '../image/arrow-right.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export const Home = () => {

    useEffect( () => {    
        let sliderValues = {
            '01': 'Бесплатная доставка в течении трех дней',
            '02': 'Скидка 10 % при заказе от 50$',
            '03': 'Бесплатные пробники с каждым заказом'
        }
        let index = 0; 
        let sliderCount = document.querySelector('.promo__slider__count');
        let sliderDescription = document.querySelector('.promo__slider__description')
        let listOfSliderValues = Object.entries(sliderValues);
        setInterval(() => {
                const [key, value]  = listOfSliderValues[index]
                sliderCount.innerHTML = `${key}`;
                sliderDescription.innerHTML = `${value}`;
                index++; 

                if(index > listOfSliderValues.length-1){
                    index = 0;
                }    
        },5000)
    }, []);

    return(
        <main className="main">
            <div className="main__wrapper">
                <section className="promo">
                    <div className="container">
                        <div className="promo__wrapper">
                            <div className="promo__wrapper__img">
                                <img src={Model} alt="Model" />
                                <div className="promo__slider">
                                    <div className="promo__slider__count">01</div>
                                    <div className="promo__slider__line">
                                        <hr />
                                    </div>
                                    <div className="promo__slider__description">Бесплатная доставка в течении трех дней</div>
                                    <Link to='/shop'><button className="button promo__slider__btn">В магазин</button></Link>
                                </div>
                            </div>
                            {/* <div className="promo__slider">
                                <div className="promo__slider__count">02</div>
                                <div className="promo__slider__line">
                                    <hr />
                                </div>
                                <div className="promo__slider__description">Скидка 10 % при заказе от 50$</div>
                                <Link to='/shop'><button className="button promo__slider__btn">В магазин</button></Link>
                            </div>
                            <div className="promo__slider">
                                <div className="promo__slider__count">03</div>
                                <div className="promo__slider__line">
                                    <hr />
                                </div>
                                <div className="promo__slider__description">Бесплатные пробники с каждым заказом</div>
                                <Link to='/shop'><button className="button promo__slider__btn">В магазин</button></Link>
                            </div> */} 
                        </div>  
                    </div>
                </section>
                <section className="info">
                    <div className="container">
                            <div className="info__wrapper">
                                <div className="info__wrapper__image-1">
                                    <img src={infoReklama1} alt="reklama" />    
                                </div>
                                <div className="info__wrapper__image-2">
                                    <img src={infoReklama2} alt="reklama"/>
                                    <div className="info__wrapper__reklama">
                                        <div className="logo">
                                        <img src={logo} alt="logo"/> 
                                        </div>
                                        <hr />
                                        <p>Попробуйте энергетическую уходовую косметику Carolina для идеальной кожи.</p>
                                        <Link to='/shop'><button className="button promo__slider__btn">В магазин</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <div className="main__wrapper__description">
                    <div className="container">
                        <div className="description__wrapper">
                            <div className="description__bird">
                                <img src={bird} alt="bird" />  
                            </div>
                            <h1>Натуральная косметика для любого типа кожи</h1>
                            <p>
                                Большой ассортимент натуральной декаративной косметики от европейского производителя. 
                                Товары в каталоге Carolina изготавливаются из натуральных природных ингредиентов, не содержат сульфатов, 
                                парабенов, силиконов, SLS и других продуктов нефтепереработки или критичных синтетических ингредиентов.
                            </p>
                            <div>
                                <Link to='/shop'><img src={arrowRight} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}



