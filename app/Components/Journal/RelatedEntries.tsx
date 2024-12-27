import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'lucide-react'

const journalEntries = [
    {
      id: '2',
      title: 'Overcoming Challenges',
      createdAt: '2023-07-10T18:45:00Z',
      tags: ['perseverance', 'success'],
    },
    {
      id: '3',
      title: 'New Beginnings',
      createdAt: '2023-07-05T09:15:00Z',
      tags: ['goals', 'motivation'],
    },
    {
      id: '4',
      title: 'Lessons Learned',
      createdAt: '2023-06-30T14:20:00Z',
      tags: ['reflection', 'growth'],
    },
  ]
const RelatedEntries = () => {
  return (
    <div className='flex justify-between'>
        {journalEntries.map((entry) => (
        <Link  className='shadow-lg w-[380px]'  key = {entry.id} href = "/Pages/SpecificEntry">
            <div className='bg-[#FFFFFF] hover:bg-[#FFFBEB] duration-300 delay-100 rounded-lg flex flex-col border border-[#e9db5d] h-[125px] px-5 py-5 '>
                <div className='flex  justify-between'>
                    <h1 className='text-xl font-bold font-poppins text-[#92400E]'> {entry.title}</h1>
                    <ChevronRight className="h-5 w-5 text-amber-600 flex-shrink-0" />

                </div>
                    <p className="text-xs text-[#92400E] mt-1 font-poppins te">
                                {new Date(entry.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                                })}
                        </p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {entry.tags.map((tag) => (
                      <span key={tag} className=" font-mono gap-2 pr-2 justify-between py-1 rounded-full text-xs bg-[#eedfa4] text-[#92400E] flex items-center">
                        <div className="" />
                           {/* <svg height = {10} width = {10} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> */}
                          <div>
                            {tag}
                          </div>
                      </span>
                    ))}
                </div>
            
            </div>
        </Link>
        ))}
    </div>
  )
}

export default RelatedEntries