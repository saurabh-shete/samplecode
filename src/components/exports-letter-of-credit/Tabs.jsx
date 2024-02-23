import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { SimpleDatePicker, SimpleSelect, SimpleTextArea, SimpleTextbox } from '../../utils/index.jsx';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import DragDropFileUpload from '../delivery/DragDropFileUpload.jsx';

const applicantDetails = [
	{ label: 'applicant1', val: 'applicant1' },
	{ label: 'applicant2', val: 'applicant2' },
	{ label: 'applicant3', val: 'applicant3' },
	{ label: 'applicant4', val: 'applicant4' },
	{ label: 'applicant5', val: 'applicant5' },
];

export function Attachments() {
	return (
		<div>
			<DragDropFileUpload />
		</div>
	);
}

export function AdditionalInfo() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Additional Information</p>
				</AccordionSummary>
				<AccordionDetails className='flex flex-col gap-y-4'>
					<div className='grid grid-cols-3 gap-4 items-center'>
						<SimpleSelect options={applicantDetails} label='LC Transfer' name='applicant' />
						<SimpleTextbox label='Authorized Bank for Transfer' placeholder='Bank name'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleSelect options={applicantDetails} label='Credit Available with' name='applicant' />
						<SimpleTextbox label='Credit By (41A)' placeholder='credit'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Deffered Payment Details (42P)' placeholder='details'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
					<SimpleTextArea label='Additional Conditions' placeholder='Additional Conditions' />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Bank Details</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-3 gap-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Advise Through Bank (57A)' name='applicant' />
						<SimpleTextbox label='Branch' placeholder='Enter Branch name'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 1' placeholder='Address line 1'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 2' placeholder='Address line 2'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='City' placeholder='City'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='State' placeholder='State'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Country' placeholder='Country'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Postal Code' placeholder='code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='BIC Code' placeholder='BIC code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Charges</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-2 gap-4 items-start'>
						<SimpleSelect options={applicantDetails} label='All Charges other than issuing bank charges to (71B)'
													name='applicant' />
						<div></div>
						<SimpleSelect options={applicantDetails} label='Reimbursing Bank (53A)' name='applicant' />
						<SimpleSelect options={applicantDetails} label='Usance facility' name='applicant' />
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export function DocsInfo() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Documents Required (46A)</p>
				</AccordionSummary>
				<AccordionDetails className='flex flex-col gap-y-4'>
					<SimpleTextArea label='Details' placeholder='Enter details of documents required' />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}


