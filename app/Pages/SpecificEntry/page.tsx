import Header from '@/app/Components/General/Header'
// import TagComponent from '@/app/Components/Journal/Tags'
import React from 'react'

const page = () => {
  return (
    <div className=' font-vidaloka h-full text-white bg-black  min-h-screen '>
            <div className="mx-auto w-full md:w-[900px] lg:w-[1200px] container">
                <Header/>
            

                    <div className='flex flex-col pt-10'>
                        {/* Title */}
                        <div className='flex text-white justify-between px-10 pb-10'>
                            <h1 className='text-3xl '>Third Title</h1>
                            
                            <div className='flex flex-col items-end'>
                                <p> Logged on : Monday, 28 October 2024</p>
                                <p> 116 words</p>
                            </div>
                        </div>

                        <div className="flex mx-auto title-card w-[900px] h-[70px] py-10">
                            <div className="title-card-info text-white flex gap-5">
                                <p className="text-white">Technology</p>
                                <p className="text-white">Lifestyle</p>
                                <p className="text-white">Travel</p>
                                <p className="text-white">Programming</p>

                            </div>
                        </div>

                        

                    
                    
                    </div>

            </div>
    </div>
  )
}

export default page