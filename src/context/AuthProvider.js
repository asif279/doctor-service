import React, { createContext, useEffect, useState } from 'react';
import  {createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../config/firebase.config';

export const AuthContext= createContext();
    const auth = getAuth(app);
    const provider =  new GoogleAuthProvider();
   
   

 const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
            
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInUser =(email,password)=>{
        setLoading(true);
        
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser=(userInfo)=>{
        
        return updateProfile(auth.currentUser,userInfo);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    const signInGoogle=()=>{
        setLoading(true);

        return signInWithPopup(auth,provider);
    }


    useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log("User Observing");
    setUser(currentUser);
    setLoading(false);
  })

  return () => unsubscribe();


    },[])
   

    const AuthInfo=
    {
        createUser,
        signInUser,
        user,
        logOut,
        signInGoogle,
        updateUser,
        loading
       
    }

   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;