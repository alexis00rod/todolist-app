import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Register = () => {
    const [userToRegister, setUserToRegister] = useState({})

    const registerUser = (e) => {
        e.preventDefault()
        console.log('userToRegister', userToRegister)
    }

    const handleUser = ({target: {name,value}}) => {
        setUserToRegister({
            ...userToRegister,
            [name]: value
        })
    }

    return (
        <main>
            <h1>Register</h1>
            <section>
                <form className="flex flex-col ali-center gap-m" onSubmit={registerUser}>
                    <input type="email" name="register-email" id="register-name" placeholder="Enter your email" className="input" onChange={handleUser}/>
                    <input type="password" name="register-password" id="register-password" placeholder="Enter your password" className="input"onChange={handleUser}/>
                    <button className="btn btn-pri"><span>Login</span></button>
                </form>
                <div>
                    <p>Do you already have an account created?<Link to="/login">Log in</Link></p>
                </div>
            </section>
        </main>
    )
}