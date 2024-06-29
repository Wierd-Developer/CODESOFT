import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    useEffect(() => {
        const existingData = localStorage.getItem('cart')

        if (existingData) setCart(JSON.parse(existingData))
    }, [])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}
const useCard = () => useContext(CartContext)
export { CartProvider, useCard }