import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.displayName)

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
                <div className='pl-2'>
                    <button onClick={handleLogOut} className="btn btn-xs btn-success">Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default Header;