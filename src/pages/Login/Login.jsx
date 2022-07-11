import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login, loginAuth } from '../../services/getData'

export const Login = () => {
    const [userToLogin, setUserToLogin] = useState({})
    const [login, setLogin] = useState()
    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await loginAuth(userToLogin.email,userToLogin.password)
            navigate('/')
        } catch (err) {
            setLogin(err.code)
        }
    }

    const handleUser = ({target: {name,value}}) => {
        setUserToLogin({
            ...userToLogin,
            [name]: value
        })
    }

    return (
        <main>
            <section>
                <div className='container'>
                    <h2 className='title txt-cen m-bot-m'>Log in</h2>
                    {
                        login && <p>{login}</p>
                    }
                    <form className="flex flex-col ali-center gap-m m-bot-l" onSubmit={loginUser}>
                        <input type="email" name="email" placeholder='Enter your email' className='input' onChange={handleUser} required/>
                        <input type="password" name="password" placeholder='Enter your password' className='input' onChange={handleUser} required/>
                        <button className="btn btn-pri fs-m"><span>Login</span></button>
                    </form>
                    <div className='flex flex-col ali-center gap-s'>
                        <p>don't have an account?</p>
                        <Link to="/signup" className='btn btn-sec fs-m'>Sign Up</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}