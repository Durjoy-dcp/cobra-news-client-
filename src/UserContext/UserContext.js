import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const Googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const signIn = () => {
        return signInWithPopup(auth, Googleprovider)
    }
    const LogOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(user);
        })
        return () => unsubscribe();
    }, [])
    const authInfo = { user, LogOut, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;