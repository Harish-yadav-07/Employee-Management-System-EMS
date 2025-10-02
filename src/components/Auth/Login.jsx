import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is:", email)
        console.log("password is:", password)
        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br">
  <div className="backdrop-blur-md bg-white/10 border border-emerald-300 rounded-3xl shadow-2xl w-[90%] max-w-md p-10">
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="flex flex-col items-center"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-8 tracking-wide">Welcome Back</h1>
      <p className="text-emerald-200 mb-10 text-center">Login to continue to your account</p>

      {/* Email */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full outline-none text-white text-lg border border-emerald-300 rounded-full py-4 px-5 mb-6 bg-white/10 placeholder-emerald-200 focus:ring-2 focus:ring-emerald-400 transition"
        type="email"
        placeholder="Enter your email"
      />

      {/* Password */}
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full outline-none text-white text-lg border border-emerald-300 rounded-full py-4 px-5 mb-4 bg-white/10 placeholder-emerald-200 focus:ring-2 focus:ring-emerald-400 transition"
        type="password"
        placeholder="Enter your password"
      />

      {/* Submit Button */}
      <button className="w-full bg-emerald-600 text-white font-semibold rounded-full py-3 px-5 mt-5 hover:bg-emerald-700 active:scale-95 text-lg transition-all shadow-md">
        Log In
      </button>
    </form>
  </div>
</div>

    )
}

export default Login;