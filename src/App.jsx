import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './componentes/navbarheader/NavbarHeader'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemdetailcontainer/ItemDetailContainer';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavbarHeader/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a ChocoSugar!!!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a ChocoSugar!!!"/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 No Encontrado</h1>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting="Bienvenido a ChocoSugar!!!"/>
      <ItemDetailContainer/> */}
    </>
  )
}

export default App
