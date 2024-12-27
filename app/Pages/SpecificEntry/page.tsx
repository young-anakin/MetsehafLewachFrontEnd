// import Header from '@/app/Components/General/Header'
// import TagComponent from '@/app/Components/Journal/Tags'
import RelatedEntries from '@/app/Components/Journal/RelatedEntries'
import React from 'react'

const page = () => {
    const journalEntries = [
        {
          id: '1',
          title: 'A Day of Reflection',
          createdAt: '2023-07-15T21:30:00Z',
          tags: ['personal', 'growth', 'mindfulness'],
        },
      ]

  return (
    <div className=' font-sans h-full text-[#92400E] bg-[#FFFBEB]  min-h-screen  '>
            <div className="mx-auto w-full md:w-[900px] lg:w-[1200px] ">
                
                
                <div className='flex justify-between pt-10 text-sm'>
                    
                    <button className='flex text-nowrap items-center gap-5 hover:bg-[#FEF3C7] duration-200 delay-75 rounded-lg py-2 px-3'>
                        <svg width={15} height={15} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#92400e" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#92400e" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                        <h2>Back to Journal</h2>
                    </button>
                    
                    <div className='flex gap-2 '>
                        <button className='bg-white py-2 flex items-center justify-center gap-3  px-3 border rounded-lg border-[#92400e] hover:bg-[#FEF3C7] duration-300 '> 
                            <svg width = {15} height = {15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>   
                            <span className='text-xs'>Edit</span>
                        </button>
                        <button className='bg-white py-2 flex items-center justify-center gap-3  px-3 border rounded-lg border-[#b13535] hover:bg-[#ffe9dc] duration-300 '> 
                            <svg width = {15} height = {15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 11V17" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>     
                            <span className='text-[#b13535] text-xs'>Delete</span>
                        </button>
                    </div>
                </div>


                <div className='flex flex-col bg-[#FFFFFF] rounded-md px-7 py-10 mt-10 shadow-lg border  border-amber-200 gap-2'>
                    <h1 className='text-3xl font-semibold'>A Day of Reflection</h1>
                    <div className='text-xs flex gap-4'>
                        <p>July 16, 2023 at 12:30 AM</p>
                        <p>238 words</p>
                    </div>

                    <p className='pt-4 text-sm'>Today was a day of deep introspection. As I sat in my favorite coffee shop, watching the world go by, I couldn&apos;t help but reflect on how far I&apos;ve come in the past year. The aroma of freshly brewed coffee and the soft chatter of fellow patrons created the perfect atmosphere for contemplation.

                    <br/><br/>I thought about the challenges I&apos;ve faced and overcome, the relationships I&apos;ve nurtured, and the personal growth I&apos;ve experienced. It&apos;s amazing how much can change in just 365 days. I feel a sense of pride in my accomplishments, but also a hunger for continued self-improvement.

                    <br/><br/>Looking back, I realize that every obstacle I encountered was an opportunity for growth. The difficult conversations, the moments of self-doubt, and the times when I stepped out of my comfort zone – they all contributed to shaping who I am today. I&apos;ve learned to embrace uncertainty and view challenges as stepping stones rather than roadblocks.

                    <br/><br/>As I sip my coffee and jot down these thoughts, I&apos;m filled with a sense of gratitude. Gratitude for the lessons learned, for the people who&apos;ve supported me, and for the strength I&apos;ve discovered within myself. This journey of self-discovery is ongoing, and I&apos;m excited to see where it leads next.

                    <br/>Tomorrow is a new day, full of possibilities. I&apos;m ready to face it with an open heart and a curious mind, always seeking to learn, grow, and become the best version of myself.</p>
                        {journalEntries.map((entry) => (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {entry.tags.map((tag) => (
                            <span key={tag}  className=" font-mono gap-2 pr-2 justify-between py-1 rounded-full text-xs bg-[#eedfa4] text-[#92400E] flex items-center">
                                <div className="" />
                                <svg height = {10} width = {10} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <div>
                                    {tag}
                                </div>
                            </span>
                            ))}
                        </div>
                    
                        ))}
                </div>

                <div className='pt-11'>
                    <h1 className='font-bold text-2xl pb-7'>Related Entries</h1>
                    <RelatedEntries/>

                </div>

            
            
            </div>
    </div>
  )
}

export default page