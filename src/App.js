import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/css/style.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Context } from './Context/index'
import {addToBasket} from './utils/index'


export const App = () => {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])

  return (
    <Context.Provider value = {{ addToBasket, basket, setBasket}}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
      
  )
}
