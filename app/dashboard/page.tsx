"use client"

import { getAllUniversityProject } from "@/api/apis";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'



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
    <div className="bg-black h-screen flex justify-center items-center">
      <div className=" md:w-3/5 h-full flex justify-center  w-full ">
        <div className=" h-fit  md:w-4/5 w-4/5 mt-7">
          <div className="flex bg-white justify-between p-4 rounded-xl">
            <p>Mahesh</p>
            <p>Project title</p>
            <button>Approve</button>
            <button>Reject</button>
          </div>
          <div className="flex bg-white justify-between p-4 rounded-xl mt-5">
            <p>Mahesh</p>
            <p>Project title</p>
            <button>Approve</button>
            <button>Reject</button>
          </div>
          <div className="flex bg-white justify-between p-4 rounded-xl mt-5">
            <p>Mahesh</p>
            <p>Project title</p>
            <button>Approve</button>
            <button>Reject</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page