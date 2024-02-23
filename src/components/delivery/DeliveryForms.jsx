import Paper from '@mui/material/Paper'
import { Stack, TextField } from '@mui/material'
import { SimpleDatePicker } from '../../utils/index.jsx'
import React from 'react'

export function LeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <TextField
            required
            name="customerName"
            label='Customer Name'
          />
          <SimpleDatePicker label='Delivery Creation Date' name="deliveryCreationDate" />
          <SimpleDatePicker label='Delivery Date' name="deliveryDate" />
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
            name="deliveryId"
            label='Delivery ID'
          />
          <SimpleDatePicker label='Planned Movement Date' name="plannedMovementDate" />
          <SimpleDatePicker label='Loading Date' name="loadingDate" />
        </Stack>
      </form>
    </Paper>
  )
}
