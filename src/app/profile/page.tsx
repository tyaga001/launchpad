import { withAuth } from '@/components/withAuth'

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">User Profile</h1>
      {/* Add user profile information here */}
    </div>
  )
}

export default withAuth(ProfilePage)
