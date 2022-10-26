import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')

    const { logIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                toast.success('logged in successfully')
                navigate(from, {replace: true});
            })
            .catch(e => {
                setError(e.message)
                toast.error('failed to login')
                console.error(e)
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                setError('')
                console.log(user)
                toast.success('logged in successfully')
                navigate(from, {replace: true});
            })
            .catch(e => {
                setError(e.message)
                toast.error('failed to login')
                console.error(e)
            })
    }

    const handleGitHubLogIn = () => {
        gitHubLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('logged in successfully')
                setError('')
                navigate(from, {replace: true});
            })
            .catch(e => {
                setError(e.message)
                toast.error('failed to login')
                console.error(e)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-3xl text-xl font-bold">Please, Login to account now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
                            </label>
                            {
                                error &&  <p className="label-text-alt text-error">{error}</p>
                            }
                        </div>
                        <div className='flex items-center justify-center'>
                            <button onClick={handleGoogleLogIn} className='btn mx-2'><FaGoogle /></button>
                            <button onClick={handleGitHubLogIn} className='btn mx-2'><FaGithub /></button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;