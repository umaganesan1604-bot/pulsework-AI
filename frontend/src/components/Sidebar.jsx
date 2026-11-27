import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const linkStyle = ({ isActive }) =>
    `p-4 rounded-lg text-lg transition ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'text-black hover:bg-gray-200'
    }`

  return (
   <div className="w-full md:w-64 md:min-h-screen bg-white p-4 md:p-6 flex flex-row md:flex-col flex-wrap gap-3">

      <h2 className="text-xl font-bold mb-3">
        Menu
      </h2>

      <NavLink to="/" end className={linkStyle}>
        Dashboard
      </NavLink>

      <NavLink to="/detection" className={linkStyle}>
        Pothole Detection
      </NavLink>

      <NavLink to="/roadmap" className={linkStyle}>
        Road Map
      </NavLink>

      <NavLink to="/reports" className={linkStyle}>
        Reports
      </NavLink>

      <NavLink to="/settings" className={linkStyle}>
        Settings
      </NavLink>

    </div>
  )
}

export default Sidebar