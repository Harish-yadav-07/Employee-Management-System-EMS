import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div id='allTask' className='bg-[#1C1C1C] rounded h-65 p-7'>
      <div className='bg-emerald-500 mb-2 py-3 px-5 font-bold flex justify-between rounded-xl'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      <div id='allTaskList' className='h-[80%] overflow-auto'>
        {userData.employeesData.map(function (elem, idx) {
          return <div key={idx} className='border-2 border-emerald-500 mb-2 py-3 px-5 flex justify-between rounded-xl'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
          </div>
        })}
      </div>
    </div>
  );
}

export default AllTask;