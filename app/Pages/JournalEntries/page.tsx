"use client"
import React from 'react'
// import Link from 'next/link'
// import FroalaEditor from "react-froala-wysiwyg";
import Header from '@/app/Components/General/Header'
// import Tiptap from '@/app/Components/General/TipTap';
import TextEntry from '@/app/Components/General/TextEntry';
import DropDown from '@/app/Components/Journal/DropDown';
import GreenNeonInput from '@/app/Components/Journal/GreenNeonInput';

const page = () => {
  return (
    <div className=' font-vidaloka h-full text-white bg-black  min-h-screen '>

            <div className="mx-auto w-full md:w-[900px] lg:w-[1200px] container">
                <Header/>
                <div className='text-center py-20 text-4xl'>
                    Micheal&apos;s Journal
                </div>
                <div className='flex flex-col w-[1000px] mx-auto '>
                    <div className='flex flex-col gap-3'>
                        <h1>Journal Name</h1>
                        <GreenNeonInput/>
                    </div>
                    <div className = "flex flex-col gap-3 pt-4">
                        <h1>Journal Tags</h1>
                        <DropDown />
                    </div>
                </div>
            <div className='flex flex-col mx-auto w-[1000px] pt-5 gap-3'>
                <h1>Journal Entry</h1>
                <div className='flex justify-center items-center'>
                  <TextEntry/>
                </div>


            </div>
            <div className='w-[1000px] mx-auto pt-5'>
                <button className="submit-button">Submit</button>
            </div>

            </div>
    </div>



  )
}

export default page