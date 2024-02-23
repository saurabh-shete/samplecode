import React, { useState } from 'react';

const AccountDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('');

  const accounts = ['Account 1', 'Account 2', 'Account 3'];

  const handleAccountSelection = (account) => {
    setSelectedAccount(account);
    setIsDropdownOpen(false);
  };

  return (
    <div className='w-full'>
      <input
        className=' w-full rounded p-2 border border-gray-300 focus:outline-none focus:border-blue-500'
        type='text'
        placeholder='Select account name'
        value={selectedAccount}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        readOnly
      />
      {isDropdownOpen && (
        <div className='absolute z-10 mt-2 py-1 bg-white border border-gray-300 rounded shadow-md'>
          {accounts.map((account, index) => (
            <button
              key={index}
              className='block w-full px-4 py-2 text-left hover:bg-gray-200'
              onClick={() => handleAccountSelection(account)}
            >
              {account}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
