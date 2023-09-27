"use client"
import React from 'react'
import Cookies from 'js-cookie'

const page = () => {

    const status =  Cookies.get('status');
    const Percentage =  Cookies.get('percentage');
   console.log(status)
   console.log(Percentage)

    if(!status){
        return `<h1>Loading....</h1>`
    }
  return (
    <div className='text-black'>
        <h1>Hello</h1>
        <h1>{status}</h1>
        <h1>{Percentage}</h1>
    </div>
  )
}

export default page