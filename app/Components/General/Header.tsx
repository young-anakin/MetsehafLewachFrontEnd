'use client'
import Link from 'next/link'
// import React from 'react'
import React, { useState } from "react";

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [signInOpen, setSignInOpen] = useState(false);
  
    // Open and close modal functions
    const openSignIn = () => setSignInOpen(true);
    const closeSignIn = () => setSignInOpen(false);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    <div className="flex items-center justify-between py-5 px-8 ">
        <div className="text-xl">
        <h1>METSEHAF LEWACH</h1>
        </div>
        <div className="flex gap-3 text-sm items-center text-[#F5F5DC]">
        {/* <Link href = "#">SIGN IN</Link> */}
        <button
            onClick={openSignIn}
            className="hover:text-[#37FF8B] duration-300"
        >
            SIGN IN
        </button>
        <button
            onClick={openModal}
            className="hover:text-[#37FF8B] duration-300"
        >
            CREATE ACCOUNT
        </button>
        <Link href = "#" className="hover:text-[#37FF8B] duration-300">BOOKS</Link>
        <Link href = "#" className="hover:text-[#37FF8B] duration-300">LISTS</Link>
        <Link href = "#" className="hover:text-[#37FF8B] duration-300">MEMBERS</Link>
        <Link href = "./Pages/Journal" className="hover:text-[#37FF8B] duration-300">JOURNAL</Link>            
        </div>

        {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="p-6 rounded-md shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <form className="form">
              <div className="flex flex-col font-poppins text-start title  text-xl mb-4">
                Welcome,<br />
                <span className="text-gray-500 font-poppins">Sign up to continue</span>
              </div>
              <input
                className="input w-full p-2 border border-gray-300 rounded-md mb-4"
                name="email"
                placeholder="Email"
                type="email"
              />
                <input
                className="input w-full p-2 border border-gray-300 rounded-md mb-4"
                name="email"
                placeholder="User Name"
                type="email"
              />
              <input
                className="input w-full p-2 border border-gray-300 rounded-md mb-4"
                name="password"
                placeholder="Password"
                type="password"
              />
              <div className="login-with flex justify-between mb-4">
                <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                  <b>t</b>
                </div>
                <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="56.6934px" viewBox="0 0 56.6934 56.6934" version="1.1"  id="Layer_1" height="56.6934px" className="icon"><path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path></svg>                </div>
                <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                <svg className="icon" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px"  xmlns="http://www.w3.org/2000/svg" ><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"></path></svg>                </div>
              </div>
              <button
                type="submit"
                className="button-confirm w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Let&apos;s go →
              </button>
            </form>
            {/* <button
              onClick={closeModal}
              className="mt-4 w-full text-center text-gray-500 hover:text-gray-700"
            >
              Close
            </button> */}
          </div>
        </div>
      )}

        {signInOpen && (
                <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
                onClick={closeSignIn} // Close modal when clicking outside
                >
                <div
                    className="p-6 rounded-md shadow-lg w-96"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                >
                    <form className="form">
                    <div className="flex flex-col font-poppins text-start title  text-xl mb-4">
                        Welcome,<br />
                        <span className="text-gray-500 font-poppins">Sign up to continue</span>
                    </div>
                        <input
                        className="input w-full p-2 border border-gray-300 rounded-md mb-4"
                        name="email"
                        placeholder="Username"
                        type="Name"
                    />
                    <input
                        className="input w-full p-2 border border-gray-300 rounded-md mb-4"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <div className="login-with flex justify-between mb-4">
                        <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                        <b>t</b>
                        </div>
                        <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="56.6934px" viewBox="0 0 56.6934 56.6934" version="1.1"  id="Layer_1" height="56.6934px" className="icon"><path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path></svg>                </div>
                        <div className="button-log bg-gray-200 p-2 rounded-md text-center cursor-pointer">
                        <svg className="icon" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px"  xmlns="http://www.w3.org/2000/svg" ><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"></path></svg>                </div>
                    </div>
                    <button
                        type="submit"
                        className="button-confirm w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Let&apos;s go →
                    </button>
                    </form>
                    {/* <button
                    onClick={closeModal}
                    className="mt-4 w-full text-center text-gray-500 hover:text-gray-700"
                    >
                    Close
                    </button> */}
                </div>
                </div>
            )}
    </div>
  )
}

export default Header