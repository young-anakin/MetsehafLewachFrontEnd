import Header from '@/app/Components/General/Header'
import EntryPage from '@/components/JournalComponents/EntryPage'
import SpecificChallengePage from '@/components/JournalComponents/SpecificChallengePage'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='font-vidaloka h-full text-white bg-[#FFFBEB] min-h-screen'>
      <div className='bg-[#FEF3C7]'>
        <div className="mx-auto w-full md:w-[900px] lg:w-[1200px]">
          <Header />
        </div>
      </div>
      <div className="mx-auto w-full md:w-[900px] lg:w-[1200px]">
        <div className='flex justify-between py-20 mx-12'>
          <div className='flex flex-col text-xl text-[#92400E]'>
            <h1 className='text-xl font-semibold font-poppins text-[#92400E]'>
              30 Days of Mindfulness Challenge
            </h1>
            <div className='flex'>
              <h4 className='text-sm'>
                5 Total Milestones |
              </h4>
              <h4 className='text-sm px-1'>
                Created on Mon. 01/01/2024
              </h4>
            </div>
          </div>
          
          <Link href="/Pages/JournalEntries">
            <button className="flex items-center gap-3 justify-center rounded font-sans text-sm text-white bg-[#D97706] px-7 h-[30px]">
              <svg width={15} height={15} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_iconCarrier">
                  <title>ink-pen</title>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="icon" fill="#ffffff" transform="translate(71.447342, 64.000000)">
                      <path d="M237.238,46.437 L330.114,139.313 L280.552658,288 L15.466,376.362 L179.038345,212.613806 C180.797325,213.083146 182.645775,213.333333 184.552658,213.333333 C196.334733,213.333333 205.885991,203.782075 205.885991,192 C205.885991,180.217925 196.334733,170.666667 184.552658,170.666667 C172.770583,170.666667 163.219325,180.217925 163.219325,192 C163.219325,193.915222 163.471705,195.771497 163.945022,197.537382 L1.42108547e-14,361.66 L88.552658,96 L237.238,46.437 Z M291.219325,-1.42108547e-14 L376.552658,85.3333333 L341.428,120.457 L256.095,35.124 L291.219325,-1.42108547e-14 Z" id="Combined-Shape"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className=''>New Milestone</span>
            </button>
          </Link>
        </div>

        <div className='flex mx-12 flex-col gap-5'>
          <SpecificChallengePage />
        </div>
      </div>
    </div>
  )
}

export default Page

