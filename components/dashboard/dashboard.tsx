"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Navbar from '@/components/dashboard/Navbar'
import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className='bg-white mt-[14rem]  md:mt-[10rem] md:w-[800px] '>


            <div className="text-[25px] flex sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold ">
                <div className='flex text-3xl md:text-6xl lg:text-7xl flex-col mr-3 mt-5'>
                    <h1>Inspire</h1>
                    <p className="mt-6 font-light text-sm leading-8 text-gray-600">Inspiring Minds </p>
                </div>

                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Collaborate..",
                                "Innovate..",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>

            <div>

                <div className="mt-10 flex justify-left gap-x-6">
                    <Link
                        href="/searchprojects"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Explore Projects
                    </Link>
                    <Link href="/uploadproject" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Upload Projects
                    </Link>
                </div>
            </div>

        </div>
    )
}
