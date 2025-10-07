import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="backdrop-blur-md bg-white/10 border border-emerald-300 rounded-3xl shadow-2xl w-[90%] max-w-md p-10">
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">Welcome Back</h1>
          <p className="text-emerald-200 mb-8 text-center">
            Login to continue to your account
          </p>

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-4 mb-5 rounded-full bg-white/10 text-white border border-emerald-300
                       outline-none placeholder-emerald-200 focus:ring-2 focus:ring-emerald-400 transition-all text-lg"
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full px-5 py-4 mb-5 rounded-full bg-white/10 text-white border border-emerald-300
                       outline-none placeholder-emerald-200 focus:ring-2 focus:ring-emerald-400 transition-all text-lg"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-5 mt-4 rounded-full bg-emerald-600 text-white font-semibold text-lg
                       shadow-md hover:bg-emerald-700 active:scale-95 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
