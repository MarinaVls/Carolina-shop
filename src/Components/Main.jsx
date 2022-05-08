import { Routes, Route } from 'react-router-dom'
import { Shop } from './Shop';
import { Basket } from './Basket'
import { Product } from './Product'
import { Contacts } from './Contacts'
import { About } from './About'
import { Home } from './Home';
import { NotFound } from './NotFound';

export const Main = () => {
    return(
      <main className="main">     
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/product/:idParam" element={<Product />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
      </main>
    )
}