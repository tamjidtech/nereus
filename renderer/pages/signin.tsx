import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic
    console.log("Sign in with:", email, password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-sm">
        <div className="flex justify-center mb-8">
          <Link href="../home">
            <Image src="/logo.png" alt="Nereus Deep Work" width={250} height={80} />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">Sign in</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700">
              Email
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

          <div className="space-y-2">
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
            <div className="flex justify-end">
              <Link href="../forgot-password" className="text-sm text-gray-600">
                Forgot password?
              </Link>
            </div>
          </div>

          <Link href="../dashbord">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign in
            </button>

          </Link>


        </form>

        <div className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="../signup" className="text-gray-800 font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
