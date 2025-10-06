import React from 'react'

const NewTask = ({data}) => {
  return (
        <div id='taskCard' className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl py-4 px-5 overflow-y-auto' >
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-lg font-medium'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
            <p className='text-md mt-2'>
                {data.description}
            </p>
            <div className='mt-4' >
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask;