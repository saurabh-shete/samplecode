import Paper from '@mui/material/Paper'
import {Stack, TextField} from '@mui/material'
import {SimpleDatePicker, SimpleSelect} from '../../utils/index.jsx'
import React from 'react'

const obj = {
	"Customer Name": "Name of the Customer",
	"Invoice Date": "02/05/2022",
	"Invoice Amount": "USD 12000",
	"Payment Due Date": "05/00/2022",
	"Advance Received": "USD 3000",
	"Payment Against Invoice": "USD 2000",
	"Total Payment Received": "USD 1000",
	"Balance Amount": "USD 100"
};

const rightObj = {
	"Shipping Bill No.": "SB-2914",
	"Shipping Bill Date": "02/05/2022",
};

const invoice = [
	{label: 'invoice 1', val: 'invoice1'},
	{label: 'invoice 2', val: 'invoice2'},
	{label: 'invoice 3', val: 'invoice3'},
	{label: 'invoice 4', val: 'invoice4'}
]

export function LeftForm({formRef}) {
	return (
		<Paper className='p-4'>
			<form ref={formRef}>
				<Stack direction='column' rowGap={2}>
					<SimpleSelect
						label='Invoice ID'
						name='invoiceId'
						options={invoice}
					/>
					<div>
						{
							Object.entries(obj).map(entry => (
								<div className="grid grid-cols-4 gap-x-4">
									<p className="font-bold text-primary-grey">{entry[0]}</p>
									<p className="text-md text-secondary-grey">{entry[1]}</p>
								</div>
							))
						}
					</div>
					<TextField name="Bank Lodgement reference number" label="Bank Lodgement Reference Number"/>
					<SimpleDatePicker label='Bank Lodgement Reference Date' name='Bank Lodgement reference date'/>
				</Stack>
			</form>
		</Paper>
	)
}

export function RightForm({formRef}) {
	return (
		<Paper className='p-4'>
			<form ref={formRef}>
				<Stack direction='column' rowGap={2}>
					<div>
						{
							Object.entries(rightObj).map(entry => (
								<div className="grid grid-cols-4 gap-x-4">
									<p className="font-bold text-primary-grey">{entry[0]}</p>
									<p className="text-md text-secondary-grey">{entry[1]}</p>
								</div>
							))
						}
					</div>
					<TextField name="shippingBillAmt" label="Shipping Bill Amount"/>
					<TextField name="adBank" label="AD Bank" placeholder="BRC Number"/>
					<TextField name="adBankIfsc" label="AD Bank IFSC Code" placeholder="IFSC Code"/>
				</Stack>
			</form>
		</Paper>
	)
}

export const cols = [
	{
		"label": "Payment ID",
		"property": "Payment ID"
	},
	{
		"label": "Bank Reg. Ref. No.",
		"property": "Bank Reg. Ref. No."
	},
	{
		"label": "Bank Reg. Ref. Date",
		"property": "Bank Reg. Ref. Date"
	},
	{
		"label": "Exchange Rate",
		"property": "Exchange Rate"
	},
	{
		"label": "INR Value",
		"property": "INR Value"
	},
	{
		"label": "BRC Number",
		"property": "BRC Number"
	},
	{
		"label": "BRC Amount",
		"property": "BRC Amount"
	},
	{
		"label": "BRC Date",
		"property": "BRC Date"
	}
]

export const rows = [
	{
		"Payment ID": `<div className="flex flex-col">
										<p>PMT-FV23-0002</p>
										<p>Amount: USD 3000</p>
										<p>Bank: ICICI Bank</p>
									</div>`,
		"Bank Reg. Ref. No.": "ABC0002",
		"Bank Reg. Ref. Date": "03/02/2001",
		"Exchange Rate": "78",
		"INR Value": "78000",
		"BRC Number": "BRC8930",
		"BRC Amount": "3000",
		"BRC Date": "25/12/2023",
	},
	{
		"Payment ID": `<div className="flex flex-col">
										<p>PMT-FV23-0002</p>
										<p>Amount: USD 3000</p>
										<p>Bank: ICICI Bank</p>
									</div>`,
		"Bank Reg. Ref. No.": "ABC0002",
		"Bank Reg. Ref. Date": "03/02/2001",
		"Exchange Rate": "78",
		"INR Value": "78000",
		"BRC Number": "BRC8930",
		"BRC Amount": "3000",
		"BRC Date": "25/12/2023",
	},
	{
		"Payment ID": `<div className="flex flex-col">
										<p>PMT-FV23-0002</p>
										<p>Amount: USD 3000</p>
										<p>Bank: ICICI Bank</p>
									</div>`,
		"Bank Reg. Ref. No.": "ABC0002",
		"Bank Reg. Ref. Date": "03/02/2001",
		"Exchange Rate": "78",
		"INR Value": "78000",
		"BRC Number": "BRC8930",
		"BRC Amount": "3000",
		"BRC Date": "25/12/2023",
	},
	{
		"Payment ID": `<div className="flex flex-col">
										<p>PMT-FV23-0002</p>
										<p>Amount: USD 3000</p>
										<p>Bank: ICICI Bank</p>
									</div>`,
		"Bank Reg. Ref. No.": "ABC0002",
		"Bank Reg. Ref. Date": "03/02/2001",
		"Exchange Rate": "78",
		"INR Value": "78000",
		"BRC Number": "BRC8930",
		"BRC Amount": "3000",
		"BRC Date": "25/12/2023",
	},
]
