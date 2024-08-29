'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignInComponent({ providers }) {
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="mb-4">
          <button
            onClick={() => signIn(provider.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <div className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={() => signIn('email', { email })}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Sign in with Email
        </button>
      </div>
    </div>
  )
}
