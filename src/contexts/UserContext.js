import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    /******************************************************** 
     creation and authentication user with email and password 
     ********************************************************/

    const [user, setUser] = useState({ displayName: 'Shihan' })
    // const user = { displayName: 'Shihan' }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    /* get user info when the Auth State changes. as this API is in outside of our function scope but we need this info, we are using useEffect() to get the value */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            setUser(presentUser);
            console.log(presentUser);
        })
        return () => unsubscribe();
    })

    /********************************************** 
     creation and authentication user with Google 
     **********************************************/
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { user, createUser, signIn, logOut, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;