import React, { useState, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.firstname || 'Admin');
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <header
      className="flex items-center justify-between px-8 py-4 
                 bg-gradient-to-r from-slate-800 to-slate-900 
                 rounded-2xl shadow-lg border border-slate-700 m-5 
                 text-white"
    >
      {/* Left Section: Greeting */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-700 rounded-full shadow-md">
          <User size={24} className="text-emerald-400" />
        </div>
        <div>
          <h1 className="text-lg font-medium text-slate-300">Hello,</h1>
          <h2 className="text-2xl font-bold text-white">
            {username} <span className="inline-block animate-wave">👋</span>
          </h2>
        </div>
      </div>

      {/* Right Section: Logout Button */}
      <button
        onClick={logOutUser}
        className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 
                   text-white font-medium py-2 px-5 rounded-xl 
                   transition-all duration-200 shadow-md"
      >
        <LogOut size={18} />
        Log Out
      </button>
    </header>
  );
};

export default Header;
