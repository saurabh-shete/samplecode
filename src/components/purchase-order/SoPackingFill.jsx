import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const packingTypeSelect = [
	{ type: 'type-1', id: '1' },
	{ type: 'type-2', id: '2' },
	{ type: 'type-3', id: '3' },
];

const SoPackingFill = () => {
	const [selectedType, setSelectedType] = React.useState(null);

	const handleTypeChange = (e) => {
		setSelectedType(e.target.value);
	};
	return (
		<div className="w-full px-4  ">
			<div className="flex justify-between items-center my-4 ">
				<h3 className="text-secondary-grey">Packing Type</h3>
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

			<div className="flex justify-between items-center my-4">
				<h3 className="text-secondary-grey">1 pack quantity</h3>
				<TextField
					sx={{ width: 100 }}
					id="outlined-basic"
					variant="outlined"
					size="small"
				/>
			</div>
			<div className="flex justify-between items-center my-">
				<h3 className="text-secondary-grey">Gross Weight:</h3>
				<TextField
					sx={{ width: 110, padding: '0 8px' }}
					id="outlined-basic"
					variant="outlined"
					size="small"
					InputProps={{
						endAdornment: <InputAdornment position="end">Kgs</InputAdornment>,
					}}
				/>
			</div>
			<div className="flex justify-between items-center my-7">
				<TextField
					sx={{ width: 300 }}
					id="outlined-basic"
					variant="outlined"
					size="small"
					placeholder="Shipment Mark : Information"
				/>
			</div>
		</div>
	);
};

export default SoPackingFill;
