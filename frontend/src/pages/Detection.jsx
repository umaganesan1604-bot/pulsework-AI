import React, { useState } from 'react'

import potholeSchema from '../lib/potholeSchema'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'


const Detection = () => {

  const [success, setSuccess] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({

    resolver: zodResolver(potholeSchema)

  })


  const submit = (data) => {

    console.log(data)

    setSuccess(true)

    reset()

  }


  const inputStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"


  return (

    <div className="flex-1 bg-gray-100 p-8 min-h-screen">

      <h1 className="text-3xl font-bold mb-3">
        Pothole Detection
      </h1>

      <p className="text-gray-600 mb-8">
        Report potholes and provide road information.
      </p>


      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pothole Report Form
        </h2>


        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-5"
        >

          {/* Name */}

          <div>

            <label className="block font-semibold mb-2">
              Reporter Name
            </label>

            <input
              {...register("name")}
              placeholder="Enter your name"
              className={inputStyle}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.name?.message}
            </p>

          </div>


          {/* Email */}

          <div>

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={inputStyle}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>

          </div>


          {/* Location */}

          <div>

            <label className="block font-semibold mb-2">
              Road Location
            </label>

            <input
              {...register("location")}
              placeholder="Enter road location"
              className={inputStyle}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.location?.message}
            </p>

          </div>


          {/* Severity */}

          <div>

            <label className="block font-semibold mb-2">
              Pothole Severity
            </label>

            <select
              {...register("severity")}
              className={inputStyle + " bg-white"}
              defaultValue=""
            >

              <option value="" disabled>
                Select Severity
              </option>

              <option value="Low">Low</option>

              <option value="Medium">Medium</option>

              <option value="High">High</option>

            </select>

            <p className="text-red-500 text-sm mt-1">
              {errors.severity?.message}
            </p>

          </div>


          {/* Description */}

          <div>

            <label className="block font-semibold mb-2">
              Pothole Description
            </label>

            <textarea
              {...register("description")}
              placeholder="Describe the pothole..."
              rows="4"
              className={inputStyle}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.description?.message}
            </p>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Pothole Report
          </button>


          {/* Success Message */}

          {success && (

            <div className="bg-green-100 text-green-700 p-4 rounded-lg font-semibold">

              Pothole report submitted successfully!

            </div>

          )}

        </form>

      </div>

    </div>

  )

}

export default Detection