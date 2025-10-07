import React from 'react';
import { XCircle, CalendarDays } from 'lucide-react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {data.category}
          </h3>
          <div className="flex items-center text-slate-300 text-sm">
            <CalendarDays size={16} className="mr-1 text-rose-400" />
            {data.date}
          </div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{data.title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">{data.description}</p>
      </div>
      <div className="flex items-center justify-center gap-2 mt-auto text-red-500 font-semibold text-lg">
        <XCircle size={20} /> Failed
      </div>
    </div>
  );
};

export default FailedTask;
  