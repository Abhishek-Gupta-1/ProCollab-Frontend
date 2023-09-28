"use client";

import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { Fragment } from 'react'
import {  Menu, Transition } from '@headlessui/react'



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    const userId = Cookies.get('userid');
    const adminId = Cookies.get('adminid');

    const handleSignOut = () =>{
        Cookies.remove('userid');
        router.refresh();
    }

    return (


        <div className="flex flex-wrap place-items-center  mt-0 pt-0 ">
            <section className="relative mx-auto w-full">
                {/* navbar */}
                <nav className="flex justify-between bg-gray-900 text-white ">
                    <div className="px-5 xl:px-12 py-3 flex w-full items-center object-top">
                        <Link className="text-3xl font-bold font-heading" href="/">
                            <div className=' flex justify-center pt-0 mt-0 pb-0 mb-0'>
                                <Image src="/Nlogo.jpg" alt="ProCollab" className='bg-transparent' width={150} height={100} />
                            </div>
                        </Link>
                        {/* Nav Links */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li>
                                <Link className="hover:text-gray-200" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-200 " href="/searchprojects">
                                    Search Project
                                </Link>
                            </li>
                            {
                                userId &&
                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="/uploadproject">
                                        Upload Project
                                    </Link>
                                </li>
                            }
{/*                          
                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="/uploadproject">
                                        Upload Project
                                    </Link>
                                </li> */}
                            

                            {
                                adminId &&
                                <li>
                                    <Link className="hover:text-gray-200 cursor-pointer" href="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            }
                        </ul>
                        {/* Header Icons */}

                      {
                        !userId &&
                        <div className='bg-white rounded border border-yellow-400 absolute top-4 right-3'>
                                <Link href='/signin'>
                                    <p className='font-semibold text-black px-4 p-2 text-sm'>Get Started</p>
                                </Link>
                        </div>
                      }


                        {/* Profile DropDown */}

                        {
                            userId &&
                                <Menu as="div" className="relative pl-20 ml-14  ">
                                    <div>
                                        <Menu.Button className="relative rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute " />
                                            <Image
                                                className="h-8 w-8 rounded-full" width={32} height={32}
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/profile"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                                                    >
                                                        Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <p
                                                        onClick={handleSignOut}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                                                    >
                                                        Sign Out
                                                    </p>
                                                )}
                                            </Menu.Item>
                                        
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                        }



                    </div>

                    {/* Responsive navbar */}
                    
                    {/* <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>

                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 hover:text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </a> */}
                </nav>
            </section>
        </div>



    )
}
