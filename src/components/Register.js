"use client"

import { useState } from "react"
import { useAuth } from "./AuthContext"
import "../auth-style.css"

const Register = ({ onClose, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { register, error, setError } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    try {
      const result = await register(formData.email, formData.password, formData.name)
      if (result) {
        onClose()
      }
    } catch (err) {
      console.error("Registration error:", err)
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

          <h2>Create Account</h2>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-input-group">
              <span className="input-icon">👤</span>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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

            <div className="auth-input-group">
              <span className="input-icon">🔒</span>
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Register"}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-switch">
            Already have an account?
            <button className="auth-switch-button" onClick={switchToLogin}>
              Login
            </button>
          </p>

          <div className="auth-footer">
            By registering, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
