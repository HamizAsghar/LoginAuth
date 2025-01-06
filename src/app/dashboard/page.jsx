'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/')
    }
  }, [status, router])

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });

      Swal.fire({
        icon: 'success',
        title: 'Logged Out Successfully',
        text: `Goodbye, ${session?.user?.name}!`,
        confirmButtonText: 'OK'
      }).then(() => {
        router.push('/');
      });
    } catch (error) {
      console.error('Logout error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong during logout!'
      });
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={session.user?.image || '/placeholder.svg'}
                  alt={session.user?.name || 'Profile'}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Welcome, {session.user?.name}!</h1>
                <p className="text-gray-500">{session.user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11.707 4.707a1 1 0 0 0-1.414-1.414L10 9.586 6.707 6.293a1 1 0 0 0-1.414 1.414L8.586 11l-3.293 3.293a1 1 0 1 0 1.414 1.414L10 12.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 11l3.293-3.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Dashboard Content</h2>
          <p className="text-gray-600">You are successfully logged in!</p>
          <div className="mt-4">
            <h3 className="font-medium">Your Profile Information:</h3>
            <ul className="mt-2 space-y-2">
              <li>User ID: {session.user?.id}</li>
              <li>Name: {session.user?.name}</li>
              <li>Email: {session.user?.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}







