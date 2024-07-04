"use client"
import React, { useState } from 'react';
import {registerUser} from "../serverActions/userActions";

const Register = () => {
  const [info, setInfo] = useState({ username: '', email: '', password: '' });
  const [feedback, setFeedback] = useState({type: "", msg: ""});
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit (e) {
    e.preventDefault();
    if(!info.username||!info.email||!info.password){
    setPending(true);
    setFeedback((prev)=>({...prev,type:"error",msg:'Registration successful!'}))
    return;
}
setPending(true);
try {
  const res = await registerUser(info)
  
} catch (error) {
}
}
    // Simulate an API call
    setTimeout(() => {
      setPending(false);
      setFeedback('Registration successful!');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">Register</h1>
        <p className="text-center text-gray-600">This is a simple Register page</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={info.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={pending}
            >
              {pending ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
        {feedback && (
          <div className="mt-4 text-center text-green-500">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;