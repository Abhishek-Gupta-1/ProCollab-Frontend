

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function UploadProject() {
    return (
        <div className='flex justify-center '>


            <form >
                <div className="space-y-12 mt-20">
                    <div className="border-b-2 border-black pb-12">

                        <h2 className="text-2xl font-semibold leading-7 text-black">Create Project</h2>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}



                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Project Name */}
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                    Project Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Enter the name of your Project"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------- */}

                            {/* Project Short Descriptiton */}

                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                    Project Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter your Project Name</span> */}
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Short description in one Line "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ----------------------------------------------------------------- */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium leading-6 text-black"
                                >
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Category"
                                        name="category"
                                        autoComplete="category-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                                    className="block text-sm font-medium leading-6 text-black"
                                >
                                    Completion Status
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="completion"
                                        name="completion"
                                        autoComplete="completion-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Completed</option>
                                        <option>Under Research</option>
                                        <option>Proposed</option>
                                    </select>
                                </div>
                            </div>



                            {/* ------------------------Project brief Description------------------------------------- */}
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-black">
                                    Project Brief Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                        Project Link
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="link"
                                                id="link"
                                                autoComplete="link"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="If Deployed then Enter the Link of Project Deployement"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* -----------Video Link-------------------------- */}

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                                        Video Link
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="video"
                                                id="video"
                                                autoComplete="video"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Upload your Video on Youtube and paste link here"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Image upload------------------ */}

                                <label htmlFor="cover-photo" className=" pt-12 block text-sm font-medium leading-6 text-black">
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
                                </div>
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
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* -----------Email-------------- */}
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* ____________Institution Details________________ */}
                            <div className="sm:col-span-3">
                                <label htmlFor=" Institute" className="block text-sm font-medium leading-6 text-black">
                                    Institution Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type=" text"
                                        name=" Institute"
                                        id="Institute"
                                        autoComplete=" Institute"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* ---------Continent-------------------------- */}
                            <div className="sm:col-span-3">
                                <label htmlFor="Continent" className="block text-sm font-medium leading-6 text-black">
                                    Continent
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Continent"
                                        name="Continent"
                                        autoComplete="Continent-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>North America</option>
                                        <option>Asia</option>
                                        <option>Africa</option>
                                        <option>South America</option>
                                        <option>Antartica</option>
                                        <option>Australia</option>
                                        <option>Europe</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ----------Collaborator Notification---------------------------- */}



                    <div className=" pb-6">
                        <h2 className="text-base font-semibold leading-7 text-black">Collaboration Notifications</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            We will Notify You when someone try to Collaborate with You
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
                                    <div className="relative flex gap-x-3 border-b-2 border-black pb-12">
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
                                    </div>
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

                <div className="mt-6 flex items-center justify-end gap-x-6 pb-16 pt-0">
                    <button type="button" className="text-sm font-semibold leading-6 text-black">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Publish My Project / Research
                    </button>
                </div>
            </form>
        </div>
    )
}
