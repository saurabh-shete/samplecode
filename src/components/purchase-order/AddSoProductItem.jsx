import {
	Box,
	Button,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Paper,
} from '@mui/material';
import React from 'react';
import SoProductNameFill from './SoProductNameFill';
import SoPackingFill from './SoPackingFill';
import SoProductQuantityFill from './SoProductQuantityFill';
import SoProductPriceFill from './SoProductPriceFill';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	m: '0 10px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const SoProductAmount = () => {
	return <div className=" px-4 w-full ">10000</div>;
};

const steps = [
	{
		label: 'Product Name',
		component: <SoProductNameFill />,
	},
	{
		label: 'Packing Details',
		component: <SoPackingFill />,
	},
	{
		label: 'Quantity',
		component: <SoProductQuantityFill />,
	},
	{
		label: 'Price',
		component: <SoProductPriceFill />,
	},
	{
		label: 'Amount',
		component: <SoProductAmount />,
	},
];

const AddSoProductItem = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = (index) => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		if (index === steps.length - 1) {
			handleClose();
			handleReset();
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<>
			<Button
				variant="contained"
				size="small"
				sx={{ height: '40px' }}
				onClick={handleOpen}
			>
				Add Product
			</Button>
			{/* </div> */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Stepper
						sx={{ width: 500 }}
						activeStep={activeStep}
						orientation="vertical"
					>
						{steps.map((step, index) => (
							<Step key={step.label}>
								<StepLabel
									optional={
										index === 4 ? (
											<Typography variant="caption">Last step</Typography>
										) : null
									}
								>
									{step.label}
								</StepLabel>
								<StepContent>
									<div className="">
										{step.component}
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant="contained"
													onClick={() => handleNext(index)}
													sx={{ mt: 1, mr: 1 }}
												>
													{index === steps.length - 1 ? 'Save' : 'Continue'}
												</Button>
												<Button
													disabled={index === 0}
													onClick={handleBack}
													sx={{ mt: 1, mr: 1 }}
												>
													Back
												</Button>
											</div>
										</Box>
									</div>
								</StepContent>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length && (
						<Paper square elevation={0} sx={{ p: 3 }}>
							<Typography>
								All steps completed - you&apos;re finished
							</Typography>
							<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
								Reset
							</Button>
						</Paper>
					)}
				</Box>
			</Modal>
		</>
	);
};

export default AddSoProductItem;
