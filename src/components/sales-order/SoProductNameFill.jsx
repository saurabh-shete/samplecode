import { MenuItem, Select } from '@mui/material';
import React from 'react';

const productsItems = [
	{
		name: 'Steel T1',
		id: '0001',
		tax: '13%',
	},
	{
		name: 'Steel T2',
		id: '0002',
		tax: '12%',
	},
	{
		name: 'Steel T3',
		id: '0003',
		tax: '11%',
	},
];

const SoProductNameFill = () => {
	const [selectedProduct, setSelectedProduct] = React.useState(null);
	const handleProductChange = (event) => {
		// const item = productsItems?.find((v) => v.id === event.target.value);
		setSelectedProduct(event.target.value);
	};

	return (
		<div className="w-full px-2  flex justify-between items-center ">
			<h3>Product: </h3>
			<Select
				value={selectedProduct}
				onChange={handleProductChange}
				displayEmpty
				inputProps={{ 'aria-label': 'Without label' }}
				sx={{ m: 1, width: 300, height: 40 }}
				renderValue={(selected) => {
					if (selected?.length === 0) {
						return <em>Select a product</em>;
					}
				}}
			>
				{productsItems.map((item) => (
					<MenuItem key={item.id} value={item.id}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</div>
	);
};

export default SoProductNameFill;
