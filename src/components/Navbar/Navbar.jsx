import { Link, NavLink, useLocation } from "react-router-dom"

export const Navbar = () => {
    let location = useLocation()

    return (
        <div className="navbar">
            <ul>
                {
                    location.pathname === "/add-task"
                        ? <button>Add task</button>
                        : <>
                            <li>
                                <NavLink to="/" className="link link-btn fs-l">
                                    <i className="fa-solid fa-house"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/reminder" className="link link-btn fs-l">
                                    <i className="fa-solid fa-bell"></i>
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/add-task" className="btn btn-pri fs-l">
                                    <i className="fa-solid fa-plus"></i>
                                </Link>
                            </li>
                        </>
                }
            </ul>
        </div>
    )
}
