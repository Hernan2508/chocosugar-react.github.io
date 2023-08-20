import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './componentes/navbarheader/NavbarHeader'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemdetailcontainer/ItemDetailContainer';
import Cart from './componentes/cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './componentes/checkout/Checkout';

function App() {


  return (
    <>
        <BrowserRouter>
      <CartProvider>
          <NavbarHeader/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a ChocoSugar!!!"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a ChocoSugar!!!"/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 No Encontrado</h1>}/>
          </Routes>
      </CartProvider>  
        </BrowserRouter>
    </>
  )
}

export default App
