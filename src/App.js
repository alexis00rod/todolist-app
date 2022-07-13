import {Outlet} from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { UserContextProvider } from "./context/UserContext";

export const App = () => {
    return (
        <>
        <UserContextProvider>
        <ProtectedRoute>
            <Outlet />
            <Navbar />
        </ProtectedRoute>
        </UserContextProvider>
        </>
  );
}
