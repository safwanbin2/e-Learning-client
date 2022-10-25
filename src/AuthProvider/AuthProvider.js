import React from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { createContext } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { displayName: "safwan bin" };
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;