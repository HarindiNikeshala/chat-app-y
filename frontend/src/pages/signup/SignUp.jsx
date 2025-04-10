import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
          Sign Up
          <span className='text-green-600'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10 mb-4' />
          </div>
          <GenderCheckBox/>
          <div>
            <button className='btn btn-block btn-sm mt-6 bg-green-700 border-green-700'>SignUp</button>
          </div>
          <a href='#' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block p-2'>
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  )
}

export default SignUp