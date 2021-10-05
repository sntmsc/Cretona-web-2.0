import {createContext, useState} from 'react'

export const ContextCompras = createContext()

export const Compras = ({children}) => {
    const [compras, setCompras] = useState([])

    return(
        <ContextCompras.Provider value={{compras, setCompras}}>{children}</ContextCompras.Provider>
    )

}