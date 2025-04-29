"use client"

import { createContext, useContext, useState, useEffect } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"
import { auth } from "../firebase-config"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const register = async (email, password, displayName) => {
    try {
      setError("")
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, {
        displayName: displayName,
      })
      return userCredential
    } catch (error) {
      setError(error.message)
      return null
    }
  }

  const login = async (email, password) => {
    try {
      setError("")
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(error.message)
      return null
    }
  }

  const logout = () => {
    return signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    register,
    login,
    logout,
    error,
    setError,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
