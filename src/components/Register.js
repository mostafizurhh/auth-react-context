import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    /*************************************************************** 
     create new user with email and password with help of context API
     ****************************************************************/
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate(); /* go to home page after register */

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        /* create new user with context API*/
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/home'); /* go to home page after register */
            })
            .catch(error => {
                console.error(error)
            })
    }

    /*************************************************** 
    create new user with Google and help of context API
    ****************************************************/
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-userName">userName</span>
                                </label>
                                <input type="text" placeholder="choose a username" className="input input-bordered" name='userName' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-email">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-password">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label mt-2">
                                    <small>Already have an account?</small>
                                    <Link to='/login' className="label-text-alt link link-hover">Login Here!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        {/* google Signin */}

                        <button onClick={handleGoogleSignIn} className="btn btn-info">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;