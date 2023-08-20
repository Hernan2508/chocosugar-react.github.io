import "./itemlistcontainer.css";
import ItemList from "../itemlist/ItemList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase";



const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  /* Usamos Firebase */

  useEffect(() =>{
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, "postres"), where('categoria', '==', categoryId))
      : collection(db,'postres')
      
    getDocs (collectionRef)
      .then((response) =>{
          const productsAdapted = response.docs.map((doc)=>{
            const data = doc.data()
            return{id:doc.id,...data}
            
          })

          console.log(productsAdapted)
          // Ordenar los productos adaptados por algún criterio, por ejemplo, por su ID
          productsAdapted.sort((a, b) => a.id.localeCompare(b.titulo));
          setProductos(productsAdapted)
      })
      .catch(error =>{
          console.log(error)
      })
      .finally(() =>{
          setLoading(false)
      })

  }, [categoryId])   


  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{props.greeting}</h1>
        <p className="lead">Encuentra, personaliza y realiza tu pedido con los diferentes productos que ofrecemos para ti en tan solo unos pocos pasos.<br/>
        La personalización y el diseño al alcance de tus manos.</p>
        <hr className="my-4"/>
        <p>Te ofrecemos nuestro manual de información para que no te pierdas ninguno de nuestros productos.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Buscar más</a>
      </div>
      <ItemList productos = {productos}/>
    </div>
  );
};

export default ItemListContainer;
