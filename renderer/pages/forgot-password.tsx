// pages/forgot-password.js
import Link from 'next/link';
import { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real-world scenario, you would send the email to the backend here
        setMessage('Password reset instructions have been sent to your email.');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                <div className="mt-4 text-center">
                    <Link href="/signin">
                        <span className="text-blue-500 hover:underline">Back to Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
