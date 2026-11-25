
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-2">
            Dashboard
          </h1>

          <p className="text-gray-600 mb-6">
            Welcome to Pothole Detection AI System
          </p>

          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Total Potholes</h2>
              <h1 className="text-3xl font-bold text-red-500">120</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Detected Today</h2>
              <h1 className="text-3xl font-bold text-blue-500">25</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-gray-500">Resolved</h2>
              <h1 className="text-3xl font-bold text-green-500">80</h1>
            </div>
          </div>

          <div className="bg-white p-6 mt-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              Pothole Detection
            </h2>

            <input type="file" accept="image/*" />

            <br />

            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Detect Pothole
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
