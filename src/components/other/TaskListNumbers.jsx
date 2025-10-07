import React from 'react';
import { CheckCircle, ClipboardList, Clock, XCircle } from 'lucide-react';

const TaskListNumbers = ({ data }) => {
  const taskStats = [
    {
      title: 'New Tasks',
      count: data.taskNumbers.newTask,
      gradient: 'from-emerald-500 to-emerald-600',
      icon: <ClipboardList size={30} />,
    },
    {
      title: 'Completed Tasks',
      count: data.taskNumbers.completed,
      gradient: 'from-blue-500 to-blue-600',
      icon: <CheckCircle size={30} />,
    },
    {
      title: 'Active Tasks',
      count: data.taskNumbers.active,
      gradient: 'from-yellow-500 to-yellow-600',
      icon: <Clock size={30} />,
    },
    {
      title: 'Failed Tasks',
      count: data.taskNumbers.failed,
      gradient: 'from-rose-500 to-rose-600',
      icon: <XCircle size={30} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {taskStats.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between h-35 p-6 rounded-2xl 
                     bg-gradient-to-br ${item.gradient} text-white shadow-lg 
                     transform transition-all duration-300 hover:scale-105`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-extrabold">{item.count}</h2>
            <div className="bg-white/20 p-3 rounded-xl">{item.icon}</div>
          </div>
          <h3 className="text-lg font-medium opacity-90 mt-3">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
