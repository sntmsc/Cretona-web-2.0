import {createContext, useState} from 'react'

export const MenuVisibleContext = createContext()

export const MenuVisible = ({children}) => {
    const [menuToggle, setMenuToggle] = useState(false)

    return(
        <MenuVisibleContext.Provider value={{menuToggle, setMenuToggle}}>{children}</MenuVisibleContext.Provider>
    )

}