
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Detection from './components/Detection'
import Footer from './components/Footer'
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

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white p-5 rounded-lg shadow">
              <h2>Total Potholes</h2>
              <h1 className="text-3xl font-bold text-red-500">120</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2>Detected Today</h2>
              <h1 className="text-3xl font-bold text-blue-500">25</h1>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2>Resolved</h2>
              <h1 className="text-3xl font-bold text-green-500">80</h1>
            </div>

          </div>

          {/* Detection Component */}
          <div className="bg-white p-6 mt-6 rounded-lg shadow">
            <Detection />
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
