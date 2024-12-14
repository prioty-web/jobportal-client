import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //   Register
    const createUser =( email, password ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    

    // Login
    const signInUsers = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password )
    }

    // Logout

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)


    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);

        })
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo ={
        user, 
        loading,
        createUser,
        signInUsers,
        signOutUser

    }


    return (
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;