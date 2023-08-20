import React, { useState } from 'react'

const Checkout = () => {

    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState('')


    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    console.log(user)

    const finalizarCompra = (e) =>{
        e.preventDefault()
    } 

  return (
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
  )
}

export default Checkout