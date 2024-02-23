import React from 'react';
import { Avatar, Button , IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const OrganizationTile = ({ logoSrc, name, isFree, creationDate, organizationId, edition, isAdmin }) => {
  return (
    <div className="organization-tile p-4 border border-gray-300 rounded-md shadow-md flex items-start justify-between">
      <div className="organization-info flex items-center">
        <div className="logo mr-4">
          <img src={logoSrc} alt={name} className="w-16 h-16 rounded-full" />
        </div>
        <div className="details">
          <p className="name">
            <span className="font-bold">{name}</span>
            {isFree && <span className="text-purple-500 ml-2">FREE</span>}
          </p>
          <p className="creation-date italic">Organization created on {creationDate}</p>
          <p className="organization-id">Organization ID: {organizationId}</p>
          <p className="edition">Edition: {edition}</p>
          <p className="admin">You're now an admin in this organization</p>
        </div>
      </div>
      <div className="actions flex items-start flex-row text-start"> {/* Change to flex-col */}
        <Button variant="outlined" color="primary" className="mb-2">
          Go to organization
        </Button>
        <span>
        <IconButton>
          <span className="icon">&#8942;</span>
        </IconButton>
        </span>
      </div>
    </div>

  );
}

export default OrganizationTile;
