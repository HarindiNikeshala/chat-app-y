import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-green-700 border-green-700 text-white hover:bg-green-600 hover:border-green-600'>
                <IoSearchSharp className='w-5 h-5 outline-none ' />
            </button>
        </form>
    )
}

export default SearchInput