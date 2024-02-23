import { Switch, TextField } from '@mui/material';
import React from 'react';

const SoProductDetails = () => {
	return (
		<>
			<div className="">
				<div className="text-left pl-3">
					<h1 className="font-bold text-gray-500">Product Name: Steel T2</h1>
				</div>
				<div className="flex justify-between items-center py-2">
					<Switch />
					<span className="text-purple-400 text-xs">
						Fetch details from customer level product catalog
					</span>
				</div>

				<div className="py-4 pl-3 text-left text-md text-gray-500">
					Product ID: 00001
				</div>
				<div className="py-4 text-left pl-3 text-md text-gray-500">
					Tax Rate: 12%
				</div>
				<div className="py-3">
					<TextField
						id="outlined-basic"
						size="small"
						fullWidth
						className="rounded-lg py-4"
						placeholder="Description"
						variant="outlined"
					/>
				</div>
			</div>
		</>
	);
};

export default SoProductDetails;
