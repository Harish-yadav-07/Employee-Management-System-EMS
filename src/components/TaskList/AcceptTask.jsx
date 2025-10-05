import React from 'react'

const AcceptTask = () => {
  return (
        <div id='taskCard' className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl py-4 px-5 overflow-y-auto' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-lg font-medium'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a YT video</h2>
            <p className='text-md mt-2'>
                Lorem ipsum dolor sit amet consectetsed, magnam earum eiuslorem Lorem ipsum dolor sit amet.
            </p>
            <div className='flex justify-between mt-4 ' >
                <button className='bg-green-500 py-1 px-2 text-sm rounded-md' >Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-md' >Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask