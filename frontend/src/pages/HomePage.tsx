import { useState } from 'react'

const HomePage = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement subscription logic
    console.log('Subscribe:', email)
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Find Your Dream Job in the Music Industry
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Curated job opportunities from the best music industry boards, delivered to your inbox.
        </p>
      </section>

      {/* Email Subscription */}
      <section className="max-w-md mx-auto">
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Get job alerts in your inbox
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Subscribe to Job Alerts
          </button>
        </form>
      </section>

      {/* Featured Jobs Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest Jobs</h2>
        <div className="grid gap-6">
          {/* Placeholder Job Cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900">Senior Music Producer</h3>
                <p className="text-gray-600">Universal Music Group • Los Angeles, CA</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                    Full-time
                  </span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                    Remote
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  Join our team as a Senior Music Producer and help shape the future of music...
                </p>
                <a href="#" className="btn-secondary inline-block">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage 