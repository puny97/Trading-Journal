'use client'

import { MdLock } from 'react-icons/md'
import { SlEqualizer } from 'react-icons/sl'

const GlobalLogin = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-150">
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-white pb-15 pt-10 px-10">
        <div className="flex items-center justify-center mb-4 bg-[#2B57F5] rounded-lg p-3">
          <SlEqualizer size={20} color="white" />
        </div>
        <h1 className="text-2xl font-bold mb-1">Trade Journal</h1>
        <h3 className="text-md text-gray-600 text-center">Track every trade, day by day.</h3>
        <button
          className="flex items-center justify-center gap-2 mt-6 px-4 py-2 bg-[#2B57F5] text-white rounded-lg scale-100 hover:bg-[#1A3DBF] hover:scale-110 transition-colors duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#2B57F5]/50"
          type="submit"
        >
          <MdLock />
          <span>Connect to Fyers Account</span>
        </button>
        <span className="text-sm text-gray-500 mt-4 text-center">
          You'll be redirected to Fyers to authorize <br /> access.
        </span>
      </div>
    </section>
  )
}
export default GlobalLogin
