import { getProviders } from 'next-auth/react'
import SignInComponent from '@/components/SignInComponent'

export default async function SignIn() {
  const providers = await getProviders()

  return <SignInComponent providers={providers} />
}
