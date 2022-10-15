import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to='/home'>Home</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;