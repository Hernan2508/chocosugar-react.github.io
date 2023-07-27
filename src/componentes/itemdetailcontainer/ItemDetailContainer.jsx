import './itemdetailcontainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../postres'
import ItemDetail from '../itemdetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const { itemId} = useParams()

    useEffect(() =>{

        getProductById(itemId)
            .then(response =>{
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
            })

    }, [itemId])


  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...productos}/>
    </div>
  )
}

export default ItemDetailContainer