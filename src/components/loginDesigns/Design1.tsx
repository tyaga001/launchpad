import React from 'react'

interface Design1Props {
  onSubmit: (email: string, password: string) => void
  onForgotPassword: () => void
  onCreateAccount: () => void
}

const Design1: React.FC<Design1Props> = ({
  onSubmit,
  onForgotPassword,
  onCreateAccount,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rememberMe, setRememberMe] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-600"></div>
      </div>

      <div className="absolute top-0 left-0 -translate-x-[60%] -translate-y-[75%] z-10">
        <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="relative self-stretch px-4 py-16 overflow-hidden bg-blue-600 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24">
          {/* Left side content */}
          {/* ... (include the left side content from the provided HTML) ... */}
        </div>

        <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto xl:max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Welcome back!
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-12 space-y-12 sm:mt-16 lg:mt-20"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="rememberMe"
                        className="text-sm font-normal text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-sm font-normal text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Sign in
              </button>
            </form>

            <p className="mt-6 text-sm font-normal text-gray-500">
              Don't have an account?{' '}
              <button
                onClick={onCreateAccount}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Create free account
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design1
