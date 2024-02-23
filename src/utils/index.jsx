import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useEffect, useRef, useState } from 'react';
import { FormControl, MenuItem, Select, Stack, Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { formatDistanceToNow } from 'date-fns';
import useStore from '../store/store';
export const hashedToken = import.meta.env.VITE_HASHED_PASS;

export default function EditableTable ({ rows, cols }) {
    return (
        <div>
            <div className='grid grid-cols-6 bg-indigo-400 text-white p-4 rounded-t-lg'>
                {cols.map(col => (
                    <div key={col.label}>
                        <p>{col.label}</p>
                    </div>
                ))}
            </div>
            {rows.map(row => (
                <div key={crypto.randomUUID()} className='grid grid-cols-6 bg-white text-black p-4 border-b border-x'>
                    {cols.map(col => (
                        <div key={crypto.randomUUID()}>
                            <EditableText initialValue={row[col.property]} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export function EditableText ({ initialValue, noPadding = false, padding = 4 }) {
    const [isEditing, setIsEditing] = useState(false);
    const [textValue, setTextValue] = useState(initialValue);
    const editAreaRef = useRef(null);

    function handleTextClick (e) {
        setIsEditing(true);
        setTimeout(() => {
            editAreaRef.current.focus();
        }, 10);
    }

    function handleSave () {
        setIsEditing(false);
        setTextValue(textValue);
    }

    function handleChange (event) {
        setTextValue(event.target.value);
    }

    return (
        <div className='w-full'>
            {isEditing ? (
                <textarea
                    ref={editAreaRef}
                    value={textValue}
                    className='break-words focus:outline-none focus:border focus:border-indigo-200 rounded-lg'
                    onChange={handleChange}
                    onBlur={handleSave}
                />
            ) : (
                <div
                    className={`w-full ${
                        noPadding ? '' : `p-${padding}`
                    } rounded-lg hover:border hover:border-slate-200 hover:cursor-pointer hover:shadow-lg`}
                    onClick={handleTextClick}
                    onMouseLeave={() => setIsEditing(false)}
                >
                    <p>{textValue}</p>
                </div>
            )}
        </div>
    );
}

export function SimpleDatePicker ({ label = 'pick a date', name = `date-picker-${Math.random()}` }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.name = name;
        }
    }, [inputRef.current]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker label={label} inputRef={inputRef} />
        </LocalizationProvider>
    );
}

export function SimpleSelect ({ label = 'select an option', name = `select-${Math.random()}`, options = [], noLabel = false, handleChange }) {
    return (
        <Stack rowGap={1}>
            {!noLabel && <p className='font-bold text-secondary-grey'>{label}</p>}
            <Select size='small' onChange={handleChange} className='bg-white rounded-lg focus:outline-none' name={name} defaultValue={options[0].val}>
                {options &&
                    options.map(opt => (
                        <MenuItem value={opt.val} key={Math.random()}>
                            {opt.label}
                        </MenuItem>
                    ))}
            </Select>
        </Stack>
    );
}

export function SimpleTextArea ({ placeholder, rows = 4, name, label, noLabel = false }) {
    return (
        <div className='w-full'>
            {!noLabel && <p className='pb-2 font-bold text-secondary-grey'>{label}</p>}
            <textarea rows={rows} className='w-full border rounded-lg p-4' name={name} placeholder={placeholder}></textarea>
        </div>
    );
}

export function SimpleTextbox ({ label = '', ...props }) {
    return (
        <div className='flex flex-col items-start'>
            {label !== '' && <p className='pb-2 font-bold text-secondary-grey'>{label}</p>}
            <input type='text' {...props} />
        </div>
    );
}

export function isAuthenticated () {
    // if (useStore.getState().isUserLoggedIn) {
    //     return true;
    // }
    return true;
}
export function whichOrg () {
    return !useStore.getState().isOrgSelected;
}

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#7888D7',
        color: theme.palette.common.white,
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
export function CustomizedTables ({ rowsList, cellNames }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='customized table'>
                <TableHead>
                    <TableRow>
                        {cellNames.map(cell => (
                            <StyledTableCell>{cell}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsList?.map((row, index) => (
                        <StyledTableRow key={index}>
                            {Object.values(row)?.map((cell, cellIndex) => (
                                <StyledTableCell key={cellIndex}>{cell}</StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export function fToNow (date) {
    return date
        ? formatDistanceToNow(new Date(date), {
              addSuffix: true,
          })
        : '';
}
