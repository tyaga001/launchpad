import React from 'react'
import Link from 'next/link'
import { loginDesigns } from '@/lib/loginDesigns'

const ShowcasePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Login Design Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loginDesigns.map((design) => (
          <div
            key={design.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{design.name}</h2>
              <p className="text-gray-600 mb-4">{design.description}</p>
              <Link
                href={`/showcase/${design.id}`}
                className="text-blue-500 hover:underline"
              >
                View Design
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowcasePage
