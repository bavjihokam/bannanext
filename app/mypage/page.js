"use client"
import { useState } from 'react';

const testPage = () => {
  

  const handleSaction = () => {
    "use server"
    console.log("server action triggred");
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="animate-spin text-5xl mb-4">This is the test page</h1>
      <form action={handleSaction} className="flex flex-col space-y-4">
        <label htmlFor="name" className="text-lg">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border p-2"
          required
        />
        <label htmlFor="email" className="text-lg">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default testPage;