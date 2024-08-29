import React from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { loginDesigns } from '@/lib/loginDesigns'

interface LoginWrapperProps {
  designId: string
}

const LoginWrapper: React.FC<LoginWrapperProps> = ({ designId }) => {
  const router = useRouter()
  const design = loginDesigns.find((d) => d.id === designId)

  if (!design) {
    return <div>Design not found</div>
  }

  const LoginComponent = design.component

  const handleSubmit = async (email: string, password: string) => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      // Handle error
      console.error(result.error)
    } else {
      // Redirect to dashboard or home page
      router.push('/dashboard')
    }
  }

  const handleForgotPassword = () => {
    router.push('/forgot-password')
  }

  const handleCreateAccount = () => {
    router.push('/signup')
  }

  return (
    <LoginComponent
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      onCreateAccount={handleCreateAccount}
    />
  )
}

export default LoginWrapper
