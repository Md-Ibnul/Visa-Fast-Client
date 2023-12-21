import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut} from "firebase/auth";
import axios from 'axios'
import app from '../firebase/firebase.config';
import { getRole } from '../api/Auth';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      if (user) {
        getRole(user?.email)
        .then(data => {
          setRole(data);
        })
      }
    }, [user])
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, provider)
    }
  
    const logOut = () => {
      setLoading(true)
      return signOut(auth)
    }
  
    const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      })
    }
  

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
  
        if(currentUser){
          axios.post('http://localhost:5000/jwt',{
            email: currentUser.email
          })
          .then(data => {
            localStorage.setItem('access-token', data.data.token);
            setLoading(false)
          })
        }
        else{
          localStorage.removeItem('access-token')
        }
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
        signInWithGoogle,
        signIn,
        updateUserProfile,
        logOut,
        role
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;