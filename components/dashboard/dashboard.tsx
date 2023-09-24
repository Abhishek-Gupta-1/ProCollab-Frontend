"use client";
// my code

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Navbar from '@/components/dashboard/Navbar'
// import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>

            {/* <div className="bg-black"> */}

            <div className="relative isolate pt-0 mt-0 lg:px-8 bg-black pl-2 pr-2 w-full flex-1">

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">

                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#8e5cf1]  to-[#dc0f94] inline-block text-transparent bg-clip-text  sm:text-6xl">
                            Inspire Collaborate Innovate
                        </h1>
                        <p className="mt-6 font-medium text-2xl leading-8 bg-gradient-to-r from-[#8e5cf1]  to-[#dc0f94] inline-block text-transparent bg-clip-text">
                            Inspiring Minds
                        </p>
                        <div className="mt-10 flex justify-left gap-x-6">
                            <Link
                                href="/searchprojects"
                                className="bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Search Projects
                            </Link>
                            <Link href="/uploadproject" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Upload Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    )
}
