import { Routes, Route } from 'react-router-dom'
import { Shop } from '../Shop/Shop';
import { Basket } from '../Basket/Basket'
import { Product } from '../Product/Product'
import { Contacts } from '../Contacts/Contacts'
import { About } from '../About/About'
import { Home } from '../Home/Home';

export const Main = () => {
  return(
      <main className="main"> 
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/product/:idParam" element={<Product />} />
          </Routes>
      </main>
  )
}