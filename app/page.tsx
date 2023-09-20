import { frontend } from "@/api/apis"
import { Component, useState } from 'react'


import Signin from '@/components/auth/Signin'
import Signup from '@/components/auth/Signup'
import ForgotPassword from '@/components/auth/ForgotPassword'
import Navbar from '@/components/Dashboard/Navbar'
import OldNav from '@/components/Dashboard/OldNav'
import UploadProject from '@/components/UploadProject/UploadProject'
import Dashboard from '@/components/Dashboard/Dashboard'




export default async function Home() {

  const res = await frontend();
  console.log(res?.data)

  return (
    <main>
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <ForgotPassword /> */}
      {/* <Navbar /> */}
      {/* <OldNav /> */}

      {/* <div className="flex justify-center ">

        <UploadProject />
      </div> */}
     
      <Dashboard />


      <p>{res?.data.message}</p>
    </main>
  )
}