export function GoodsInfo() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Goods Information</p>
				</AccordionSummary>
				<AccordionDetails className='flex flex-col gap-y-4'>
					<div className='grid grid-cols-3 gap-4 items-end'>
						<SimpleSelect options={applicantDetails} label='Partial Shipment Option (43P)' name='applicant' />
						<SimpleTextbox label='Transhipment Option (43P)' placeholder='Prohibited'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Place of Receipt (44A)' placeholder='place...'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Place of Final Destination (44B)' placeholder='destination...'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Port of Loading / Airport of Departure (44E)'
													 placeholder='Port of Loading / Airport of Departure'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Port of Discharge / Airport of Destination'
													 placeholder='Port of Discharge / Airport of Destination'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleDatePicker label='Latest Date of Shipment (44C)' name='shipmentDate' />
						<SimpleTextbox label='Shipment Period to (44D)' placeholder='shipment period'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Country of Origin' placeholder='country'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
					<SimpleTextArea label='Description of Goods and / or Services (45A)' />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Trade Details</p>
				</AccordionSummary>
				<AccordionDetails className='flex flex-col gap-y-4'>
					<div className='grid grid-cols-3 gap-4 items-end'>
						<SimpleSelect options={applicantDetails} label='Inco Term' name='applicant' />
						<SimpleTextbox label='Place' placeholder='place...'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='HS Code' placeholder='enter code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Presentation Period (48)' placeholder='Docs to be presented within'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Days from date of' placeholder='city'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export function LcInfo() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>LC Information</p>
				</AccordionSummary>
				<AccordionDetails className='flex flex-col gap-y-4'>
					<div className='grid grid-cols-4 gap-x-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Type (40A)' name='applicant' />
					</div>
					<div className='grid grid-cols-3 gap-x-4 mt-4'>
						<FormControl>
							<FormLabel>
								<p className='font-bold'>
									Domestic / Foreign
								</p>
							</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='limit' control={<Radio />} label='Domestic LC' />
								<FormControlLabel value='fc' control={<Radio />} label='Foreign LC' />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>
								<p className='font-bold'>
									Red Clause
								</p>
							</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='limit' control={<Radio />} label='Yes' />
								<FormControlLabel value='fc' control={<Radio />} label='No' />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>
								<p className='font-bold'>
									Revolving
								</p>
							</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='limit' control={<Radio />} label='Yes' />
								<FormControlLabel value='fc' control={<Radio />} label='No' />
							</RadioGroup>
						</FormControl>
					</div>
					<div className='grid grid-cols-3 gap-x-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Applicable Rules (40E)' name='applicant' />
						<SimpleSelect options={applicantDetails} label='LC Currency' name='applicant' />
						<SimpleTextbox label='Amount (32B)' placeholder='Amount'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
					<p>Maximum Credit Amount (39B) / Tolerance (39A)</p>
					<div className='grid grid-cols-4 gap-x-4'>
						<SimpleTextbox placeholder='Not Exceeding'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox placeholder='%'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox placeholder='%'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox placeholder='Additional Amount (39C)'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
					<div className='grid grid-cols-3 gap-4'>
						<SimpleDatePicker label='Date of Issuance' name='issuanceDate' />
						<SimpleDatePicker label='Date of Expiry' name='expiryDate' />
						<SimpleTextbox placeholder='Place of Expiry (31D)'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleSelect options={applicantDetails} label='Purpose' name='applicant' />
						<SimpleTextbox placeholder='No. of days' label='Tenor (42C)'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleSelect options={applicantDetails} label='Usage Type' name='applicant' />
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Advising Bank Details</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-3 gap-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Bank Name' name='applicant' />
						<SimpleTextbox label='Branch' placeholder='Enter Branch name'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 1' placeholder='Address line 1'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 2' placeholder='Address line 2'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='City' placeholder='City'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='State' placeholder='State'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Country' placeholder='Country'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Postal Code' placeholder='code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='BIC Code' placeholder='BIC code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Beneficiary Details</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-2 gap-4 items-start'>
						<SimpleSelect options={applicantDetails} label='Select Beneficiary' name='applicant' />
						<SimpleTextArea label='Beneficiary Address' placeholder='Enter address' name='benAddr' />
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export function ApplicantInfo() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Applicant Information</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-3 gap-x-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Applicant' name='applicant' />
						<SimpleTextbox label='IEC Code' placeholder='Enter Amount'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleSelect options={applicantDetails} label='Delivery Via' name='deliveryVia' />
					</div>
					<div className='grid grid-cols-1 items-center mt-4'>
						<SimpleTextArea name='address' label='Address' placeholder='Enter Address' />
					</div>
					<div className='grid grid-cols-2 gap-x-4 mt-4'>
						<FormControl>
							<FormLabel>
								<p className='font-bold'>
									Limit / FD Backed
								</p>
							</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='limit' control={<Radio />} label='Limit Backed' />
								<FormControlLabel value='fc' control={<Radio />} label='FC Backed' />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>
								<p className='font-bold'>
									License
								</p>
							</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='limit' control={<Radio />} label='OGL' />
								<FormControlLabel value='fc' control={<Radio />} label='Non-OGL' />
							</RadioGroup>
						</FormControl>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p className='text-xl font-bold text-secondary-grey'>Issuing Bank Details</p>
				</AccordionSummary>
				<AccordionDetails>
					<div className='grid grid-cols-3 gap-4 items-center'>
						<SimpleSelect options={applicantDetails} label='Bank Name' name='applicant' />
						<SimpleTextbox label='Branch' placeholder='Enter Branch name'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 1' placeholder='Address line 1'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Address line 2' placeholder='Address line 2'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='City' placeholder='City'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='State' placeholder='State'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Country' placeholder='Country'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Postal Code' placeholder='code'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleTextbox label='Comm/Charges Amount' placeholder='amount'
													 className='border border-slate-300 px-6 py-4 focus:outline-none w-full rounded-lg' />
						<SimpleSelect options={applicantDetails} label='Select GSTIN' name='gstin' />
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
