import { MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const packingTypeSelect = [
	{ type: 'type-1', id: '1' },
	{ type: 'type-2', id: '2' },
	{ type: 'type-3', id: '3' },
];

const SoProductQuantityFill = () => {
	const [selectedType, setSelectedType] = React.useState(null);

	const handleTypeChange = (e) => {
		setSelectedType(e.target.value);
	};
	return (
		<div className="px-4 items-center flex flex-col">
			<TextField
				sx={{ width: 100, margin: '10px 0' }}
				id="outlined-basic"
				variant="outlined"
				size="small"
			/>
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
	);
};

export default SoProductQuantityFill;
