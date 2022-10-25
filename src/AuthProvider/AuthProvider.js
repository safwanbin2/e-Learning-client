import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { createContext } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // functions
    // email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // updatinnguser
    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    // signing in user email pass
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google Singin 
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // github signin
    const gitHubLogIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }
    // sigining out
    const logOut = () => {
        return signOut(auth);
    }


    // setting user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, logIn, logOut, updateUser, googleLogIn, gitHubLogIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;