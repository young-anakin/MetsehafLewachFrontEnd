import Header from '@/app/Components/General/Header'
import EntryPage from '@/components/JournalComponents/EntryPage'

// import { HoverEffect } from '@/components/ui/card-hover-effect'
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
                    <EntryPage/>
                    <EntryPage/>
                    <EntryPage/>

                    <EntryPage/>
                    <EntryPage/>
                    <EntryPage/>

                    <EntryPage/>
                    <EntryPage/>
                    <EntryPage/>

                    {/* <HoverEffect items={items} className="mt-10" /> */}
                    
                </div>




            </div>
    </div>
  )
}

export default page