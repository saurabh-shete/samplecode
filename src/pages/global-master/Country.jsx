import React, { useState } from 'react';

const Country = () => {
  const [formData, setFormData] = useState({
    countryName: '',
    countryCode: '',
    createdBy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to an API)
    console.log('Form Data:', formData);
  };

  return (
    <div className="bg-white min-h-screen flex">
      <div className="w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4">Create a New Country</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="countryName" className="block text-sm font-semibold">Country Name</label>
            <input
              type="text"
              id="countryName"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-400"
              placeholder="Enter country name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="countryCode" className="block text-sm font-semibold">Country Code</label>
            <input
              type="text"
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-400"
              placeholder="Enter country code"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="createdBy" className="block text-sm font-semibold">Created By</label>
            <input
              type="text"
              id="createdBy"
              name="createdBy"
              value={formData.createdBy}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-purple-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Country;
