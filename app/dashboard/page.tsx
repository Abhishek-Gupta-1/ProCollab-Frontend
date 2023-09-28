"use client"

import { getAllUniversityProject } from "@/api/apis";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import Link from "next/link";


const Page = () => {
  const id = Cookies.get('collageid');
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const res = await getAllUniversityProject(id);
      console.log(res);

    } catch (err) {
      console.log("error in getting the university Projects");
    }
  }

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 space-y-6">
        {/* ============================================================= */}

        <div className="justify-right text-right relative  bg-white px-6 sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="lg:pt-16 font-bold text-4xl text-left sm:pt-20">
            <p>ProCollab</p>
          </div>

          <div className=" relative mt-16 lg:h-32 md:h-8 sm:h-4 lg:mt-8 ml-20 md:w-full ">
            <div className=" lg:space-x-12 lg:space-y-8 space-x-8 pb-8 mb-12">
              <Link
                href="/searchprojects"
                className=" align-middle inline-block text-center bg-blue-500 shadow-lg px-8 py-2  rounded-md  text-sm font-semibold text-white "
              >
                Accept
              </Link>

              <Link
                href="/searchprojects"
                className=" text-align-middle inline-block  text-center bg-blue-500 px-8 py-2   rounded-md  text-sm font-semibold text-white "
              >
                Reject
              </Link>
            </div>
            <div className="h-fit  md:w-4/5  mt-7">
            </div>
          </div>
        </div>
        {/* ========================================================================== */}

        {/* ============================================================= */}

        <div className="justify-right text-right relative  bg-white px-6 sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="lg:pt-16 font-bold text-4xl text-left ">
            <p>Upchar</p>
          </div>

          <div className="relative mt-16 lg:h-32 md:h-8 sm:h-4 lg:mt-8 ml-20 md:w-full ">
            <div className=" lg:space-x-12 lg:space-y-8 space-x-8 pb-8 mb-12">
              <Link
                href="/searchprojects"
                className=" align-middle inline-block text-center bg-blue-500 shadow-lg px-8 py-2  rounded-md  text-sm font-semibold text-white "
              >
                Accept
              </Link>

              <Link
                href="/searchprojects"
                className=" text-align-middle inline-block  text-center bg-blue-500 px-8 py-2   rounded-md  text-sm font-semibold text-white "
              >
                Reject
              </Link>
            </div>
            <div className="h-fit  md:w-4/5  mt-7">
            </div>
          </div>
        </div>
        {/* ========================================================================== */}

        {/* ============================================================= */}

        <div className="justify-right text-right relative  bg-white px-6 sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="lg:pt-16 font-bold text-4xl text-left ">
            <p>Assist</p>
          </div>

          <div className="relative mt-16 lg:h-32 md:h-8 sm:h-4 lg:mt-8 ml-20 md:w-full ">
            <div className=" lg:space-x-12 lg:space-y-8 space-x-8 pb-8 mb-12">
              <Link
                href="/searchprojects"
                className=" align-middle inline-block text-center bg-blue-500 shadow-lg px-8 py-2  rounded-md  text-sm font-semibold text-white "
              >
                Accept
              </Link>

              <Link
                href="/searchprojects"
                className=" text-align-middle inline-block  text-center bg-blue-500 px-8 py-2   rounded-md  text-sm font-semibold text-white "
              >
                Reject
              </Link>
            </div>
            <div className="h-fit  md:w-4/5  mt-7">
            </div>
          </div>
        </div>
        {/* ========================================================================== */}

      </div>
    </div>

  )
}

export default Page