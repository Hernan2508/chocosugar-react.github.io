import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './componentes/navbarheader/NavbarHeader'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import About from './componentes/productos/Productos'

function App() {


  return (
    <>
      <NavbarHeader/>
      <ItemListContainer
        greeting="Bienvenido a ChocoSugar!!!"
      />
      <About/>
    </>
  )
}

export default App
