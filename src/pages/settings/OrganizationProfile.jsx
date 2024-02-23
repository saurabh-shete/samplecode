import React, { useState, useRef, useEffect } from 'react';
import { Link, Router, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';

import { Paper, Box, Typography, Divider, MenuItem, IconButton, Button, TextField, Select, FormControlLabel, Checkbox } from '@mui/material';
import DragDropFileUpload from '../../components/delivery/DragDropFileUpload';
import { useForm, Controller } from 'react-hook-form';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const OrganizationProfile = () => {
    localStorage.setItem('organizationId', '5c735a8b-15c3-4145-aa8a-15fd6c8d6dde');
    const orgId = JSON.parse(JSON.stringify(localStorage.getItem('organizationId')));
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [orgAddressData, setOrgAddressData] = useState();
    const [orgLegalIdf, setOrgLegalIdf] = useState();
    const [selectedYearOption, setselectedYearOption] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [timezone, setTimezone] = useState('');

    const {
        handleSubmit,
        register,
        setValue,
        getValues,
        control,
        formState: { errors },
    } = useForm();

    const handleYearChange = event => {
        setselectedYearOption(event.target.value);
    };

    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        const fetchData = async () => {
            const orgId = localStorage.getItem('organizationId') || '';
            const responseOrg = await axiosPrivate.get(`/organization/${orgId}`);
            const responseOrgAddress = await axiosPrivate.get(`organization-address//organization/${orgId}`);
            const responseOrgLegalIdf = await axiosPrivate.get(`organization-legal-identifier/organization/${orgId}`);
            console.log(responseOrgLegalIdf.data.data);
            setOrgAddressData(responseOrgAddress?.data?.data);
            setOrgLegalIdf(responseOrgLegalIdf?.data?.data);
            setData(responseOrg?.data?.data);
            setIsLoading(false);
            setValue('orgName', responseOrg?.data?.data?.organizationName);
            setValue('industryName', responseOrg?.data?.data?.organizationIndustry);
            setValue('fiscalYear', responseOrg?.data?.data?.fiscalYear);
            setValue('orgAddressType', responseOrgAddress?.data?.data?.organizationAddressType);
            setValue('orgStreet1', responseOrgAddress?.data?.data?.streetOne);
            setValue('orgStreet2', responseOrgAddress?.data?.data?.streetTwo);
            setValue('city', responseOrgAddress?.data?.data?.city);
            setValue('state', responseOrgAddress?.data?.data?.state);
            setValue('zipCode', responseOrgAddress?.data?.data?.postalCode);
            setValue('idfType', responseOrgLegalIdf?.data?.data?.identifierType);
        };
        fetchData();
        const getUserTimezone = () => {
            const userTimezone = Intl.DateTimeFormat().resolvedOptions();
            setTimezone(
                userTimezone.timeZone +
                    ' ' +
                    new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2] +
                    ' ' +
                    new Date().getTimezoneOffset() / -60,
            );
        };

        getUserTimezone();
    }, []);

    const onSubmit = async formData => {
        const orgPayload = {
            organizationName: formData.orgName,
            organizationIndustry: formData.industryName,
            fiscalYear: Number(formData.fiscalYear),
            countryId: data.countryId,
            currencyId: data.currencyId,
            organizationMobileNumber: Number(data.organizationMobileNumber),
            organizationEmail: data.organizationEmail,
            organizationImportExportCode: 422535,
        };
        const orgAddPayload = {
            organizationAddressType: formData.orgAddressType,
            streetOne: formData.orgStreet1,
            streetTwo: formData.orgStreet2,
            state: formData.state,
            postalCode: formData.zipCode,
            city: formData.city,
        };
        const orgLegalIdfPayload = {
            identifierType: formData.idfType,
        };

        const orgId = JSON.parse(JSON.stringify(localStorage.getItem('organizationId')));
        const orgResponse1 = await axiosPrivate.put(`organization/${orgId}`, orgPayload);
        console.log(orgResponse1);
        const orgResponse2 = await axiosPrivate.put(`organization-address/${orgId}`, orgAddPayload);
        console.log(orgResponse2);
        const orgResponse3 = await axiosPrivate.put(`organization-legal-identifier/${orgId}`, orgLegalIdfPayload);
        console.log(orgResponse3);
    };
    //console.log(orgAddressData);
    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <div className='h-screen !overflow-y-scroll no-scrollbar'>
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 3,
                            alignItems: 'end',
                        }}
                    >
                        <Typography sx={{ fontSize: '1.5rem' }}>Organization Profile</Typography>
                        <Divider orientation='vertical' sx={{ margin: 1, height: '1.5rem' }} />
                        <Typography sx={{ fontSize: '1.2rem' }}>ID: {orgId}</Typography>
                    </Box>
                    <Divider sx={{ margin: 1 }} />
                    <Box
                        sx={{
                            display: 'flex',
                            textAlign: 'left',
                            padding: 2,
                        }}
                    >
                        <Typography
                            variant='subtitle1'
                            color='textSecondary'
                            sx={{
                                width: '100%',

                                marginX: 1,
                                paddingY: 2,
                                borderRadius: 2,
                                backgroundColor: '#ebf3ff',
                            }}
                        >
                            <span className='pl-4'>
                                You have the same organization in Rubix. Altering any information on this page will alter it there.
                            </span>
                        </Typography>
                    </Box>

                    {/* Your Logo */}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            height: '250px',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                paddingRight: 8,
                                fontSize: 17,
                            }}
                        >
                            Your Logo
                        </Box>

                        <Box sx={{ marginLeft: 10 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                    }}
                                >
                                    <DragDropFileUpload />
                                </Box>

                                <Box
                                    sx={{
                                        width: '100%',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Typography
                                        variant='subtitle1'
                                        color='textSecondary'
                                        sx={{
                                            paddingTop: 1,
                                            marginX: 3,
                                            width: '100%',
                                        }}
                                    >
                                        This logo will appear on transactions and email notifications.
                                    </Typography>
                                    <Typography
                                        variant='subtitle1'
                                        color='textSecondary'
                                        sx={{
                                            paddingTop: 2,
                                            marginX: 3,
                                            width: '100%',
                                            fontSize: 12,
                                        }}
                                    >
                                        Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1MB.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Organization Name */}
                    <Box
                        sx={{
                            display: 'flex',
                            marginTop: 1,
                            padding: 2,

                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                color: 'red',
                                width: '280px',
                            }}
                        >
                            Organization Name*
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Controller
                                name='orgName'
                                control={control}
                                defaultValue={getValues('orgName')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        placeholder='Your Organization Name'
                                        InputProps={{
                                            style: {
                                                borderRadius: '12px',
                                                height: '50px',
                                            },
                                        }}
                                        sx={{
                                            width: '40%',
                                        }}
                                    />
                                )}
                            />

                            <h3 className='text-red-500'>{errors?.organizationName?.message}</h3>
                            {/* sacsa */}
                        </Box>
                    </Box>

                    {/* Industry */}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Industry
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Controller
                                name='industryName'
                                control={control}
                                defaultValue={getValues('industryName')}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        sx={{
                                            textAlign: 'left',
                                            width: '40%',
                                            borderRadius: '12px',
                                            height: '50px',
                                        }}
                                    >
                                        <MenuItem value={'construction'}>Construction</MenuItem>
                                        <MenuItem value={'consulting'}>Consulting</MenuItem>
                                        <MenuItem value={'Web Development'}>Web Development</MenuItem>
                                    </Select>
                                )}
                            />

                            <h3 className='text-red-500'>{errors?.organizationName?.message}</h3>
                        </Box>
                    </Box>

                    {/* Business Location */}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                                color: 'red',
                            }}
                        >
                            Business Location*
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Select
                                labelId='dropdown-label'
                                value={'India'}
                                onChange={() => {}}
                                sx={{
                                    textAlign: 'left',
                                    width: '40%',
                                    borderRadius: '12px',
                                    height: '50px',
                                    backgroundColor: '#e5e7eb',
                                }}
                                disabled
                            >
                                <MenuItem value={'India'}>India</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    {/* Company Address */}
                    <Box
                        sx={{
                            display: 'flex',
                            marginTop: 1,
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '265px',
                            }}
                        >
                            Company Address
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                width: '100%',
                            }}
                        >
                            <Controller
                                name='orgAddressType'
                                control={control}
                                defaultValue={getValues('orgAddressType')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        placeholder='Address Type'
                                        InputProps={{
                                            style: {
                                                borderRadius: '12px',
                                                height: '50px',
                                            },
                                        }}
                                        sx={{
                                            width: '60%',
                                            padding: 1,
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name='orgStreet1'
                                control={control}
                                defaultValue={getValues('orgStreet1')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        placeholder='Street 1'
                                        InputProps={{
                                            style: {
                                                borderRadius: '12px',
                                                height: '50px',
                                            },
                                        }}
                                        sx={{
                                            width: '60%',
                                            padding: 1,
                                        }}
                                    />
                                )}
                            />

                            <Controller
                                name='orgStreet2'
                                control={control}
                                defaultValue={getValues('orgStreet2')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        placeholder='Street 2'
                                        InputProps={{
                                            style: {
                                                borderRadius: '12px',
                                                height: '50px',
                                            },
                                        }}
                                        sx={{
                                            width: '60%',
                                            padding: 1,
                                        }}
                                    />
                                )}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Controller
                                    name='city'
                                    control={control}
                                    defaultValue={getValues('city')}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            placeholder='City'
                                            InputProps={{
                                                style: {
                                                    borderRadius: '12px',
                                                    height: '50px',
                                                },
                                            }}
                                            sx={{
                                                width: '20%',
                                                padding: 1,
                                            }}
                                        />
                                    )}
                                />

                                <Controller
                                    name='state'
                                    control={control}
                                    defaultValue={getValues('state') || 'defaultValue'}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            sx={{
                                                textAlign: 'left',
                                                width: '20%',
                                                borderRadius: '12px',
                                                height: '50px',
                                                marginTop: 1,
                                            }}
                                        >
                                            <MenuItem value='defaultValue'>Select state</MenuItem>

                                            <MenuItem value='Madhya Pradesh'>Madhya Pradesh</MenuItem>
                                            <MenuItem value='Maharashtra'>Maharashtra</MenuItem>
                                            <MenuItem value='Goa'>Goa</MenuItem>
                                            <MenuItem value='Delhi'>Delhi</MenuItem>
                                        </Select>
                                    )}
                                />

                                <Controller
                                    name='zipCode'
                                    control={control}
                                    defaultValue={getValues('zipCode')}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            placeholder='Zip/Postal Code'
                                            InputProps={{
                                                style: {
                                                    borderRadius: '12px',
                                                    height: '50px',
                                                },
                                            }}
                                            sx={{
                                                width: '20%',
                                                padding: 1,
                                            }}
                                        />
                                    )}
                                />
                            </Box>
                            {/* <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <TextField
                                    variant='outlined'
                                    size='normal'
                                    placeholder='Phone No.'
                                    InputProps={{
                                        style: {
                                            borderRadius: '12px',
                                            height: '50px',
                                        },
                                    }}
                                    sx={{
                                        width: '20%',
                                        padding: 1,
                                    }}
                                />

                                <Select
                                    labelId='dropdown-label'
                                    placeholder='Fax'
                                    // value={selectedCountryOption}
                                    // onChange={handleCountryChange}
                                    sx={{
                                        textAlign: 'left',
                                        width: '20%',
                                        borderRadius: '12px',
                                        height: '50px',
                                        marginTop: 1,
                                    }}
                                >
                                    <MenuItem value=''>Select state</MenuItem>
                                    <MenuItem value='option1'>Maharashtra</MenuItem>
                                    <MenuItem value='option2'>Goa</MenuItem>
                                    <MenuItem value='option3'>Delhi</MenuItem>
                                </Select>

                                <TextField
                                    variant='outlined'
                                    size='normal'
                                    placeholder='Website'
                                    InputProps={{
                                        style: {
                                            borderRadius: '12px',
                                            height: '50px',
                                        },
                                    }}
                                    sx={{
                                        width: '20%',
                                        padding: 1,
                                    }}
                                />
                            </Box> */}
                            {/* <Box
                                sx={{
                                    display: 'flex',
                                    marginLeft: 1,
                                }}
                            >
                                <FormControlLabel
                                    control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color='primary' />}
                                    label='Would you like to add a separate address for receiving payments?'
                                />
                            </Box> */}
                        </Box>
                    </Box>

                    {/* Fiscal Year*/}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Fiscal Year
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Controller
                                name='fiscalYear'
                                control={control}
                                defaultValue={getValues('fiscalYear') || 'defaultValue'}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        sx={{
                                            textAlign: 'left',
                                            width: '40%',
                                            borderRadius: '12px',
                                            height: '50px',
                                        }}
                                    >
                                        <MenuItem value='defaultValue'>Select Fiscal Year</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2024}>2024</MenuItem>
                                    </Select>
                                )}
                            />

                            <h3 className='text-red-500'>{errors?.fiscalYear?.message}</h3>
                        </Box>
                    </Box>

                    {/* Language*/}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Language
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Select
                                labelId='dropdown-label'
                                value={selectedYearOption}
                                onChange={handleYearChange}
                                sx={{
                                    textAlign: 'left',
                                    width: '40%',
                                    borderRadius: '12px',
                                    height: '50px',
                                }}
                            >
                                <MenuItem value=''>Select an Option</MenuItem>
                                <MenuItem value='English'>English</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    {/* Time Zone */}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Time Zone
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Select
                                labelId='dropdown-label'
                                value={timezone}
                                sx={{
                                    textAlign: 'left',
                                    width: '40%',
                                    borderRadius: '12px',
                                    height: '50px',
                                    backgroundColor: '#e5e7eb',
                                }}
                                disabled
                            >
                                <MenuItem value={timezone}>{timezone}</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    {/* Date Format*/}
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Date Format
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Select
                                labelId='dropdown-label'
                                value={selectedYearOption}
                                onChange={handleYearChange}
                                sx={{
                                    textAlign: 'left',
                                    width: '40%',
                                    borderRadius: '12px',
                                    height: '50px',
                                }}
                            >
                                <MenuItem value=''>Select an Option</MenuItem>
                                <MenuItem value='dd/MM/yyyy [13/08/2023]'>dd/MM/yyyy [13/08/2023]</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    {/* Company ID*/}
                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Identifier Type
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Controller
                                name='idfType'
                                control={control}
                                defaultValue={getValues('idfType') || 'defaultValue'}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        sx={{
                                            textAlign: 'left',
                                            width: '40%',
                                            borderRadius: '12px',
                                            height: '50px',
                                        }}
                                    >
                                        <MenuItem value='defaultValue'>Select an Option</MenuItem>
                                        <MenuItem value='PAN'>PAN</MenuItem>
                                    </Select>
                                )}
                            />
                        </Box>
                    </Box>

                    {/* Tax ID
                    <Box
                        sx={{
                            display: 'flex',
                            padding: 2,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: 17,
                                width: '280px',
                            }}
                        >
                            Tax ID
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <Select
                                labelId='dropdown-label'
                                value={selectedYearOption}
                                onChange={handleYearChange}
                                sx={{
                                    textAlign: 'left',
                                    width: '40%',
                                    borderRadius: '12px',
                                    height: '50px',
                                }}
                            >
                                <MenuItem value=''>Select an Option</MenuItem>
                                <MenuItem value='ABN'>ABN</MenuItem>
                                <MenuItem value='BN'>BN</MenuItem>
                            </Select>
                        </Box>
                    </Box> */}
                    <Box
                        sx={{
                            padding: 2,
                            marginTop: 4,
                            display: 'flex',
                        }}
                    >
                        <Button
                            variant='contained'
                            onClick={handleSubmit(onSubmit)}
                            sx={{
                                backgroundColor: '#408dfb',
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: '#408dfb', // Keep the same background color
                                },
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            padding: 4,
                        }}
                    ></Box>
                </div>
            )}
        </>
    );
};

export default OrganizationProfile;
