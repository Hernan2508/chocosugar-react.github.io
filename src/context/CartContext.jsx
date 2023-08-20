import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})


export const CartProvider = ( { children }) =>{
    const [cart, setCart] = useState([])
    
    console.log(cart)
    const addItem = (item, quantity) => {

        if(isInCart(item.id)){
            console.log('El producto ya fue agregado')
            setCart(cart.map((product) => {
                if(product.id === item.id){
                    return {...product, quantity: product.quantity + quantity}
                } else{
                    return product
                }
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        } 
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

  
     const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some((item) => item.id === itemId)
    }

    const totalQuantity = () =>{
        return cart.reduce((acc, item) => acc + item.quantity, 0) 
    }

    const total = () =>{
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0 )
    }



    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )

}