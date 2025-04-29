"use client"

import { useState } from "react"
import { useAuth } from "./AuthContext"
import "../auth-style.css"

const Login = ({ onClose, switchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login, error, setError } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await login(formData.email, formData.password)
      if (result) {
        onClose()
      }
    } catch (err) {
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="auth-background">
      <div className="auth-overlay">
        <div className="auth-container">
          <button className="auth-close" onClick={onClose} aria-label="Close">
            ×
          </button>

          <div className="auth-logo">
            <h1>MovieZone</h1>
          </div>

          <h2>Welcome Back</h2>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-input-group">
              <span className="input-icon">✉️</span>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-input-group">
              <span className="input-icon">🔒</span>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-switch">
            Don't have an account?
            <button className="auth-switch-button" onClick={switchToRegister}>
              Register
            </button>
          </p>

          <div className="auth-footer">
            <a href="#">Forgot password?</a> • <a href="#">Terms of Service</a> • <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
