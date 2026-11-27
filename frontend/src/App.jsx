import React from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Detection from './pages/Detection'
import RoadMap from './pages/RoadMap'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Home from './pages/Home'
import About from './pages/About'
import Admin from './pages/Admin'

import { Routes, Route } from 'react-router-dom'


const App = () => {

  return (

    <>

      <Navbar />

      <div className="flex flex-col md:flex-row">

        <Sidebar />

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/detection" element={<Detection />} />

          <Route path="/roadmap" element={<RoadMap />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/admin" element={<Admin />} />

          <Route
            path="*"
            element={
              <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold">
                  Page Not Found
                </h1>
              </div>
            }
          />

        </Routes>

      </div>

      <Footer />

    </>

  )
}

export default App