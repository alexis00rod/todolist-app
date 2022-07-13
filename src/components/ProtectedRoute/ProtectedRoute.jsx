import { useUserContext } from "../../context/UserContext"
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const {user,loading} = useUserContext()
    if(!loading) return <p>Loading</p>
    if(!user) return <Navigate to='/login' />
    return <>{children}</>
}
