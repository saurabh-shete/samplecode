import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, Select, TextField } from '@mui/material';
import SoPackingFill from './SoPackingFill';
import SoProductQuantityFill from './SoProductQuantityFill';
import SoProductPriceFill from './SoProductPriceFill';
import SoAmountFill from './SoAmountFill';
import SoProductDetails from './SoProductDetails';

const SoProductItem = ({ product }) => {
	return (
		<>
			{product && (
				<React.Fragment>
					<Accordion className="w-full">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{ background: '#D4DAF9' }}
						>
							<div className="w-full flex">
								<div className="w-[30%] text-center">{product.name}</div>
								<div className="w-1/4 text-center">{product.packingType}</div>
								<div className="w-[15%] text-center">{product.quantity}</div>
								<div className="w-1/5 text-center">{product.rate}</div>
								<div className="w-[12%] text-center">{product.amount}</div>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<div className="flex w-full">
								<div className="w-[30%]">
									<SoProductDetails />
								</div>
								<div className=" w-1/4 mx-2">
									<SoPackingFill />
								</div>
								<div className=" w-1/8 mx-2">
									<SoProductQuantityFill />
								</div>
								<div className=" w-1/5 mx-2">
									<SoProductPriceFill />
								</div>
								<div className=" w-1/8 mx-2">
									<SoAmountFill />
								</div>
							</div>
						</AccordionDetails>
					</Accordion>
				</React.Fragment>
			)}
		</>
	);
};

export default SoProductItem;
