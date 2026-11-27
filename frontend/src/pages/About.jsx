import React from 'react'

const About = () => {
  return (
    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-4">
        About
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-3">
          About Our Project
        </h2>

        <p className="text-gray-600 text-lg">
          Pothole Detection AI is a smart road monitoring
          system that identifies potholes using Artificial
          Intelligence and helps improve road conditions.
        </p>

      </div>

    </div>
  )
}

export default About