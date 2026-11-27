import React from 'react'

const Reports = () => {

  return (

    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-5">
          Pothole Detection Reports
        </h2>

        <table className="w-full text-left">

          <thead className="bg-blue-100">

            <tr>
              <th className="p-4">S.No</th>
              <th className="p-4">Location</th>
              <th className="p-4">Severity</th>
              <th className="p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-b">
              <td className="p-4">1</td>
              <td className="p-4">Main Road</td>
              <td className="p-4 text-red-500">High</td>
              <td className="p-4">Pending</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">2</td>
              <td className="p-4">Bus Stand Road</td>
              <td className="p-4 text-yellow-500">Medium</td>
              <td className="p-4">Resolved</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">3</td>
              <td className="p-4">College Road</td>
              <td className="p-4 text-green-500">Low</td>
              <td className="p-4">Pending</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default Reports