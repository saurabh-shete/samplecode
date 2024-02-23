import {
    Box,
    Button,
    Grid,
    Paper,
    Select,
    Stack,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import React, { useState } from 'react';
import { Navigate, useAsyncError, useNavigate, useParams } from 'react-router-dom';
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { CheckBox } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';
import AddManufacturer from '../../components/product/AddManufacturer.jsx';
import AddUnitOfMeasurement from '../../components/product/AddUnitOfMeasurement.jsx';
import AddTaxRate from '../../components/product/AddTaxRate.jsx';
import { useEffect } from 'react';
import AddBrand from '../../components/product/AddBrand.jsx';

const ProductCreate = () => {
    localStorage.setItem('organizationId', '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde');
    const navigate = useNavigate();
    const { id } = useParams();
    const [isChecked, setIsChecked] = useState(false);
    const [groupInfo, setGroupInfo] = useState([]);
    const [manufacturerDetails, setManufacturerDetails] = useState([]);
    const [brandDetails, setBrandDetails] = useState([]);
    const [measurementDetails, setMeasurementDetails] = useState([]);
    const [taxRateDetails, setTaxRateDetails] = useState([]);
    const [isAddManufacturerOpen, setIsAddManufacturerOpen] = useState(false);
    const [isBrandOpen, setIsAddBrandOpen] = useState(false);
    const [isUnitOfMeasurement, setIsUnitOfMeasurement] = useState(false);
    const [isTaxRate, setIsTaxRate] = useState(false);
    const [manufacturerId, setManufacturerId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [unitOfMeasurementId, setUnitOfMeasurementId] = useState('');
    const [taxRateId, setTaxRateId] = useState('');
    const [weightUnits, setWeightUnits] = useState([]);
    const [dimensionUnits, setDimensionUnits] = useState([]);
    const {
        handleSubmit,
        register,
        control,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();
    const axiosPrivate = useAxiosPrivate();

    // useEffect(() => {
    //     setValue('manufacturer', 'Select-or-Add-Manufacturer');
    // }, []);

    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked);
    };

    const setManufacturer = (value, id) => {
        setValue('manufacturer', value);
        setManufacturerId(id);
    };
    const setBrand = (value, id) => {
        setValue('brand', value);
        setBrandId(id);
    };

    const setMeasurement = (value, id) => {
        setValue('unitOfMeasurement', value);
        setUnitOfMeasurementId(id);
    };
    const setTaxRate = (value, id) => {
        setValue('taxRate', value);
        setTaxRateId(id);
    };

    useEffect(() => {
        const fetchData = async () => {
            const manufacturerResponse = await axiosPrivate.get('manufacturer');
            setManufacturerDetails(manufacturerResponse.data.data);
            const measurementResponse = await axiosPrivate.get('unit-of-measurement');
            setMeasurementDetails(measurementResponse.data.data);
            const taxRateResponse = await axiosPrivate.get('tax-category-rate');
            setTaxRateDetails(taxRateResponse.data.data);
            const brandResponse = await axiosPrivate.get('brand');
            setBrandDetails(brandResponse.data.data);
            const weightResponse = await axiosPrivate.get('weight-unit');
            setWeightUnits(weightResponse.data.data);
            const dimensionResponse = await axiosPrivate.get('dimension-unit');
            setDimensionUnits(dimensionResponse.data.data);
        };
        fetchData();
    }, []);

    const handleAddClick = () => {
        if (getValues('groupName').trim() !== '' && getValues('groupDes').trim() !== '') {
            const newGroupInfo = {
                groupName: getValues('groupName'),
                groupDescription: getValues('groupDes'),
            };
            setGroupInfo([...groupInfo, newGroupInfo]);
            setValue('groupName', '');
            setValue('groupDes', '');
        }
    };

    const handleDeleteClick = index => {
        const updatedGroupInfo = [...groupInfo];
        updatedGroupInfo.splice(index, 1);
        setGroupInfo(updatedGroupInfo);
    };

    const openAddUnitOfMeasurement = e => {
        setIsUnitOfMeasurement(true);
    };

    const closeAddUnitOfMeasurement = e => {
        setIsUnitOfMeasurement(false);
    };
    const openAddTaxRate = e => {
        setIsTaxRate(true);
    };

    const closeAddTaxRate = e => {
        setIsTaxRate(false);
    };

    const openAddManufacturer = e => {
        setIsAddManufacturerOpen(true);
    };
    const closeAddManufacturer = e => {
        setIsAddManufacturerOpen(false);
    };
    const openAddBrand = e => {
        setIsAddBrandOpen(true);
    };
    const closeAddBrand = e => {
        setIsAddBrandOpen(false);
    };

    const onSubmit = async formData => {
        console.log(brandId);
        console.log(manufacturerId);
        console.log(unitOfMeasurementId);
        console.log(taxRateId);
        const payload = {
            productCode: formData.productCode,
            productName: formData.productName,
            productType: formData.productType,
            productDescription: formData.productDes,
            hsnCode: formData.hsn,
            height: formData.height,
            width: formData.width,
            length: formData.length,
            weight: formData.weight,
            mpnNumber: formData.mpn,
            upcNumber: formData.upc,
            isbnNumber: formData.isbn,
            eanNumber: formData.ean,
            salesPrice: formData.sellingPrice,
            minSalesPrice: formData.minSalesPrice,
            minQuanityPerOrder: formData.minQuantityPerOrder,
            costOfProduct: formData.costPrice,
            shelfLife: formData.shelfLife,
            brandId: brandId || formData.brand,
            manufacturerId: manufacturerId || formData.manufacturer,
            unitOfMeasurementId: unitOfMeasurementId || formData.unitOfMeasurement,
            taxCategoryRateId: taxRateId || formData.taxRate,
            organizationId: JSON.parse(JSON.stringify(localStorage.getItem('organizationId'))),
            weightUnit: formData.unitOfWeight,
            dimensionUnit: formData.unitOfDimensions,
            productGroupDetails: groupInfo,
        };

        // const temp = {
        //     brandId: '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde',
        //     costOfProduct: '3243',
        //     dimensionUnit: 'cm',
        //     eanNumber: 'scs',
        //     height: '23332',
        //     hsnCode: 'sca',
        //     isbnNumber: 'asc',
        //     length: '532',
        //     manufacturerId: '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde',
        //     minQuanityPerOrder: '324',
        //     minSalesPrice: '432',
        //     mpnNumber: 'sac',
        //     organizationId: '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde',
        //     productCode: '3423',
        //     productDescription: 'cskjbk',
        //     productGroupDetails: [{ groupDescription: 'vssd', groupName: 'vsd' }],
        //     productName: 'vsdv',
        //     productType: 'hsbjcd',
        //     salesPrice: '34',
        //     shelfLife: '3534',
        //     taxCategoryRateId: '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde',
        //     unitOfMeasurementId: '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde',
        //     upcNumber: 'dsf',
        //     weight: '234',
        //     weightUnit: 'g',
        //     width: '234',
        // };

        //console.log(payload);
        const response = await axiosPrivate.post('product', payload);
        console.log(response);
        navigate('/products');
    };

    return (
        <div className='p-8 w-full h-screen !overflow-y-scroll no-scrollbar'>
            <div className='flex justify-between  my-6'>
                <h1 className='text-xl font-bold text-secondary-grey'>{id === 'new' ? 'Create' : 'Edit '} New Product</h1>
                <h1 className='text-secondary-grey text-lg'>Product</h1>
            </div>
            <Box className='flex flex-row items-center mt-4'>
                <Box className='py-2 px-4 bg-status-pink rounded-l-lg border border-status-pink'>
                    <Typography color='white'>Status</Typography>
                </Box>
                <Box className='py-2 px-8 border-t border-r border-b rounded-r-lg border-border-gray'>Draft</Box>
            </Box>
            <br />
            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Product Name</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('productName', { required: 'Product Name is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.productName?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Product Type</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('productType', {
                                required: 'Product Type is required',
                            })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.productType?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Product Code</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            placeholder='PRO-2023-CODE1'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('productCode', { required: 'Product Code is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.productCode?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Description</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            multiline
                            rows={4}
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '100px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('productDes', { required: 'Product Description is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.productDes?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '10px 10px' }}>
                        <p className='font-bold text-secondary-grey my-1'>Unit of Measurement</p>
                        <Controller
                            name='unitOfMeasurement'
                            control={control}
                            defaultValue='defaultValue'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        borderRadius: '12px',
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value='defaultValue'>Select Unit of Measurement</MenuItem>
                                    {measurementDetails.map((element, elementIndex) => (
                                        <MenuItem key={elementIndex} value={element.id}>
                                            {element.unitCode}
                                        </MenuItem>
                                    ))}

                                    <MenuItem onClick={e => openAddUnitOfMeasurement(e)}>
                                        <span className='text-[#4257BE]'>Manage Measurement</span>
                                    </MenuItem>
                                </Select>
                            )}
                        />
                        {isUnitOfMeasurement && (
                            <AddUnitOfMeasurement
                                onClose={() => closeAddUnitOfMeasurement()}
                                setMeasurement={setMeasurement}
                                setMeasurementDetailsFromProduct={setMeasurementDetails}
                            />
                        )}
                    </Box>
                    <h3 className='text-red-500'>{errors?.unitOfMeasurement?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '10px 10px' }}>
                        <p className='font-bold text-secondary-grey my-1'>Tax Rate</p>
                        <Controller
                            name='taxRate'
                            control={control}
                            defaultValue='defaultValue'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        borderRadius: '12px',
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value='defaultValue'>Select Tax rate</MenuItem>
                                    {taxRateDetails.map((element, elementIndex) => (
                                        <MenuItem key={elementIndex} value={element.id}>
                                            {element.gstCategory}
                                        </MenuItem>
                                    ))}

                                    <MenuItem onClick={e => openAddTaxRate(e)}>
                                        <span className='text-[#4257BE]'>Manage Tax rate</span>
                                    </MenuItem>
                                </Select>
                            )}
                        />
                    </Box>
                    {isTaxRate && (
                        <AddTaxRate onClose={() => closeAddTaxRate()} setTaxRate={setTaxRate} setTaxRateDetailsFromProduct={setTaxRateDetails} />
                    )}
                    <h3 className='text-red-500'>{errors?.taxRate?.message}</h3>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Shelf Life</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('shelfLife', { required: 'Shelf Life is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.shelfLife?.message}</h3>
                </Grid>
                <Grid item xs={5}>
                    <div className='mt-8'>
                        <Paper className='p-8 h-40'>Module to upload</Paper>
                    </div>
                </Grid>
            </Grid>
            <h1 className='p-2 w-full border-b-2 border-gray-400' />
            <Grid container className='w-full'>
                <Grid
                    item
                    xs={7}
                    sx={{
                        padding: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-14'>Dimensions</p>

                        <input
                            type='number'
                            placeholder='Length'
                            className='w-[12%] text-center'
                            {...register('length', { required: 'Length is required' })}
                        />
                        <span className='mt-2'>&nbsp;X&nbsp;</span>
                        <input
                            type='number'
                            placeholder='Width'
                            className='w-[12%] text-center'
                            {...register('width', { required: 'Width is required' })}
                        />
                        <span className='mt-2'>&nbsp;X&nbsp;</span>
                        <input
                            type='number'
                            placeholder='Height'
                            className='w-[12%] text-center'
                            {...register('height', { required: 'Height is required' })}
                        />

                        <Select
                            defaultValue={'unit'}
                            sx={{
                                fontSize: '14px',
                                height: '40px',
                                borderRadius: '12px',
                            }}
                            {...register('unitOfDimensions', { required: 'Unit of Dimensions is required' })}
                        >
                            <MenuItem value='unit'>Unit</MenuItem>
                            {dimensionUnits.map((element, elementIndex) => (
                                <MenuItem key={elementIndex} value={element.unitCode}>
                                    {element.unitCode}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <h3 className='text-red-500'>{errors?.length?.message}</h3>
                    <h3 className='text-red-500'>{errors?.width?.message}</h3>
                    <h3 className='text-red-500'>{errors?.height?.message}</h3>
                    <h3 className='text-red-500'>{errors?.unitOfDimensions?.message}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-12'>Manufacturer</p>
                        <Controller
                            name='manufacturer'
                            control={control}
                            defaultValue='defaultValue'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    sx={{
                                        textAlign: 'left',
                                        width: '50%',
                                        height: '50px',
                                        borderRadius: '12px',
                                    }}
                                >
                                    <MenuItem value='defaultValue'>Select or Add Manufacturer</MenuItem>
                                    {manufacturerDetails.map((element, elementIndex) => (
                                        <MenuItem key={elementIndex} value={element.id}>
                                            {element.name}
                                        </MenuItem>
                                    ))}

                                    <MenuItem onClick={e => openAddManufacturer(e)}>
                                        <span className='text-[#4257BE]'>Manage Manufacturers</span>
                                    </MenuItem>
                                </Select>
                            )}
                        />
                    </Box>
                    {isAddManufacturerOpen && (
                        <AddManufacturer
                            onClose={() => closeAddManufacturer()}
                            setManufacturer={setManufacturer}
                            setManufacturerDetailsFromProduct={setManufacturerDetails}
                        />
                    )}
                    <h3 className='text-red-500'>{errors?.manufacturer?.message}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-[120px]'>UPC</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '50%',
                                padding: '5px 0',
                            }}
                            {...register('upc', { required: 'UPC is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.upc?.message}</h3>

                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-[120px]'>EAN</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '46%',
                                padding: '5px 0',
                            }}
                            {...register('ean', { required: 'EAN is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.ean?.message}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-[120px]'>HSN</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '46%',
                                padding: '5px 0',
                            }}
                            {...register('hsn', { required: 'hsn is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.hsn?.message}</h3>
                </Grid>
                <Grid
                    item
                    xs={5}
                    sx={{
                        padding: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-11'>Weight</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '56%',
                                padding: '5px 0',
                            }}
                            {...register('weight', { required: 'Weight is required' })}
                        />

                        <Select
                            defaultValue={'unit'}
                            sx={{
                                marginTop: 0.6,
                                marginLeft: 1,
                                fontSize: '14px',
                                height: '50px',
                                borderRadius: '12px',
                            }}
                            {...register('unitOfWeight', { required: 'Unit of Weight is required' })}
                        >
                            <MenuItem value='unit'>Unit</MenuItem>
                            {weightUnits.map((element, elementIndex) => (
                                <MenuItem key={elementIndex} value={element.unitCode}>
                                    {element.unitCode}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <h3 className='text-red-500'>{errors?.weight?.message}</h3>
                    <h3 className='text-red-500'>{errors?.unitOfWeight?.message}</h3>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-11'>Brand</p>
                        <Controller
                            name='brand'
                            control={control}
                            defaultValue='defaultValue'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    sx={{
                                        fontSize: '14px',
                                        width: '70%',
                                        height: '50px',
                                        borderRadius: '12px',
                                        marginLeft: 1,
                                    }}
                                >
                                    <MenuItem value='defaultValue'>Select or Add Brand</MenuItem>
                                    {brandDetails.map((element, elementIndex) => (
                                        <MenuItem key={elementIndex} value={element.id}>
                                            {element.name}
                                        </MenuItem>
                                    ))}

                                    <MenuItem onClick={e => openAddBrand(e)}>
                                        <span className='text-[#4257BE]'>Manage Brands</span>
                                    </MenuItem>
                                </Select>
                            )}
                        />
                    </Box>
                    {isBrandOpen && (
                        <AddBrand onClose={() => closeAddBrand(false)} setBrand={setBrand} setBrandDetailsFromProduct={setBrandDetails} />
                    )}
                    <h3 className='text-red-500'>{errors?.branch?.message}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-11'>MPN</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '70%',
                                marginLeft: '18px',
                            }}
                            {...register('mpn', { required: 'MPN is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.mpn?.message}</h3>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 1,
                        }}
                    >
                        <p className='font-bold text-secondary-grey my-2 mr-11'>ISBN</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '70%',
                                marginLeft: '18px',
                            }}
                            {...register('isbn', { required: 'ISBN is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.isbn?.message}</h3>
                </Grid>
            </Grid>
            {/**
             * Product Section
             */}
            <h1 className='p-2 w-full border-b-2 border-gray-400' />

            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingX: 3,
                            paddingY: 1,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color='info' />}
                            label='Sales Information'
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', paddingY: 1, textAlign: 'left' }}>
                            <p className='text-red-500 my-2 w-48'>Selling Price*</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '70%',
                                    marginLeft: '18px',
                                }}
                                {...register('sellingPrice', { required: 'Selling Price is required' })}
                            />
                        </Box>
                        <h3 className='text-red-500'>{errors?.sellingPrice?.message}</h3>
                    </Box>
                    <br />
                    <Box sx={{ display: 'flex', flexDirection: 'row', paddingX: 3, paddingY: 1, textAlign: 'left' }}>
                        <p className='font-bold text-secondary-grey my-2 w-48'>Minimum Sales Price</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '70%',
                                marginLeft: '18px',
                            }}
                            {...register('minSalesPrice', { required: 'Minimum Selling Price is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.minSalesPrice?.message}</h3>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', paddingX: 3, paddingY: 1, textAlign: 'left' }}>
                        <p className='font-bold text-secondary-grey my-2 w-48'>Product Name Price</p>
                        <TextField
                        variant='outlined'
                        size='normal'
                        InputProps={{
                            style: {
                                borderRadius: '12px',
                                height: '50px',
                            },
                        }}
                        sx={{
                            width: '70%',
                            marginLeft: '18px',
                        }}
                        />
                    </Box> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', paddingX: 3, paddingY: 1, textAlign: 'left' }}>
                        <p className='font-bold text-secondary-grey my-2 w-48'>Minimum Quantity Per Order</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '70%',
                                marginLeft: '18px',
                            }}
                            {...register('minQuantityPerOrder', { required: 'Minimum Quantity Per Order is required' })}
                        />
                    </Box>
                    <h3 className='text-red-500'>{errors?.minQuantityPerOrder?.message}</h3>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingX: 3,
                            paddingY: 1,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color='info' />}
                            label='Purchase Information'
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', paddingY: 1, textAlign: 'left' }}>
                            <p className='text-red-500 my-2 w-48'>Cost Price*</p>
                            <TextField
                                variant='outlined'
                                size='normal'
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        height: '50px',
                                    },
                                }}
                                sx={{
                                    width: '70%',
                                    marginLeft: '18px',
                                }}
                                {...register('costPrice', { required: 'Cost Price is required' })}
                            />
                        </Box>
                        <h3 className='text-red-500'>{errors?.costPrice?.message}</h3>
                    </Box>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', paddingX: 3, paddingY: 1, textAlign: 'left' }}>
                        <p className='font-bold text-secondary-grey my-2 w-48'>Preferred Vendor</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '70%',
                                marginLeft: '18px',
                            }}
                        />
                    </Box> */}
                </Grid>
            </Grid>
            <h1 className='p-2 w-full border-b-2 border-gray-400' />

            <Grid container className='mt-4 w-full' justifyContent='space-between'>
                <Grid item xs={5}>
                    <h2 className='text-2xl font-semibold mb-2 m-3 mx-2'>Group Info:</h2>
                    {groupInfo.length === 0 ? (
                        <>
                            <h2 className='text mb-2 m-3 mx-2'>Nothing here</h2>
                        </>
                    ) : (
                        <div>
                            <ul className='list-disc pl-4'>
                                {groupInfo.map((item, index) => (
                                    <li key={index} className='mb-2 flex'>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div className='items-start'>
                                                <div>{item.groupName}</div>
                                                <div>{item.groupDescription}</div>
                                            </div>
                                            <div className='items-start'>
                                                <Button sx={{ background: '#D84040' }} variant='contained' onClick={() => handleDeleteClick(index)}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Group Name</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '50px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('groupName')}
                        />
                        <h3 className='text-red-500'>{errors?.groupName?.message}</h3>
                    </Box>
                    <Box sx={{ textAlign: 'left', margin: '8px 10px' }}>
                        <p className='font-bold text-secondary-grey'>Description</p>
                        <TextField
                            variant='outlined'
                            size='normal'
                            multiline
                            rows={4}
                            InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    height: '100px',
                                },
                            }}
                            sx={{
                                width: '100%',
                                padding: '5px 0',
                            }}
                            {...register('groupDes')}
                        />
                        <h3 className='text-red-500'>{errors?.groupDes?.message}</h3>
                    </Box>
                    <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained' onClick={() => handleAddClick()}>
                        Add
                    </Button>
                </Grid>
            </Grid>

            <div className='flex my-4'>
                <Button onClick={handleSubmit(onSubmit)} sx={{ background: '#8B99DC', margin: '0 10px' }} variant='contained'>
                    Save and confirm
                </Button>
                <Button sx={{ background: '#4257BE', margin: '0 10px' }} variant='contained'>
                    Save as draft
                </Button>
                <Button sx={{ background: '#D84040' }} variant='contained'>
                    Cancel
                </Button>
            </div>
            <br />
        </div>
    );
};

export default ProductCreate;
