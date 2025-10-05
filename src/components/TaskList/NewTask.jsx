import React from 'react'

const NewTask = () => {
  return (
        <div id='taskCard' className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl py-4 px-5 overflow-y-auto' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-lg font-medium'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a YT video</h2>
            <p className='text-md mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque quis illum ipsa repellendus sunt deserunt minima
            </p>
            <div className='mt-4' >
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask