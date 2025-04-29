"use client"

import { useState, useEffect } from "react"
import Login from "./Login"
import Register from "./Register"

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [authMode, setAuthMode] = useState(initialMode) // "login" or "register"

  // Update authMode when initialMode prop changes
  useEffect(() => {
    setAuthMode(initialMode)
  }, [initialMode])

  if (!isOpen) return null

  const switchToRegister = () => setAuthMode("register")
  const switchToLogin = () => setAuthMode("login")

  return (
    <>
      {authMode === "login" ? (
        <Login onClose={onClose} switchToRegister={switchToRegister} />
      ) : (
        <Register onClose={onClose} switchToLogin={switchToLogin} />
      )}
    </>
  )
}

export default AuthModal
