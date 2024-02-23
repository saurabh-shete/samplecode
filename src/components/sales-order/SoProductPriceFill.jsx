import { MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const packingTypeSelect = [
	{ type: 'type-1 %', id: '1' },
	{ type: 'type-2 %', id: '2' },
	{ type: 'type-3 %', id: '3' },
];
const SoProductPriceFill = () => {
	const [selectedType, setSelectedType] = React.useState(null);

	const handleTypeChange = (e) => {
		setSelectedType(e.target.value);
	};
	return (
		<div className="px-4 ">
			<div className="flex justify-between items-center">
				<h3 className="mr-4">Rate:</h3>
				<TextField
					sx={{ width: 100, margin: '10px 0' }}
					id="outlined-basic"
					variant="outlined"
					size="small"
				/>
			</div>
			<div className="flex justify-between items-center">
				<h3 className="mr-2">Discount:</h3>

				<Select
					value={selectedType?.type}
					onChange={handleTypeChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					sx={{ width: 100, height: 40 }}
				>
					{packingTypeSelect.map((v) => (
						<MenuItem key={v.id} value={v.id}>
							{v.type}
						</MenuItem>
					))}
				</Select>
			</div>
			<div className="flex justify-between items-center">
				<h3 className="mr-4">Tax:</h3>
				<TextField
					sx={{ width: 100, margin: '10px 0' }}
					id="outlined-basic"
					variant="outlined"
					disabled
					size="small"
				/>
			</div>
		</div>
	);
};

export default SoProductPriceFill;
