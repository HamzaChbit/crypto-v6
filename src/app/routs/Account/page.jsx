'use client'
import React from 'react'
import SavedCoin from '@/app/components/SavedCoin/page'
import { UserAuth } from '@/app/context/AuthContext/page'
import { useRouter } from 'next/navigation'

import Image from 'next/image'


const Account = () => {
  const {user, logout} = UserAuth()
  const router = useRouter()


  const handleSignOut = async () => {
    try {
      await logout()
      router.push('/')
    }catch (e) {
      console.log(e.message)
    }
  }

  if(user) {

    return (
      <div  className='max-w-[1140px] mx-auto' >
        <div  className='flex justify-between items-center my-12 py-8 rounded-div' >
          <div>
            <h1  className='text-2xl font-bold' >Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
  
          </div>
          <div>
            <button  className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl' onClick={handleSignOut} >Sign Out</button>
          </div>
        </div>
        <div className='flex justify-between items-center my-12 py-12 rounded-div' >
          <div  className='w-full min-h-[300px]' >
            <h1  className='text-2xl font-bold py-4' >Watch List</h1>
            <SavedCoin/>
          </div>
        </div>
        </div>
    )


  }else{
    return  router.push('/routs/Signin')
  }




 
}

export default Account