import React, { useEffect, useState } from 'react'
import '../src/css/style.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Context } from './Context/index'
import {addToBasket} from './utils/addToBasket'
import { GoToTop }from './utils/GoToTop'


export const App = () => {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])

  return (
    <Context.Provider value = {{ addToBasket, basket, setBasket}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <GoToTop />
      </div>
    </Context.Provider>
      
  )
}
