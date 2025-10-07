import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUserData = { ...userData };

    updatedUserData.employeesData.forEach((elem) => {
      if (assignTo === elem.firstname) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = (elem.taskNumbers.newTask || 0) + 1;
      }
    });

    setUserData(updatedUserData);

    setTitle('');
    setCategory('');
    setAssignTo('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 m-5">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        {/* Left Inputs */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-lg mb-1 block">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full md:w-4/5 px-3 py-2 rounded-lg bg-slate-700 text-white 
                         border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-gray-300 text-lg mb-1 block">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full md:w-4/5 px-3 py-2 rounded-lg bg-slate-700 text-white 
                         border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-gray-300 text-lg mb-1 block">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full md:w-4/5 px-3 py-2 rounded-lg bg-slate-700 text-white 
                         border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="text-gray-300 text-lg mb-1 block">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full md:w-4/5 px-3 py-2 rounded-lg bg-slate-700 text-white 
                         border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Right Textarea + Button */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-lg mb-1 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description..."
              className="w-full h-44 px-4 py-2 rounded-lg bg-slate-700 text-white 
                         border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 bg-emerald-500 hover:bg-emerald-600 
                       rounded-xl text-white font-medium transition-all duration-200 shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
