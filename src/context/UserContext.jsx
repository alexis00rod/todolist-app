import { useContext, createContext } from 'react'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)
export const UserContextProvider = ({children}) => {
    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}