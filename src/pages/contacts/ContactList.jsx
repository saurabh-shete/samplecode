import React from 'react';

const ContactList = () => {
  return (
    <div className='p-5 text-left'>
      <div className='flex justify-between pr-4'>
        <div className='text-xl font-bold mb-2'>CONTACT LIST</div>
        <div className='text-xl mb-4'>Exports/Delivery</div>
      </div>
      <div className='grid grid-cols-5 gap-0'>
        {/* Empty space for the first column */}
        <div className=' bg-purple-500 h-full flex  items-center justify-center'>
          <input type='checkbox' className='mr-2' />
        </div>
        <div className='col-span-1 bg-purple-500 text-white py-2 text-center font-bold'>Full Name</div>
        <div className='col-span-1 bg-purple-500 text-white py-2 text-center font-bold'>Email</div>
        <div className='col-span-1 bg-purple-500 text-white py-2 text-center font-bold'>Company Name</div>
        <div className='col-span-1 bg-purple-500 text-white py-2 text-center font-bold'>Business Phone</div>

        {/* Checkbox rows */}
        <div className='col-span-1 flex items-center py-2'>
          <input type='checkbox' className=' ' />
        </div>
        <div className='col-span-1 py-2 text-center text-blue-600'>Customer 1</div>
        <div className='col-span-1 py-2 text-center'>johndoe@example.com</div>
        <div className='col-span-1 py-2 text-center'>Example Inc.</div>
        <div className='col-span-1 py-2 text-center'>123-456-7890</div>

        <div className='col-span-1 flex items-center py-2'>
          <input type='checkbox' className='mr-2' />
        </div>
        <div className='col-span-1 py-2 text-center text-blue-600'>Customer 2</div>
        <div className='col-span-1 py-2 text-center'>janesmith@example.com</div>
        <div className='col-span-1 py-2 text-center'>Another Corp.</div>
        <div className='col-span-1 py-2 text-center'>987-654-3210</div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default ContactList;
