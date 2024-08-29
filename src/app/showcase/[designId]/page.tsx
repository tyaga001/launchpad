import React from 'react'
import { loginDesigns } from '@/lib/loginDesigns'

export async function generateStaticParams() {
  return loginDesigns.map((design) => ({
    designId: design.id,
  }))
}

const DesignShowcase: React.FC<{ params: { designId: string } }> = ({
  params,
}) => {
  const design = loginDesigns.find((d) => d.id === params.designId)

  if (!design) {
    return <div>Design not found</div>
  }

  const DesignComponent = design.component

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{design.name}</h1>
      <p className="mb-4">{design.description}</p>
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <DesignComponent />
      </div>
    </div>
  )
}

export default DesignShowcase
