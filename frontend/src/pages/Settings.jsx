import React from 'react'

const Settings = () => {

  return (

    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          System Settings
        </h2>

        <div className="mb-5">

          <label className="block font-semibold mb-2">
            Admin Name
          </label>

          <input
            type="text"
            defaultValue="Admin"
            className="w-full p-3 border rounded-lg"
          />

        </div>

        <div className="mb-5">

          <label className="block font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            defaultValue="admin@gmail.com"
            className="w-full p-3 border rounded-lg"
          />

        </div>

        <div className="mb-5">

          <label className="block font-semibold mb-2">
            System Name
          </label>

          <input
            type="text"
            defaultValue="Pothole Detection AI"
            className="w-full p-3 border rounded-lg"
          />

        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Save Settings
        </button>

      </div>

    </div>

  )
}

export default Settings