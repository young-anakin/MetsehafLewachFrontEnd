// import { Header } from '@nestjs/common'
import Header from '@/app/Components/General/Header'
import Link from 'next/link'
import React from 'react'

// import JournalEntries from '@/app/Pages/JournalEntries'
const page = () => {
  return (
    <div className=' font-vidaloka h-full text-white bg-black  min-h-screen '>
            <div className="mx-auto w-full md:w-[900px] lg:w-[1200px] container">
                <Header/>
                <div className='text-center py-20 text-4xl'>
                    Micheal&apos;s Journal
                </div>

            <div className='flex items-center justify-center mx-auto w-[500px] '>

                <div className="flex magic-card">
                    <div className="flex flex-col magic-card-info text-[#F5F5DC] text-lg">
                        {/* <h1 className="title">Journal</h1> */}


                        <div className="journal-form-control pt-10">
                            <input className="journal-input journal-input-alt" placeholder="Search Journal ... "  type="text"/>
                            <span className="journal-input-border journal-input-border-alt"></span>
                        </div>

                        <Link href="../Pages/JournalEntries" className='hover:text-[#37FF8B] pt-10 duration-300'>Journal Entry</Link>
                        <Link href="../Pages/PastEntries" className='hover:text-[#37FF8B] duration-300'>Past Entries</Link>

                        <Link href="#" className='hover:text-[#37FF8B] duration-300'>Tags</Link>
                        <Link href = "#" className='hover:text-[#37FF8B] duration-300'>Achievements and Badges</Link>
                        <Link href = "#" className='hover:text-[#37FF8B] duration-300'>Community Challenges</Link>
                        {/* <Link href="#" className='hover:text-[#37FF8B]'>Add Tags</Link>
                        <Link href="#" className='hover:text-[#37FF8B]'>View Tags</Link> */}
                        <Link href="#" className='hover:text-[#37FF8B] duration-300'>Settings</Link>

                    </div>
                </div>


            </div>

            </div>
    </div>
  )
}

export default page