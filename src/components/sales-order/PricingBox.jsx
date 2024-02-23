import { Button, TextField } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const PricingBox = () => {
	return (
		<>
			<div className="bg-[#D4DAFA] p-4 w-1/2 rounded-lg">
				<div className="w-full">
					<div className="flex justify-between my-4 w-full ">
						<div className="text-md  text-left font-bold w-1/3 ">Rate:</div>
						<div className="w-2/3">
							<TextField
								size="small"
								value={'1000'}
								variant="outlined"
								sx={{
									bgcolor: 'white',
									width: '100%',
									border: '1px solid gray',
									borderRadius: '10px',
									textAlign: 'right',
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between my-4">
						<div className="text-md text-left font-bold w-1/3 ">Discount:</div>
						<div className="w-2/3">
							<TextField
								size="small"
								variant="outlined"
								sx={{
									bgcolor: 'white',
									width: '100%',
									border: '1px solid gray',
									borderRadius: '10px',
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between my-4">
						<div className="text-md text-left font-bold w-1/3 ">
							Adjustment:
						</div>
						<div className="w-2/3">
							<TextField
								size="small"
								variant="outlined"
								sx={{
									bgcolor: 'white',
									width: '100%',
									border: '1px solid gray',
									borderRadius: '10px',
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between my-4">
						<div className="text-md text-left font-bold w-1/3 ">Tax:</div>
						<div className="w-2/3">
							<TextField
								size="small"
								value={'1200'}
								variant="outlined"
								sx={{
									bgcolor: 'lightgray',
									width: '100%',
									border: '1px solid gray',
									borderRadius: '10px',
									textAlign: 'right',
								}}
							/>
						</div>
					</div>
				</div>
				<div className="text-left">
					<Button startIcon={<AddIcon />} variant="contained">
						Add line
					</Button>
				</div>
				<div className="border-t-2 my-4 border-gray-400 w-full flex justify-between">
					<h1 className="text-xl py-4 font-bold">Total</h1>
					<h1 className="text-xl py-4 font-bold">12000</h1>
				</div>
			</div>
		</>
	);
};

export default PricingBox;
