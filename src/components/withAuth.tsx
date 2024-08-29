'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function withAuth(WrappedComponent) {
  return function ProtectedRoute(props) {
    const router = useRouter()
    const { data: session, status } = useSession()
    const isUser = !!session?.user
    const loading = status === 'loading'

    if (loading) {
      return <div>Loading...</div>
    }

    if (!loading && !isUser) {
      router.push('/auth/signin')
      return null
    }

    return <WrappedComponent {...props} />
  }
}
