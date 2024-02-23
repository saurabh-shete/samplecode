import React, { useState } from 'react';
import { Select, MenuItem, IconButton, Grid, Button, TextField, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { Text } from 'html-react-parser';

const FieldArray = () => {
    const [selectValues, setSelectValues] = useState(['Purchase Order', 'Sales Quatation', 'Contract']);
    const [showAddDelete, setShowAddDelete] = useState(false);
    const [val, setVal] = useState('Type');
    const handleAddSelect = () => {
        setSelectValues([...selectValues, 'Type']);
    };

    const handleDeleteSelect = index => {
        const updatedValues = [...selectValues];
        updatedValues.splice(index, 1);
        setSelectValues(updatedValues);
    };

    const handleToggleAddDelete = () => {
        setShowAddDelete(!showAddDelete);
    };

    const handleSelect = e => {
        setVal(e.target.value);
    };

    return (
        <>
            <form className='col-span-8 p-6 bg-white rounded-xl'>
                {selectValues.map((value, index) => (
                    <Grid
                        container
                        alignItems='center'
                        key={index}
                        sx={{
                            padding: 1,
                        }}
                    >
                        <Grid
                            item
                            xs={3}
                            sx={{
                                marginRight: 2,
                            }}
                        >
                            <InputLabel>{value}</InputLabel>
                        </Grid>
                        <Grid item xs={7}>
                            <TextField
                                placeholder='Upload'
                                label='Upload'
                                sx={{
                                    width: 400,
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton edge='end'>
                                            <DownloadIcon />
                                        </IconButton>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            sx={{
                                marginRight: 1,
                            }}
                        >
                            <IconButton onClick={() => handleDeleteSelect(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                        {index === selectValues.length - 1 && (
                            <Grid item>
                                {showAddDelete ? (
                                    <IconButton onClick={handleToggleAddDelete}>
                                        <DeleteIcon />
                                    </IconButton>
                                ) : (
                                    <Button variant='contained' color='primary' onClick={handleAddSelect}>
                                        Add
                                    </Button>
                                )}
                            </Grid>
                        )}
                    </Grid>
                ))}
            </form>
        </>
    );
};

export default FieldArray;
