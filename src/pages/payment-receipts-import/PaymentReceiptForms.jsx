import Paper from '@mui/material/Paper';
import { Stack, TextField } from '@mui/material';
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';
import React from 'react';

const vendors = [
	{ label: 'vendor 1', val: 'vendor1' },
	{ label: 'vendor 2', val: 'vendor2' },
	{ label: 'vendor 3', val: 'vendor3' },
	{ label: 'vendor 4', val: 'vendor4' },
];

const vendorBills = [
	{ label: 'vendor bill 1', val: 'vendorBill1' },
	{ label: 'vendor bill 2', val: 'vendorBill2' },
	{ label: 'vendor bill 3', val: 'vendorBill3' },
	{ label: 'vendor bill 4', val: 'vendorBill4' },
];

const poNumbers = [
	{ label: 'PO 1', val: 'po1' },
	{ label: 'PO 2', val: 'po2' },
	{ label: 'PO 3', val: 'po3' },
	{ label: 'PO 4', val: 'po4' },
];

export function AdvanceLeftForm({ formRef }) {
	return (
		<Paper className='p-4'>
			<form ref={formRef}>
				<Stack direction='column' rowGap={2}>
					<SimpleSelect
						name='vendorName'
						label='Vendor Name'
						options={vendors}
					/>
					<SimpleSelect
						name='PoNumber'
						label='PO Number'
						options={poNumbers}
					/>
					<TextField name='amount' label='Amount' placeholder='Enter Amount' />
					<p className='text-sm text-indigo-500'>Balance: 1200</p>
					<TextField name='amountCurrency' label='Amount Currency' placeholder='USD' />
					<TextField name='remarks' label='Remarks' placeholder='remarks' />
				</Stack>
			</form>
		</Paper>
	);
}

export function DepositLeftForm({ formRef }) {
	return (
		<Paper className='p-4'>
			<form ref={formRef}>
				<Stack direction='column' rowGap={2}>
					<SimpleSelect
						name='vendorName'
						label='Vendor Name'
						options={vendors}
					/>
					<SimpleSelect
						name='vendorBill'
						label='Select Vendor Bill'
						options={vendorBills}
					/>
					<TextField name='amount' label='Amount Received' placeholder='Enter Amount' />
					<TextField name='amountCurrency' label='Amount Currency' placeholder='USD' />
				</Stack>
			</form>
		</Paper>
	);
}

export function RightForm({ formRef, isAdvance }) {
	return (
		<Paper className='p-4'>
			<form ref={formRef}>
				<Stack direction='column' rowGap={2}>
					<TextField name='paymentId' label='Payment ID' placeholder='Payment id' />
					{
						!isAdvance && <TextField name='payer' label='Payer' placeholder='Payer' />
					}
					<SimpleDatePicker label='Payment Date' name='paymentDate' />
					<TextField name='paymentRefNo' label='Payment Reference Number' placeholder='refno' />
					{
						isAdvance && (
							<SimpleDatePicker label='Valid Till' name='validTill' />
						)
					}
					{
						!isAdvance && (
							<TextField name='remarks' label='Remarks' placeholder='remarks' />
						)
					}
				</Stack>
			</form>
		</Paper>
	);
}
