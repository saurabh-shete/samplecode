/**
 * Automatic form field generator. Depending on the input received, generates a CONTROLLED form field,
 * with validations, hints, and customizations (as much as the underlying framework can provide).
 *
 * @author Saunved <saunved@gmail.com>
 * @created 16 October, 2023
 */

import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, FormLabel } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';

export default function AutoField ({ field, fieldClass, errors = [], onChange, value, onBlur, onValueChange, setSource }) {
    const fieldHasErrors = !!errors.length;
    const [searchTerm, setSearchTerm] = useState('');
    const [shrink, setShrink] = useState(false);

    const autoFieldMapper = {
        select: () => {
            return (
                <FormControl>
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                        onChange={evt => onValueChange(field.id, evt.target.value)}
                        onBlur={onBlur}
                        value={value}
                        label={field.label}
                        onfocusout={() => setSearchTerm('')}
                        InputLabelProps={{ style: field?.leftEndIcon ? { marginLeft: 30 } : {} }}
                        InputProps={{
                            ...field?.leftEndIcon,
                            ...field?.rightEndIcon,
                        }}
                        fullWidth
                    >
                        <input className='absolute left-[-9999px]' type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        {field.source
                            .filter(item => {
                                const [code, name] = item.name.split(' | ');
                                return code.toLowerCase().includes(searchTerm.toLowerCase()) || name.toLowerCase().includes(searchTerm.toLowerCase());
                            })
                            .map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                    {field?.sub_label && <FormLabel>{field.sub_label}</FormLabel>}
                    <FormHelperText>{fieldHasErrors && errors[0]}</FormHelperText>
                </FormControl>
            );
        },
        customizedSelect: () => {
            return (
                <FormControl>
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                        onChange={evt => onValueChange(field.id, evt.target.value)}
                        onBlur={onBlur}
                        value={value}
                        label={field.label}
                        fullWidth
                        InputLabelProps={{ style: field?.leftEndIcon ? { marginLeft: 30 } : {} }}
                        InputProps={{
                            ...field?.leftEndIcon,
                            ...field?.rightEndIcon,
                        }}
                    >
                        {field.source[0].map(item => {
                            return (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            );
                        })}
                        <MenuItem onClick={() => field?.onClickEvent[0](true)}>
                            <span className='text-[#4257BE]'>Manage Manufacturers</span>
                        </MenuItem>
                    </Select>
                    {field?.sub_label && <FormLabel>{field.sub_label}</FormLabel>}
                    <FormHelperText>{fieldHasErrors && errors[0]}</FormHelperText>
                </FormControl>
            );
        },

        date: () => {
            return (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormControl>
                        <DatePicker
                            InputLabelProps={{ style: field?.leftEndIcon ? { marginLeft: 30 } : {} }}
                            onChange={newValue => onValueChange(field.id, newValue)}
                            label={field.label}
                            //value={value}
                            name={field.id}
                            format={field.format || 'YYYY-MM-DD'}
                            InputProps={{
                                ...field?.leftEndIcon,
                                ...field?.rightEndIcon,
                            }}
                        />
                        <FormHelperText>{fieldHasErrors && errors[0]}</FormHelperText>
                    </FormControl>
                    {field?.sub_label && <FormLabel>{field.sub_label}</FormLabel>}
                </LocalizationProvider>
            );
        },
        text: () => {
            return (
                <FormControl>
                    <TextField
                        error={fieldHasErrors}
                        InputLabelProps={{ shrink: !!value, style: field?.leftEndIcon ? { marginLeft: 30 } : {} }}
                        name={field.id}
                        onChange={onChange}
                        label={field.label}
                        id={field.id}
                        defaultValue={field.defaultValue}
                        onBlur={onBlur}
                        helperText={fieldHasErrors && errors[0]}
                        disabled={field.disabled === true}
                        InputProps={{
                            ...field?.leftEndIcon,
                            ...field?.rightEndIcon,
                        }}
                    />
                    {field?.sub_label && <FormLabel>{field.sub_label}</FormLabel>}
                </FormControl>
            );
        },
    };

    if (autoFieldMapper[field.type]) {
        return autoFieldMapper[field.type]();
    }

    // This is a fallback for elements that are not recognizable
    return (
        <div>
            <label htmlFor={field.id}>{field.label}</label>
            <input id={field.id} name={field.id} type='text' className={fieldClass} placeholder={field.label} />
            {errors.length ? errors[0].message : null}
        </div>
    );
}
