import { onAuthStateChanged } from 'firebase/auth'
import { useState, useContext, createContext, useEffect } from 'react'
import { auth, loginChanged } from '../services/getData'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const unsubuscribe = loginChanged(setUser,setLoading)
        return ()=> unsubuscribe() 
    },[])

    return (
        <UserContext.Provider value={{user, loading}}>
            {children}
        </UserContext.Provider>
    )
}