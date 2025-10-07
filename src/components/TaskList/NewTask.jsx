import React, { useContext } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data, employeeId }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const acceptTask = () => {
    const updatedData = { ...userData };
    const employee = updatedData.employeesData.find((e) => e.id === employeeId);
    if (!employee) return;

    const task = employee.tasks.find((t) => t === data);
    if (!task) return;

    task.newTask = false;
    task.active = true;

    employee.taskNumbers.newTask = (employee.taskNumbers.newTask || 0) - 1;
    employee.taskNumbers.active = (employee.taskNumbers.active || 0) + 1;

    setUserData(updatedData);
  };

  return (
    <div className="flex-shrink-0 w-[320px] h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {data.category}
          </h3>
          <div className="flex items-center text-slate-300 text-sm">{data.date}</div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{data.title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-4">{data.description}</p>
      </div>
      <button
        onClick={acceptTask}
        className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow transition-colors duration-150"
      >
        <CheckCircle2 size={16} />
        Accept Task
      </button>
    </div>
  );
};

export default NewTask;
