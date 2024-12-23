import Link from 'next/link'
import React from 'react'
// import React from '../../app/Pages/SpecificEntry/'

const EntryPage = () => {
  return (
    <Link href = "/Pages/SpecificEntry" className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
        <div className="margin"></div>

        <div className="p-6 text-gray-800 max-w-lg mx-auto relative">
            <div className="absolute top-2 left-4 text-xs text-gray-500">01 Jan 2024</div>
            <h2 className="text-xl font-bold mt-6 mb-2 text-gray-900">First Entry</h2>
            <p className="text-sm text-gray-600 mb-4 italic">
                <span className="font-semibold">Tags:</span> steven, love, earth
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">Content:</span> keep him addicted, make every day count, and leave a memory that lasts forever...
            </p>
        </div>

    </Link>
  )
}

export default EntryPage