import { useState,useEffect} from 'react'
import { useUserContext } from "../../context/UserContext"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import defaultPhoto from '../../assets/images/default-no-user-pic.jpg'

export const Header = () => {
    const {user} = useUserContext()
    const location = useLocation()
    const navigate = useNavigate()
    const [photo, setPhoto] = useState({})
    const [menu, setMenu] = useState(false)
    
    return (
        <header>
            <div className='w__max pos__rel flex ali-center jus-between gap-m h--max'>
                {
                    location.pathname !== "/"
                    && <button onClick={() => navigate(-1)} className='btn btn--link btn__ico'><i className="fa-solid fa-chevron-left"></i></button>
                
                }
                <h1 className='title'>Welcome {user.name}</h1>
                <div className='btn btn--menu' onClick={() => setMenu(!menu)}>
                    <img src={defaultPhoto} alt="photo" className='photo photo--navbar' />
                    <i className='fa-solid fa-chevron-down'></i>
                </div>
                {
                    menu &&
                    <ul className='menu'>
                        <li className='menu__item'>
                            <Link to='/user' className='btn btn--link btn__icotxt'>
                                <i className="fa-solid fa-user"></i>
                                <p>My account</p>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/user' className='btn btn--link btn__icotxt'>
                                <i className="fa-solid fa-gear"></i>
                                <p>Settings</p>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/user' className='btn btn--link btn__icotxt'>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <p>Logout</p>
                            </Link>
                        </li>
                    </ul>
                }
            </div>
        </header>
    )
}