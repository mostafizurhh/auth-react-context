import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config'
import { getAuth } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Shihan' })
    // const user = { displayName: 'Shihan' }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;