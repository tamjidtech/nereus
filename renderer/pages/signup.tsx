import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

function handleSuccessfulSignup(userData: any) {
  localStorage.setItem("isNewUser", "true")


  window.location.href = "/dashbord"
}

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    const userData = {
      email,
      password,
    }

    console.log("Sign up with:", userData)

    handleSuccessfulSignup(userData)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-sm">
        <div className="flex justify-center mb-8">
          <Link href="../home">
            <Image src="/logo.png" alt="Nereus Deep Work" width={250} height={80} />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-left mb-8 p-1">Sign up</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 p-1">
            <label htmlFor="email" className="block text-gray-700">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="Email"
              required
            />
          </div>

          <div className="space-y-2 p-1">
            <label htmlFor="password" className="block text-gray-700">
              Enter your password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2 pb-8 p-1">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded-md pr-10"
                placeholder="Repeat password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign up
          </button>
        </form>

        <div className="mt-6 text-center p-4 text-gray-600">
          Already have an account?{" "}
          <Link href="../signin" className="text-gray-800 font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
