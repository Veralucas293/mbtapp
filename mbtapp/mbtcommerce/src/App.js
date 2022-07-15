import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
<CartProvider>
<BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
</BrowserRouter>
</CartProvider>
    </div>
  );
}

export default App;