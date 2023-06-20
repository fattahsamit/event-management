/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider}  from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleSignIn = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {

        setLoading(true)
        return signOut(auth)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const authInfo = {

        user,
        loading,
        createUser,
        logIn,
        googleSignIn,
        logOut


    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;