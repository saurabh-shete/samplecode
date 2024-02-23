import React, { useState } from 'react';

const DimensionUnit = () => {
  const [unitCode, setUnitCode] = useState('');
  const [unitName, setUnitName] = useState('');
  const [unitDescription, setUnitDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Unit Code: ${unitCode}`);
    console.log(`Unit Name: ${unitName}`);
    console.log(`Unit Description: ${unitDescription}`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dimension Unit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="unitCode" className="block text-sm font-medium text-gray-700">
            Unit Code:
          </label>
          <input
            type="text"
            id="unitCode"
            value={unitCode}
            onChange={(e) => setUnitCode(e.target.value)}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="unitName" className="block text-sm font-medium text-gray-700">
            Unit Name:
          </label>
          <input
            type="text"
            id="unitName"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="unitDescription" className="block text-sm font-medium text-gray-700">
            Unit Description:
          </label>
          <textarea
            id="unitDescription"
            value={unitDescription}
            onChange={(e) => setUnitDescription(e.target.value)}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DimensionUnit;
