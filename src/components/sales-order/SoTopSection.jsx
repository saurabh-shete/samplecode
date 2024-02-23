import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { SimpleDatePicker, SimpleSelect } from '../../utils';

const customers = [
	{ label: 'customer 1', val: 'customer1' },
	{ label: 'customer 2', val: 'customer2' },
	{ label: 'customer 3', val: 'customer3' },
	{ label: 'customer 4', val: 'customer4' },
];
const terms = [
	{ label: 'term 1', val: 'terms1' },
	{ label: 'terms 2', val: 'terms2' },
	{ label: 'terms 3', val: 'terms3' },
	{ label: 'terms 4', val: 'terms4' },
];

const SoTopSection = () => {
	return (
		<div>
			<Box sx={{ textAlign: 'left', margin: '16px 0' }}>
				<SimpleSelect
					name="customerName"
					label="Customer Name"
					options={customers}
				/>
			</Box>
			<Box sx={{ textAlign: 'left', margin: '16px 0' }}>
				<SimpleSelect name="terms" label="Terms" options={terms} />
				<span className="text-highlight-purple text-sm">
					view terms details
				</span>
			</Box>
			<Box sx={{ textAlign: 'left' }}>
				<div className="text-lg text-secondary-grey font-bold border-b-2 border-gray-400">
					Purchase Order
				</div>
				<div className="flex justify-between">
					<div className="mr-4 my-4">
						<div className="text-md text-secondary-grey">Reference</div>
						<TextField
							id="standard-basic"
							defaultValue="PO Number"
							variant="outlined"
						/>
					</div>

					<div className="mr-4 my-4">
						<div className="text-md text-secondary-grey">Date</div>
						<SimpleDatePicker size="small" name="invoiceDueDate" />
					</div>
				</div>
			</Box>
			<Box sx={{ textAlign: 'left', margin: '16px 0' }}>
				<div className="text-lg text-secondary-grey font-bold">
					Order Valid Till
				</div>
				<SimpleDatePicker size="small" name="invoiceDueDate" />
			</Box>
		</div>
	);
};

export default SoTopSection;
