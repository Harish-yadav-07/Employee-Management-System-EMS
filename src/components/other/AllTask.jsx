import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-6 h-[500px] m-5">
      {/* Table Header */}
      <div className="grid grid-cols-5 bg-emerald-600 text-white font-bold rounded-xl px-4 py-3 mb-3">
        <span className="text-lg font-medium">Employee Name</span>
        <span className="text-lg font-medium">New Task</span>
        <span className="text-lg font-medium">Active Task</span>
        <span className="text-lg font-medium">Completed</span>
        <span className="text-lg font-medium">Failed</span>
      </div>

      {/* Employee Task List */}
      <div className="h-[80%] overflow-y-auto">
        {userData.employeesData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 items-center text-white mb-2 px-4 py-3 rounded-xl border border-emerald-500 hover:bg-slate-600 transition-colors duration-200"
          >
            <span className="text-lg font-medium">{elem.firstname}</span>
            <span className="text-lg font-medium text-blue-400">{elem.taskNumbers.newTask}</span>
            <span className="text-lg font-medium text-yellow-400">{elem.taskNumbers.active}</span>
            <span className="text-lg font-medium text-green-400">{elem.taskNumbers.completed}</span>
            <span className="text-lg font-medium text-red-400">{elem.taskNumbers.failed}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
