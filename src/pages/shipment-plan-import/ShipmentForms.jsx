import Paper from '@mui/material/Paper'
import { Stack, TextField } from '@mui/material'
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx'
import React from 'react'

const customers = [
  { label: 'customer 1', val: 'customer1' },
  { label: 'customer 2', val: 'customer2' },
  { label: 'customer 3', val: 'customer3' },
  { label: 'customer 4', val: 'customer4' }
]
const invoice = [
  { label: 'invoice 1', val: 'invoice1' },
  { label: 'invoice 2', val: 'invoice2' },
  { label: 'invoice 3', val: 'invoice3' },
  { label: 'invoice 4', val: 'invoice4' }
]

export function LeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <SimpleSelect
            name='vendorName'
            label='Vendor Name'
            options={customers}
          />
          <SimpleSelect
            label='Vendor Bill No'
            name='Vendor Bill No'
            options={invoice}
          />
        </Stack>
      </form>
    </Paper>
  )
}

export function RightForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <TextField label="BL Number" placeholder="Enter BL no." />
          <SimpleDatePicker label='BL Creation Date' name='blDate' />
        </Stack>
      </form>
    </Paper>
  )
}
