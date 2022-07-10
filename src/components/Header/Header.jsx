import { useLocation, useNavigate } from "react-router-dom"
import defaultUserImg from "../../assets/images/default-no-user-pic.jpg"

export const Header = () => {
    let location = useLocation()
    let navigate = useNavigate()

    return (
        <header>
            {
                location.pathname !== "/" && <button className="btn btn-ter" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>
            }
            <h1>Title</h1>
            {/* <button><img src={defaultUserImg} alt="defaul-user-pic" /></button> */}
        </header>
    )
}