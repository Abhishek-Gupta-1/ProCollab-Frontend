"use client";
// my code

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Navbar from '@/components/dashboard/Navbar'
// import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>

            <div className="relative isolate h-screen pt-0 mt-0 lg:px-8 bg-black pl-2 pr-2 w-full flex-1 ">

                <div className="flex justify-center items-center h-full">

                    <div className="text-left w-4/5 md:w-3/5 mt-[-5rem] md:mt-[-3rem]">
                      
                         <div className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl space-y-5 font-extrabold flex flex-col md:flex-row  gap-5">

                         <h1 className='text-white mt-4'>Inspire</h1>
                                <div className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">
                                    <TypewriterComponent
                                        options={{
                                            strings:[
                                                "Collaborate..",
                                                "Innovate..",
                                            
                                            ],
                                            autoStart:true,
                                            loop:true
                                        }}
                                    />
                                </div>

                                 
                        </div>

                        <div >
                            <p className="mt-6 font-mono text-2xl  leading-8 bg-gradient-to-r  text-white inline-block text-transparent bg-clip-text">
                                Inspiring Minds
                            </p>
                            
                            <div className="mt-10 flex flex-col md:flex-row justify-left  md:gap-x-6 ">
                                <Link
                                    href="/searchprojects"
                                    className=" bg-indigo-600 shadow-blue-500/50 rounded-md p-4 md:p-0 md:px-3.5 md:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Search Projects
                                </Link>
                                <Link href="/uploadproject" className="rounded-md mt-7 md:mt-0 bg-indigo-600 p-4 md:p-0 md:px-3.5 md:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Upload Projects
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
