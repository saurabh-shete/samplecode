import Paper from '@mui/material/Paper'
import { Stack, TextField } from '@mui/material'
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx';
import React from 'react'

const vendors = [
  {label: "vendor 1", val: "vendor1"},
  {label: "vendor 2", val: "vendor2"},
  {label: "vendor 3", val: "vendor3"},
  {label: "vendor 4", val: "vendor4"},
]

export function LeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <SimpleSelect name="vendorName" label="Vendor Name" options={vendors} placeholder="select vendor" />
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
            name="vendorInvoiceNo"
            label='Vendor Invoice Number'
          />
          <SimpleDatePicker label='Invoice Date' name="invoiceDate" />
        </Stack>
      </form>
    </Paper>
  )
}
