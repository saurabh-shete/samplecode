import Paper from "@mui/material/Paper";
import {Stack, TextField} from "@mui/material";
import {SimpleDatePicker, SimpleSelect} from "../../utils/index.jsx";
import React from "react";

const customers = [
	{label: 'Customer 1', val: 'customer1'},
	{label: 'Customer 2', val: 'customer2'},
	{label: 'Customer 3', val: 'customer3'},
	{label: 'Customer 4', val: 'customer4'}
]

const policyIds = [
	{label: 'Policy ID 1', val: 'policyId1'},
	{label: 'Policy ID 2', val: 'policyId2'},
	{label: 'Policy ID 3', val: 'policyId3'},
	{label: 'Policy ID 4', val: 'policyId4'}
];

const invoiceNumbers = [
	{label: 'Invoice No. 1', val: 'invoiceNo1'},
	{label: 'Invoice No. 2', val: 'invoiceNo2'},
	{label: 'Invoice No. 3', val: 'invoiceNo3'},
	{label: 'Invoice No. 4', val: 'invoiceNo4'}
];

const paymentTerms = [
	{ label: 'Payment Term 1', val: 'paymentTerm1' },
	{ label: 'Payment Term 2', val: 'paymentTerm2' },
	{ label: 'Payment Term 3', val: 'paymentTerm3' },
	{ label: 'Payment Term 4', val: 'paymentTerm4' }
];

const countries = [
	{ label: 'Country 1', val: 'country1' },
	{ label: 'Country 2', val: 'country2' },
	{ label: 'Country 3', val: 'country3' },
	{ label: 'Country 4', val: 'country4' }
];

const ratings = [
	{ label: 'Rating 1', val: 'rating1' },
	{ label: 'Rating 2', val: 'rating2' },
	{ label: 'Rating 3', val: 'rating3' },
	{ label: 'Rating 4', val: 'rating4' }
];

const coverTypes = [
	{ label: 'Cover Type 1', val: 'coverType1' },
	{ label: 'Cover Type 2', val: 'coverType2' },
	{ label: 'Cover Type 3', val: 'coverType3' },
	{ label: 'Cover Type 4', val: 'coverType4' }
];

const policyTypes = [
	{ label: 'Policy Type 1', val: 'policyType1' },
	{ label: 'Policy Type 2', val: 'policyType2' },
	{ label: 'Policy Type 3', val: 'policyType3' },
	{ label: 'Policy Type 4', val: 'policyType4' }
];


export function PolicyTab({formRef}) {
	return (
		<div className="grid grid-cols-2 gap-16">
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<TextField
							name='policyNumber'
							label='ECGC Policy Number'
							placeholder="Enter policy number"
						/>
						<SimpleSelect
							name='policyType'
							label='ECGC Policy Type'
							options={policyTypes}
						/>
						<TextField
							name='advancePremium'
							label='Advance Premium'
							placeholder="Enter advance premium"
						/>
						<TextField
							name='balance'
							label='Balance'
							placeholder="Enter balance"
						/>
						<TextField
							name='bonus'
							label='No claim bonus'
							placeholder="Enter bonus"
						/>
					</Stack>
				</form>
			</Paper>
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<TextField
							name='policyId'
							label='ECGC Policy ID'
							placeholder="Enter ID"
						/>
						<SimpleDatePicker label="Valid From" name="validFrom" />
						<SimpleDatePicker label="Valid Till" name="validTill" />
						<TextField
							name='customerReference'
							label='Customer Reference'
							placeholder="Customer Reference Number"
						/>
					</Stack>
				</form>
			</Paper>
		</div>
	)
}

export function CountryTab({formRef}) {
	return (
		<div className="grid grid-cols-2 gap-16">
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<SimpleSelect
							name='country'
							label='Country Name'
							options={countries}
						/>
						<SimpleSelect
							name='policyId'
							label='ECGC Policy ID'
							options={policyIds}
						/>
						<TextField
							name='premium'
							label='Premium %'
							placeholder="Enter premium %"
						/>
					</Stack>
				</form>
			</Paper>
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<SimpleSelect name="rating" label="ECGC Rating" options={ratings} />
						<SimpleSelect name="coverType" label="Type of Cover" options={coverTypes} />
					</Stack>
				</form>
			</Paper>
		</div>
	)
}

export function CustomerTab({formRef}) {
	return (
		<div className="grid grid-cols-2 gap-16">
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<SimpleSelect
							name='customerName'
							label='Customer Name'
							options={customers}
						/>
						<SimpleSelect
							name='paymentTerm'
							label='Payment Term'
							options={paymentTerms}
						/>
						<SimpleSelect
							name='policyId'
							label='Policy ID'
							options={policyIds}
						/>
						<TextField
							name='premium'
							label='Premium %'
							placeholder="Enter premium %"
						/>
					</Stack>
				</form>
			</Paper>
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<SimpleDatePicker label="Activation Date" name="activationDate" />
						<TextField
							name='limit'
							label='Limit'
							placeholder="Enter limit"
						/>
						<TextField
							name='status'
							label='Status'
							placeholder="Enter Status"
						/>
					</Stack>
				</form>
			</Paper>
		</div>
	)
}


export function TransactionTab({formRef}) {
	return (
		<div className="grid grid-cols-2 gap-16">
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<SimpleSelect
							name='customerName'
							label='Customer Name'
							options={customers}
						/>
						<SimpleSelect
							name='policyId'
							label='ECGC Policy ID'
							options={policyIds}
						/>
						<p className='text-sm text-secondary-grey'>Policy Type: Open</p>
						<p className='text-sm text-secondary-grey'>Type of Cover: Open</p>
						<p className='text-sm text-secondary-grey'>ECGC Rating: A1</p>
						<SimpleSelect
							name='invoiceNo'
							label='Invoice Number'
							options={invoiceNumbers}
						/>
						<p className='text-sm text-secondary-grey'>Payment Terms: Within 30 days from </p>
						<p className='text-sm text-secondary-grey'>Payment Due Date: 29/03/2023</p>
					</Stack>
				</form>
			</Paper>
			<Paper className='p-4'>
				<form ref={formRef}>
					<Stack direction='column' rowGap={2}>
						<TextField
							name='foreignCurrencyAmt'
							label='Amount in Foreign Currency'
							placeholder="USD"
						/>
						<TextField
							name='localCurrencyAmt'
							label='Amount in Local Currency'
							placeholder="INR"
						/>
						<p className='text-sm text-secondary-grey'>Exchange Rate: 81.20</p>
						<TextField
							name='premium'
							label='Premium %'
							placeholder="Enter premium %"
						/>
						<TextField
							name='premiumDiscountUsd'
							label='Premium Discount USD'
							placeholder="USD"
						/>
						<TextField
							name='premiumDiscountInr'
							label='Premium Discount INR'
							placeholder="INR"
						/>
						</Stack>
				</form>
			</Paper>
		</div>
	)
}