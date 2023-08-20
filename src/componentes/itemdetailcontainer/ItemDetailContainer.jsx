import './itemdetailcontainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemdetail/ItemDetail'
import { useParams } from "react-router-dom";
import { db } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)

    const { itemId} = useParams()

    
    useEffect(() =>{

        setLoading(true)

        const docRef = doc(db, 'postres', itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProducto(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })


    }, [])



  return (
    <div className='ItemDetailContainer'>
        <ItemDetail producto = {producto}/>
    </div>
  )
}

export default ItemDetailContainer