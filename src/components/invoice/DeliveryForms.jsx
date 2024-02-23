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
const delivery = [
  { label: 'delivery 1', val: 'delivery1' },
  { label: 'delivery 2', val: 'delivery2' },
  { label: 'delivery 3', val: 'delivery3' },
  { label: 'delivery 4', val: 'delivery4' }
]

export function LeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <SimpleSelect
            name='customerName'
            label='Customer Name'
            options={customers}
          />
          <SimpleSelect
            label='Delivery No.'
            name='deliveryNo'
            options={delivery}
          />
          <SimpleDatePicker label="Invoice Due Date" name="invoiceDueDate" />
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
          <TextField
            required
            name='invoiceId'
            label='Invoice ID'
          />
          <SimpleDatePicker label='Invoice Date' name='invoiceDate' />
          <SimpleSelect
            name='accountAssignment'
            label='Account Assignment'
            options={customers}
          />
        </Stack>
      </form>
    </Paper>
  )
}
