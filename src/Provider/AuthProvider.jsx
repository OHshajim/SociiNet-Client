import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // show user
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => { return subscribe() }
    }, [])

   
    // logout 
    const logout = () => {
        return signOut(auth)
    }

    const info = {
        logout,
        loading,
        createUser,
        user,
        loginUser,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;