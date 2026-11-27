
import React from 'react'

const Admin = () => {

  return (

    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to Pothole Detection AI Admin Panel
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">50</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Potholes</h2>
          <p className="text-3xl font-bold text-red-500">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Resolved Issues</h2>
          <p className="text-3xl font-bold text-green-500">80</p>
        </div>

      </div>

      <div className="bg-white p-8 rounded-xl shadow mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Admin Information
        </h2>

        <p>Admin Name: Administrator</p>
        <p>Role: Admin</p>
        <p>System: Pothole Detection AI</p>

      </div>

    </div>

  )

}

export default Admin
