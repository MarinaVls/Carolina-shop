import React, { useState } from 'react'
import '../src/css/style.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Context } from './Context/index'
import {addToBasket, getBasketData} from './utils/addToBasket'
import { GoToTop }from './utils/GoToTop'

export const App = () => {
  const basketData = getBasketData();
  const [basket, setBasket] = useState(basketData)
  const [listOfImage, setListOfImage] = useState(JSON.parse(localStorage.getItem('shopData')) || [])

  return (
    <Context.Provider value = {{ addToBasket, basket, setBasket, listOfImage, setListOfImage}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <GoToTop />
      </div>
    </Context.Provider>
      
  )
}
