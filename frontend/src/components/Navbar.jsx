import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-semibold ${
      isActive
        ? 'bg-white text-blue-600'
        : 'text-white hover:bg-blue-500'
    }`

  return (

    <nav className="bg-blue-600 text-white p-5 flex flex-wrap justify-between items-center gap-4">

      <h1 className="text-2xl font-bold">
        Pothole Detection AI
      </h1>

      <div className="flex flex-wrap items-center gap-3">

        <NavLink to="/home" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>

        <NavLink to="/admin" className={linkStyle}>
          Admin
        </NavLink>

      </div>

    </nav>

  )
}

export default Navbar