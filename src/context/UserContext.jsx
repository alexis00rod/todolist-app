import { onAuthStateChanged } from 'firebase/auth'
import { useState, useContext, createContext, useEffect } from 'react'
import { auth, AuthState, loginChanged } from '../services/getData'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)
export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        AuthState(setUser,setLoading)
    },[])

    return (
        <UserContext.Provider value={{user,loading}}>
            {children}
        </UserContext.Provider>
    )
}