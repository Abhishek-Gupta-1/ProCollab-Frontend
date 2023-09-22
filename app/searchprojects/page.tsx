import { Search } from "lucide-react"
import Image from "next/image"

import { projects } from "@/constents"

// bg-[#FFFAF0]
const page = () => {
  return (
    <div className="flex justify-center bg-[#F5FEFD]  h-screen"> 
        <div className=" md:w-[1024px]">

    {/* search bar  */}
        <div className="flex justify-center p-4">
          <div className="border w-4/5 flex rounded-[20px]  shadow">
                  <Search className="mt-2 pl-2"/>
                 <input type="text" className="w-full p-2 bg-transparent focus:border-none focus:outline-none placeholder:text-black" placeholder="Search" />
          </div>
       </div>

    {/* projects  */}
        <div className=" flex flex-wrap justify-between">

            {
                projects.map((project,i)=>(
                    <div  key={i} className=" mt-8 mb-5 max-w-xs bg-white  border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    <div className="w-full">
                        <a href="#">
                            <Image className="rounded-t-lg w-full" width={100} height={50} src={project.image} alt="Logo" />
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{project.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.shortdescription}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a>
                    </div>
               </div>
                ))
            }
         

        </div>


        </div>
    </div>
  )
}

export default page