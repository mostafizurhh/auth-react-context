import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.displayName)

    /* handle sign out button */
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className='flex-1'>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                </div>
                <div className='flex-none gap-2'>
                    {user?.email && <span>Welcome {user.email}</span>}
                </div>

                {/*************************************
                    signin and signout button toggling 
                 **************************************/}

                <div className='pl-2'>
                    {user?.email ?
                        <button onClick={handleLogOut} className="btn btn-xs btn-success">Sign out</button>
                        :
                        <Link to='/login'><button className="btn btn-xs btn-success">Sign In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;