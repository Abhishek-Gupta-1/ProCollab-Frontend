"use client"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

import { Demoprojects } from "@/constents"
import { Institution } from "@/constents";

const Page = () => {

    const [projects, setProjects] = useState<any>([]);

    const productId = 'sdnfsvfd';

    // useEffect(() => {
    //     getAllProjects();
    // }, [])


    // const getAllProjects = async() =>{
    //     try{

    //         const res = await axios.get('https://backend69.up.railway.app/get/projects');
    //         setProjects(res.data?.message)
    //         console.log(res.data?.message)

    //     }catch(err:any){
    //         console.log('Error In Getting the Projects');
    //     }
    // }

    return (
        <div className="flex justify-center bg-black h-full">
            <div className=" md:w-[1024px]">

                {/* search bar  */}
                <div className="flex justify-center p-4 text-white">
                    <div className="border w-full md:w-4/5 flex rounded-[20px]  shadow">
                        <Search className="mt-2 pl-2" />
                        <input type="text" className="w-full p-2 bg-transparent focus:border-none focus:outline-none placeholder:text-white" placeholder="Search" />
                    </div>
                </div>
                {/* ----------------Select Instituion---------------------- */}

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
                        Select Institution
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >

                            {
                                Institution.map((count: string, i: number) => (
                                    <option key={i}>{count}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>


                {/* projects  */}
                <div className=" flex flex-wrap flex-col md:flex-row justify-between  items-center">

                    {
                        Demoprojects.map((project: any, i: number) => (

                            <div key={i} className=" mt-8 mb-5  max-w-xs  bg-gray-900  border-gray-200 rounded-lg shadow  dark:border-gray-700">
                                <Link href={`/searchprojects/${project.id}`}>
                                    <div className="flex flex-col justify-between h-full">

                                        <div className="w-full">
                                            <Link href={`/searchprojects/${project.id}`}>
                                                <Image className="rounded-t-lg w-full" width={100} height={50} src='/mikasa.png' alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="p-5  flex flex-col flex-1 ">
                                            <a href={`/searchprojects/${project.id}`}>
                                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.shortdescription}</p>
                                            <Link href={`/searchprojects/${project.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}

export default Page