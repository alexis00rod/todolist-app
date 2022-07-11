import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
    const [userToLogin, setUserToLogin] = useState({})

    const loginUser = (e) => {
        e.preventDefault()
        console.log('userToLogin', userToLogin)
    }

    const hanldeUser = ({target: {name,value}}) => {
        setUserToLogin({
            ...userToLogin,
            [name]: value
        })
    }

    return (
        <main>
            <h1>Welcome to Task Manager App</h1>
            <section>
                <form className="flex flex-col ali-center gap-m" onSubmit={loginUser}>
                    <input type="email" placeholder="Enter your email" className="input" onChange={hanldeUser} />
                    <input type="password" placeholder="Enter your password" className="input"onChange={hanldeUser} />
                    <button className="btn btn-pri"><span>Login</span></button>
                </form>
                <div>
                    <p>You do not have an account?<Link to="/register">Sign Up</Link></p>
                </div>
            </section>
        </main>
    )
}