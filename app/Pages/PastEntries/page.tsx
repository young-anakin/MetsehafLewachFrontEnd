import Header from '@/app/Components/General/Header'
import React from 'react'

const page = () => {
  return (
    <div className=' font-vidaloka h-full text-white bg-black  min-h-screen '>
            <div className="mx-auto w-full md:w-[900px] lg:w-[1200px] container">
                <Header/>
                <div className='flex justify-between py-20  mx-12'>
                    <div className='flex flex-col text-xl'> 
                        <h1 className='text-2xl'>
                            Micheal&apos;s Entries
                        </h1>
                        <div className='flex'>
                            <h4 className='text-sm'>
                                3 Total Entries |
                            </h4>
                            {/* <p>|</p> */}
                            <h4 className='text-sm px-1'>
                                Created on Mon. 10/28/2024
                            </h4>
                        </div>
                    </div>
                    

                    <button className="NewEntry-button">
                        <span className='text-black'>New Entry</span>
                    </button>




                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
                    <div className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
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


                    </div>
                    <div className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
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

                    </div>
                    <div className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
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

                    </div>
                    <div className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
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

                    </div>
                    <div className="page bg-gray-100 p-4 border border-gray-300 rounded shadow-md">
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

                    </div>
                </div>




            </div>
    </div>
  )
}

export default page