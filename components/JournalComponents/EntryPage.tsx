import Link from 'next/link'
import React from 'react'
const journalEntries = [
  {
    id: '1',
    title: 'A Day of Reflection',
    createdAt: '2023-07-15T21:30:00Z',
    tags: ['personal', 'growth', 'mindfulness'],
  },
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
  {
    id: '5',
    title: 'Future Plans',
    createdAt: '2023-06-25T11:05:00Z',
    tags: ['goals', 'planning'],
  },
]
// import React from '../../app/Pages/SpecificEntry/'

const EntryPage = () => {
  return (
    <div className='flex flex-col gap-4 bg-[#FFFBEB]'>
      {journalEntries.map((entry) => (
        <Link  className='shadow-lg '  key = {entry.id} href = "/Pages/SpecificEntry">
            <div className='bg-[#FFFFFF] hover:bg-[#FFFBEB] duration-300 delay-100 rounded-lg flex flex-col border border-[#e9db5d] h-[125px] px-5 py-5 '>
              <div className='flex  justify-between'>
                <h1 className='text-xl font-bold font-poppins text-[#92400E]'> {entry.title}</h1>
                <svg width = {30} height = {30} viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M430.602 443.728H172.941v409.721h257.661l9.723 22.763h123.159l12.965-22.763h251.179V437.225z" fill="#ED8F27"></path><path d="M563.484 888.712H440.325l-11.495-7.59-6.48-15.173H172.94l-12.5-12.5v-409.72l12.5-12.5H430.5l396.923-6.502 12.705 12.498V853.45l-12.5 12.5H583.714l-9.367 16.449-10.863 6.313z m-114.906-25h107.641l9.367-16.449 10.862-6.313h238.68V449.931l-384.525 6.298H185.44V840.95h245.162l11.495 7.59 6.481 15.172z" fill="#300604"></path><path d="M772.531 386.823s-221.458-42.273-266.298 50.402l-22.982 384.568h52.685l4.862-31.937h231.733V386.823z" fill="#FCE3C3"></path><path d="M535.936 831.793h-52.685l-9.982-10.597 22.981-384.568 0.98-3.759c11.444-23.653 33.769-41.182 66.351-52.099 24.92-8.351 56.024-12.892 92.449-13.499 61.296-1.015 116.074 9.29 118.376 9.729l8.125 9.822v403.034l-10 10H549.39l-3.568 23.441-9.886 8.496z m-42.07-20h33.477l3.568-23.441 9.886-8.495h221.734V395.259c-17.44-2.796-60.6-8.781-106.461-7.984-93.223 1.611-127.655 29.096-139.979 52.604l-22.225 371.914z" fill="#300604"></path><path d="M224.797 386.823H469.99v403.034H224.797z" fill="#FCE3C3"></path><path d="M469.99 799.856H224.797l-10-10V386.822l10-10H469.99l10 10v403.034l-10 10z m-235.193-20H459.99V396.822H234.797v383.034z" fill="#300604"></path><path d="M292.542 310.406s139.34 22.474 190.709 81.026c27.337 31.16 26.78 73.506 26.78 73.506v317.628c0 12.645-6.106 24.506-16.384 31.825l-10.396 7.403s0.118-26.71-27.886-44.677-162.823-66.744-162.823-66.744V310.406z" fill="#FCE3C3"></path><path d="M489.052 829.938l-15.801-8.189c-0.013-0.789-0.575-21.645-23.286-36.216-21.401-13.731-114.557-49.018-160.825-65.758l-6.598-9.403V310.406l11.593-9.872c5.834 0.94 143.502 23.743 196.634 84.304 29.188 33.269 29.287 77.311 29.262 80.148v317.579c0 15.851-7.694 30.793-20.583 39.971l-10.396 7.402z m-186.51-126.567c27.82 10.177 132.917 49.092 158.224 65.328 17.225 11.052 25.318 25.077 29.12 35.95a29.13 29.13 0 0 0 10.145-22.084l0.001-317.76c0.003-0.365 0.059-39.017-24.297-66.778-40.047-45.646-139.256-68.81-173.192-75.589v380.933zM610.066 444.946h123.76v27.902h-123.76zM610.066 510.959h123.76v27.902h-123.76zM665.936 689.082h62.532v27.902h-62.532zM633.087 194.47l16.4 11.448-80.858 115.834-16.4-11.448zM725.26 204.73l13.734 14.54L634.785 317.7l-13.733-14.539zM800.489 240.542l13.142 15.076-52.696 45.935-13.142-15.076zM468.638 187.397l27.52 56.292-17.968 8.784-27.52-56.292zM331.501 204.24l120.28 98.428-12.666 15.478-120.28-98.427zM243.412 238.813l42.402 17.49-7.626 18.488-42.402-17.49z" fill="#300604"></path></g></svg>
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
                           <svg height = {10} width = {10} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
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

export default EntryPage