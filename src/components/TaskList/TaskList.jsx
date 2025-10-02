import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] flex items-center flex-nowrap justify-start w-full py-5 px-2 gap-5 mt-10' >
        <div id='taskCard' className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl py-4 px-5 overflow-y-auto' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-lg font-medium'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>Make a YT video</h2>
            <p className='text-md mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque quis illum ipsa repellendus sunt deserunt minima voluptate ex animi nam et quaerat velit mollitia sint molestias nesciunt sed, magnam earum eius
            </p>
        </div>
        
    </div>
  )
}

export default TaskList;