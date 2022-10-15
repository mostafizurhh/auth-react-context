import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext); /* use AuthContext by destructuring */
    return (
        <div>
            {user?.displayName && <h2>This is Home of {user.displayName}</h2>}
        </div>
    );
};

export default Home;