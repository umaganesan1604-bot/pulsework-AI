import React from 'react'

const Home = () => {
  return (
    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-4">
        Home
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold text-blue-600 mb-3">
          Welcome to Pothole Detection AI
        </h2>

        <p className="text-gray-600 text-lg">
          An AI-based system designed to detect potholes
          and improve road safety.
        </p>

      </div>

    </div>
  )
}

export default Home