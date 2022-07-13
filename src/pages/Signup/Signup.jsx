import { signupAuth } from '../../services/getData'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export const Signup = () => {
    const [userToSignup, setUserToSignup] = useState({})
    const [signupError, setSignupError] = useState()
    const navigate = useNavigate()

    const signupUser = async (e) => {
        e.preventDefault()
        try {
            await signupAuth(userToSignup.email,userToSignup.password)
            navigate('/login')
        } catch (err) {
            setSignupError(err.code)
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
            <section>
                <div className='container p-top-l'>
                    <h2 className='title m-bot-m'>Sign up</h2>
                    {
                        signupError 
                        && <div className='msg msg-error'>
                            <span>{signupError}.</span>
                            </div>
                    }
                    <form className="flex flex-col ali-center gap-m m-bot-l" onSubmit={signupUser}>
                        <input type="email" name="email" placeholder='Enter your email' className='input' onChange={handleUserToSignup} required/>
                        <input type="password" name="password" placeholder='Enter your password' className='input' onChange={handleUserToSignup} required/>
                        <button className="btn btn-pri fs-m"><span>Sign up</span></button>
                    </form>
                    <div className='flex flex-col ali-center gap-s'>
                        <p>already have an account?</p>
                        <Link to="/login" className='btn btn-sec fs-m'>Log in</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}