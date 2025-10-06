import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div id='taskCard' className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl py-4 px-5 overflow-y-auto' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-lg font-medium'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
            <p className='text-md mt-2'>{data.description}</p>
            <div className='mt-2' >
                <button className='w-full py-1 px-2 bg-gray-800 rounded-md text-sm mt-3' >Failed</button>
            </div>
        </div>
  )
}

export default FailedTask;