import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-6 flex flex-col justify-between">
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
      <div className="flex items-center justify-center gap-2 mt-auto text-green-500 font-semibold text-lg">
        <CheckCircle2 size={20} /> Completed
      </div>
    </div>
  );
};

export default CompleteTask;
