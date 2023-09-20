import { frontend } from "@/api/apis"
import { Component, useState } from 'react'


import Signin from '@/app/signin/page'
import Signup from '@/app/signup/page'
import ForgotPassword from '@/components/auth/ForgotPassword'
import Navbar from '@/components/Dashboard/Navbar'
import UploadProject from '@/components/UploadProject/UploadProject'
import Dashboard from '@/components/dashboard/dashboard'




export default async function Home() {

  const res = await frontend();
  console.log(res?.data)

  return (
    <main>

      <Dashboard />


      <p>{res?.data.message}</p>
    </main>
  )
}