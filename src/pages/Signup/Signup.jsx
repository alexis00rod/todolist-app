import { signupAuth } from '../../services/getData'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export const Signup = () => {
    const [userToSignup, setUserToSignup] = useState({})
    const [signup, setSignup] = useState()
    const navigate = useNavigate()

    const signupUser = async (e) => {
        e.preventDefault()
        try {
            await signupAuth(userToSignup.email,userToSignup.password)
            navigate("/login")
        } catch (err) {
            setSignup(err.code)
        }
    }

    const handleUserToSignup = ({target: {name,value}}) => {
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
                    signup && <p>{signup}</p> 
                }
                <form className="flex flex-col ali-center gap-m" onSubmit={signupUser}>
                    <input type="email" name="email" placeholder='Enter your email' className='input' onChange={handleUserToSignup} />
                    <input type="password" name="password" placeholder='Enter your password' className='input' onChange={handleUserToSignup} />
                    <button className="btn btn-pri"><span>Signup</span></button>
                </form>
                <div>
                    <p>Do you already have an account created?<Link to="/login">Log in</Link></p>
                </div>
            </section>
        </main>
    )
}