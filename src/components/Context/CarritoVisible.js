import {createContext, useState} from 'react'

export const CartVisible = createContext()

export const CarritoVisible = ({children}) => {
    const [carritoToggle, setCarritoToggle] = useState(false)

    return(
        <CartVisible.Provider value={{carritoToggle, setCarritoToggle}}>{children}</CartVisible.Provider>
    )

}