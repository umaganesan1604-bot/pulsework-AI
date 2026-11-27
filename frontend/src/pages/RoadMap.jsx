import React from 'react'

const RoadMap = () => {

  return (

    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Road Map
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Pothole Locations
        </h2>

        <p className="text-gray-600 mb-4">
          View and monitor reported pothole locations.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">

          <p className="font-semibold text-blue-700">
            Road Location Monitoring
          </p>

          <p className="mt-2">
            Pothole location tracking will be displayed here.
          </p>

        </div>

      </div>

    </div>

  )
}

export default RoadMap