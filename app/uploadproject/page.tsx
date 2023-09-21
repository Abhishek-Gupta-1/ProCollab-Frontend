
"use client"
import { useState } from 'react';
import { Countries } from '../../constents'
import { uploadProjects } from '@/api/apis';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

type PorjectDetails = {
    title: string;
    shortdiscription: string;
    category: string;
    theme: string;
    description: string;
    teckstack: string;
    projectlink: string;
    status: string;
    photo?: string;
    universityname: string;
    qualification: string;
    collaborator?: string;
    userid:string;
  };
  
  const initialProjectDetails: PorjectDetails = {
    title: "",
    shortdiscription: "",
    category: "Software",
    theme: "",
    description: "",
    teckstack: "",
    projectlink: "",
    status: "Completed",
    universityname: "",
    qualification: "",
    userid:""
  };

export default function UploadProject() {

    const [project, setProject] = useState(initialProjectDetails);
    const [projectId, setProjectId] = useState('');

    const InputfromText =(e : React.ChangeEvent<HTMLInputElement>) =>{
        setProject({...project,[e.target.name]:e.target.value});
        //   console.log(project);
    }

    const SendDetails = async(e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();


        // const inputString = JSON.stringify(project.teckstack);
        // console.log(inputString)
        // const array = inputString.split(',');
        // console.log(array)
        // array.map((item)=>
        //   project.teckstack.push(item)
        // );
     try{
      
        const userId = Cookies.get('userid');
        if(userId){
            project.userid = userId
        }
        console.log(project)
        console.log(project.teckstack)

        const res = await uploadProjects(project);
        console.log(res);
        toast.success("Project Uploaded");

     }catch(err:any){
             console.log("Error in uploading Project")
     }
       

        // setProjectId(res?.data.message._id);
        // const inputArray = inputValue.split(',').map((item) => item.trim());
    }

    return (
        <div className='flex justify-center'>


            <form className='border p-7 w-full md:w-3/5 shadow'>
                <div className="space-y-12 mt-20">
                    <div className="border-b-2 border-black pb-12">

                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Create Project</h2>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}



                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Project Name */}
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                    Project Name <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <div className="flex focus:outline-none focus:border-none rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter your Project Name</span> */}
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            autoComplete="username"
                                            onChange={(e)=>InputfromText(e)}
                                            // className="block flex-1 border-0 bg-transparent p-8 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder="Your Project Name "
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------- */}

                            {/* Project Short Descriptiton */}

                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                    Project Title <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter your Project Name</span> */}
                                        <input
                                            type="text"
                                            name="shortdiscription"
                                            id="shortdiscription"
                                            onChange={(e)=>InputfromText(e)}
                                            autoComplete="shortdiscription"
                                            className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder="Short description"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* teck stack  */}
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                   Technology Used <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <div className="flex focus:outline-none focus:border-none rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter your Project Name</span> */}
                                        <input
                                            type="text"
                                            name="teckstack"
                                            id="teckstack"
                                            onChange={(e)=>InputfromText(e)}
                                            autoComplete="teckstack"
                                            className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder="Reactjs,Nextjs,nodejs etc.."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Theme  */}

                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                   Theme <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <div className="flex focus:outline-none focus:border-none rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter your Project Name</span> */}
                                        <input
                                            type="text"
                                            name="theme"
                                            id="theme"
                                            onChange={(e)=>InputfromText(e)}
                                            autoComplete="theme"
                                            className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                            placeholder="Web,Blockchain,AI/Ml atc.."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ----------------------------------------------------------------- */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Category <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Category"
                                        name="category"
                                        onChange={(e)=>InputfromText(e)}
                                        autoComplete="category-name"
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Software</option>
                                        <option>Hardware</option>
                                        <option>Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            {/* _________________Completion Status________________ */}

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="completion"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Completion Status <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="status"
                                        name="status"
                                        onChange={(e)=>InputfromText(e)}
                                        autoComplete="completion-name"
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Completed</option>
                                        <option>Under Process</option>
                                        <option>Pending</option>
                                    </select>
                                </div>
                            </div>



                            {/* ------------------------Project brief Description------------------------------------- */}
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Detailed Description <span className='text-amber-500'>*</span>
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        onChange={(e)=>InputfromText(e)}
                                        rows={3}
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        placeholder=" Write Brief Description about your Project"
                                    />
                                </div>
                                <div className='border-b-2 border-black pb-12' />
                            </div>
                            {/* ------------------------------------------------------------------ */}


                            {/* ---------------------Project Media------------------------ */}
                            <div className="col-span-full">
                                <h2 className="pb-6 text-2xl font-semibold leading-7 text-black">Media</h2>

                                {/* _______________________Project Link__________________________________ */}

                                <div className="sm:col-span-4 pb-8">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Project Link <span className='text-amber-500'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="projectlink"
                                                id="projectlink"
                                                onChange={(e)=>InputfromText(e)}
                                                autoComplete="link"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-xs sm:leading-6'
                                                placeholder="Deployed Link/Source Link"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* -----------Video Link-------------------------- */}

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Video Link
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="video"
                                                id="video"
                                                onChange={(e)=>InputfromText(e)}
                                                autoComplete="video"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder="Uploaded Video Link"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* photo Link  */}
                                <div className="sm:col-span-4 mt-6">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                       Project Photo Link
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="photo"
                                                id="photo"
                                                onChange={(e)=>InputfromText(e)}
                                                autoComplete="photo"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder="Uploaded photo Link"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Image upload------------------ */}

                                {/* <label htmlFor="cover-photo" className=" pt-12 block text-sm font-semibold leading-6 text-gray-900">
                                    Upload Photos of your Project
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-black px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------X--X---X-------------------------------------- */}

                    {/* ---------Personal Information------------------- */}
                    <div className="border-b-2 border-black pb-12">
                        <h2 className="text-2xl font-semibold leading-7 text-black">Personal Information</h2>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}
                        {/* ------Name */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full name 
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fullname"
                                        onChange={(e)=>InputfromText(e)}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* -----------Email-------------- */}
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={(e)=>InputfromText(e)}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* ____________Institution Details________________ */}
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        onChange={(e)=>InputfromText(e)}
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >

                                        {
                                            Countries.map((count:string,i:number)=>(
                                                <option key={i}>{count}</option>
                                            ))
                                        }
                                        
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Education Details  */}


                    <div className="col-span-full">
                                <h2 className="pb-6 text-2xl font-semibold leading-7 text-gray-900">Education Details</h2>

                                {/* _______________________Education Details __________________________________ */}

                                <div className="sm:col-span-4 pb-8">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                    University Name <span className='text-amber-500'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="universityname"
                                                onChange={(e)=>InputfromText(e)}
                                                id="universityname"
                                                autoComplete="universityname"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-xs sm:leading-6'
                                                placeholder="University Name/Collage Name"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* -----------qualification-------------------------- */}

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                     Qualification <span className='text-amber-500'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="qualification"
                                                id="qualification"
                                                onChange={(e)=>InputfromText(e)}
                                                autoComplete="qualification"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder="Your Qualification"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* collaborators  */}
                                <div className="sm:col-span-4 mt-6">
                                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Collaborators 
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="collaborator"
                                                id="collaborator"
                                                onChange={(e)=>InputfromText(e)}
                                                autoComplete="collaborator"
                                                className='flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400  focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder="Who has helped or the part part of your project"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Image upload------------------ */}
                            </div>


                    {/* ----------Collaborator Notification---------------------------- */}



                    <div className=" pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Collaboration Notifications</h2>
                        <p className="mt-1 text-xs leading-6 text-gray-600">
                            We will Notify You when someone try to Collaborate with Your Project
                        </p>

                        <div className="mt-10 space-y-10">
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-black">By Email</legend>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="yes"
                                                name="yes"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="Yes" className="font-medium text-black">
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                    {/* __________________________________________________________ */}
                                    {/* <div className="relative flex gap-x-3 border-b-2 border-black pb-12">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="no"
                                                name="no"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="no" className="font-medium text-black">
                                                No
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* _______________________________________________________________________ */}
                                    <div className="pt-12 relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="Agree"
                                                name="Agree"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="Agree" className="font-medium text-black">
                                                Agree to Share your Project as Open Source
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </fieldset>
                            {/* _________________________________Agreement_________________________________________________________ */}


                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-center items-center  gap-x-6 mb-5">
                    <button
                        type="submit"   onClick={(e)=>SendDetails(e)}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Publish My Project / Research
                    </button>
                </div>
            </form>
        </div>
    )
}
