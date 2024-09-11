"use client"
import { useState } from 'react';

const testPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <label htmlFor="email" className="text-lg">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default testPage;