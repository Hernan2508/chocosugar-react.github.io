import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase";


const Checkout = () => {

    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState('')
    const[orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext)

    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    console.log(user)

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('Los campos son obligatorios')
        }else{
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
             .then((response) => {
                setOrderId(response.id)/* console.log(response.id)) */
                clearCart()
            })
             .catch((error) => console.log(error))
        }
    } 

  return (
    <div>
        {orderId !== '' 
        ? <div>
            <h2>Felicitaciones! Tú Orden fue generada con éxito</h2>
            <h5>Su Orden de Registro es: {orderId}</h5>
        </div> 
        : 
        <div>
            <h2>Terminar compra</h2>
            <h5>Por favor rellenar los datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className='mb-3'>
                    <label className='form-label'>Nombres Completos</label>
                    <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombres y Apellidos' name='name'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Número de Telefono</label>
                    <input className='form-control' onChange={datosComprador} type='number' placeholder='+051' name='phone'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Dirección de Email</label>
                    <input className='form-control' onChange={datosComprador} type='mail' placeholder='@correo.com' name='mail'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Repetir Email</label>
                    <input className='form-control' type='mail' placeholder='@correo.com' name='mail' onChange={((e) => setValidateEmail(e.target.value))}/>
                </div>
                <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail}>Generar Orden</button>
            </form>
        </div>
        }
    </div>
    
  )
}

export default Checkout