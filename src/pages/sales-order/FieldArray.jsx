import React, { useState } from 'react';
import { Select, MenuItem, IconButton, Grid, Button, TextField, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Text } from 'html-react-parser';

const FieldArray = () => {
    const [selectValues, setSelectValues] = useState(['Type', 'Type']);
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
                            xs={5}
                            sx={{
                                marginRight: 2,
                            }}
                        >
                            <FormControl>
                                <InputLabel>{'Type'}</InputLabel>
                                <Select
                                    onChange={() => handleSelect(e)}
                                    label='Type'
                                    sx={{
                                        width: 300,
                                    }}
                                    fullWidth
                                >
                                    <MenuItem value='Type'>Type</MenuItem>
                                    <MenuItem value='Option 1'>Option 1</MenuItem>
                                    <MenuItem value='Option 2'>Option 2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                placeholder='Partner Name'
                                label='Partner Name'
                                sx={{
                                    width: 300,
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
