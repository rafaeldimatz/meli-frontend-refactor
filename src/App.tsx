import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Search from './component/navbar/Search'
import Product from './component/page/Product'
import Products from './component/page/Products'
import Error from './component/page/Error'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <Search/>
        <Routes>
          <Route path='/'/>
          <Route path='/items/:idItem'  element={<Products/>}/>
          <Route path='/items' element={<Product/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  );
}
export default App;
