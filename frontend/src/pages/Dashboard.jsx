import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {

  return (
    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-3">
        Dashboard
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Welcome to Pothole Detection AI System
      </p>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Total Potholes</h2>
          <p className="text-4xl font-bold text-red-500 mt-2">
            120
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Detected Today</h2>
          <p className="text-4xl font-bold text-blue-500 mt-2">
            25
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Resolved</h2>
          <p className="text-4xl font-bold text-green-500 mt-2">
            80
          </p>
        </div>

      </div>

      {/* Pothole Detection */}

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Pothole Detection
        </h2>

        <p className="text-gray-600 mb-5">
          Detect potholes from road images using AI.
        </p>

        <Link
          to="/detection"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Start Detection
        </Link>

      </div>

    </div>
  )
}

export default Dashboard