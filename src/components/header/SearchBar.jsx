import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SearchBar = () => {
	return (
		<div className="flex rounded-l-full rounded-r-full bg-[#F8F8F8] p-2 ml-4">
			<div className="border-r-2 mr-2 text-[#7B7B7B]">
				<SearchIcon />
				<ArrowDropDownIcon className="cursor-pointer" />
			</div>
			<div>
				<input
					className="border-none bg-[#F8F8F8] text-[#7B7B7B] outline-none w-64 placeholder-[#7B7B7B]"
					placeholder="Search in Sales order"
				/>
			</div>
		</div>
	);
};

export default SearchBar;
