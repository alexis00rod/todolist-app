import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signup } from '../../services/getData'

export const Signup = () => {
    const [userToSignup, setUserToSignup] = useState({})
    const [signUp, setSignUp] = useState()
    const navigate = useNavigate()

    const signUpUser = async (e) => {
        e.preventDefault()
        try {
            await signup(userToSignup.userEmail,userToSignup.userPass)
            navigate("/login")
        } catch (err) {
            setSignUp(`${err.code}`)
        }
    }

    const handleUser = ({target: {name,value}}) => {
        setUserToSignup({
            ...userToSignup,
            [name]: value
        })
    }

    return (
        <main>
            <h1>Signup</h1>
            <section>
                {
                    // register 
                    // ? <p>Resgister!</p>
                    // : <p></p>
                    signUp && <p>{signUp}</p>   
                }
                <form className="flex flex-col ali-center gap-m" onSubmit={signUpUser}>
                    <input type="email" name="userEmail" id="userEmail" placeholder="Enter your email" className="input" onChange={handleUser}/>
                    <input type="password" name="userPass" id="userPass" placeholder="Enter your password" className="input"onChange={handleUser}/>
                    <button className="btn btn-pri"><span>Login</span></button>
                </form>
                <div>
                    <p>Do you already have an account created?<Link to="/login">Log in</Link></p>
                </div>
            </section>
        </main>
    )
}