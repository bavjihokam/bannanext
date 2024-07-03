"use client";
import React, { useReducer } from 'react';
import Link from "next/link";
import { authenticate } from "../serverActions/userActions";

// Define your initial state
const initialState = { errorMessage: "" };

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, errorMessage: "Incremented" };
    case "DECREMENT":
      return { ...state, errorMessage: "Decremented" };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your authenticate function or any other action
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">Login to continue</h1>
        <p className="text-center text-gray-600">This is a simple Login page</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {
            errorMessage && <span>{errorMessage}</span>
          }
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          {state.errorMessage && (
            <p className="text-center text-red-500">{state.errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;