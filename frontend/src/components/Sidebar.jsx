
import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-white w-56 min-h-screen p-5 shadow">

      <h2 className="text-lg font-bold mb-5">
        Menu
      </h2>

      <ul className="space-y-4">
        <li className="bg-blue-500 text-white p-3 rounded">
          Dashboard
        </li>

        <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">
          Pothole Detection
        </li>

        <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">
          Road Map
        </li>

        <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">
          Reports
        </li>

        <li className="p-3 hover:bg-gray-100 rounded cursor-pointer">
          Settings
        </li>
      </ul>

    </div>
  )
}

export default Sidebar
