import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen' >
        <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400' >
          <h2 className='text-3xl font-semibold' >1</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400' >
          <h2 className='text-3xl font-semibold' >3</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400' >
          <h2 className='text-3xl font-semibold' >0</h2>
          <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400' >
          <h2 className='text-3xl font-semibold' >0</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers;