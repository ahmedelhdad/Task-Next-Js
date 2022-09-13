import React from 'react'

const Search = () => {
  return (
    <div className=' bg-primar py-36  text-center'>
        <h1 className='text-black font-meduim text-sm md:text-2xl md:tracking-[.1em]'>Subscribe our newsleter to be notified shen it ll be live</h1>
        <div className='flex mt-16  w-full px-6    max-w-2xl mx-auto'>
            <input type="email" className='w-full py-3 px-6  border-2 bg-transparent placeholder:text-black border-gray-500 rounded-md focus:placeholder:opacity-0  focus:outline-none' name="" id="" placeholder='Email address' />
            <button className='bg-black text-white px-5 lg:px-14  rounded-lg  font-medium border border-black hover:bg-transparent hover:text-black transition-all'>Subscribe</button>
        </div>
    </div>
  )
}

export default Search
