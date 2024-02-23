import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const UserTile = ({ user }) => {
  const { name, email, title, role } = user;

  return (
    <div className="flex items-center py-4 ">
      {/* Avatar and User Details */}
      <div className="flex items-center space-x-4 w-2/5 ml-3">
        <Avatar alt={name} src="avatar.jpg" style={{ width: '80px', height: '80px' }} />
        <div className="ml-2 my-2">
          <div className='flex flex-col text-left'>
          <h4 className="text-blue-700 font-semibold text-lg mb-1">{name}</h4>
          <p className="text-gray-600 text-base mb-1">{email}</p>
          <p className="text-gray-600 text-base">{title}</p>
          </div>
        </div>
      </div>

      {/* Roles
      <div className="w-1/5 text-center">
        <p className="text-center text-lg font-semibold">{role}</p>
      </div> */}

      {/* Settings Icon */}
      {/* <div className="w-1/5 flex items-center justify-end">
        <IconButton color="primary" aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </div> */}
    </div>
  );
};

export default UserTile;
