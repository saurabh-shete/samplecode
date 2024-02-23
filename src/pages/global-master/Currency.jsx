import React, { useState } from 'react';

const Currency = () => {
  const [formData, setFormData] = useState({
    currencyCode: '',
    currencySymbol: '',
    currencyName: '',
    country: '',
    exchangeRate: '',
    exchangeRateDate: '',
    createdBy: '',
    createdDate: '',
    modifiedBy: '',
    modifiedDate: '',
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
    <div style={{ backgroundColor: 'white', color: 'black' }} className="min-h-screen flex">
      <div className="w-1/2 p-6">
        <h1 className="text-3xl font-bold text-black mb-4">Add New Currency</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="currencyCode" className="block text-sm font-semibold">
                Currency Code
              </label>
              <input
                type="text"
                id="currencyCode"
                name="currencyCode"
                value={formData.currencyCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter currency code"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currencySymbol" className="block text-sm font-semibold">
                Currency Symbol
              </label>
              <input
                type="text"
                id="currencySymbol"
                name="currencySymbol"
                value={formData.currencySymbol}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter currency symbol"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currencyName" className="block text-sm font-semibold">
                Currency Name
              </label>
              <input
                type="text"
                id="currencyName"
                name="currencyName"
                value={formData.currencyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter currency name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-semibold">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter country"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exchangeRate" className="block text-sm font-semibold">
                Exchange Rate
              </label>
              <input
                type="text"
                id="exchangeRate"
                name="exchangeRate"
                value={formData.exchangeRate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter exchange rate"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exchangeRateDate" className="block text-sm font-semibold">
                Exchange Rate Date
              </label>
              <input
                type="text"
                id="exchangeRateDate"
                name="exchangeRateDate"
                value={formData.exchangeRateDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter exchange rate date"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="createdBy" className="block text-sm font-semibold">
                Created By
              </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter created by"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="createdDate" className="block text-sm font-semibold">
                Created Date
              </label>
              <input
                type="text"
                id="createdDate"
                name="createdDate"
                value={formData.createdDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter created date"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modifiedBy" className="block text-sm font-semibold">
                Modified By
              </label>
              <input
                type="text"
                id="modifiedBy"
                name="modifiedBy"
                value={formData.modifiedBy}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter modified by"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modifiedDate" className="block text-sm font-semibold">
                Modified Date
              </label>
              <input
                type="text"
                id="modifiedDate"
                name="modifiedDate"
                value={formData.modifiedDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-7A57FF"
                placeholder="Enter modified date"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#7A57FF' }}
            className="hover:bg-6A4BFF text-white py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Currency;
