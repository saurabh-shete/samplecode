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
const soNumbers = [
  { label: 'SO 1', val: 'so1' },
  { label: 'SO 2', val: 'so2' },
  { label: 'SO 3', val: 'so3' },
  { label: 'SO 4', val: 'so4' }
]

export function AdvanceLeftForm({ formRef }) {
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
            name='soNumber'
            label='SO Number'
            options={soNumbers}
          />
          <TextField name='amount' label='Amount' placeholder='Enter Amount' />
          <p className='text-sm text-indigo-500'>Balance: 1200</p>
          <TextField name='amountCurrency' label='Amount Currency' placeholder='USD' />
          <TextField name='remarks' label='Remarks' placeholder='remarks' />
        </Stack>
      </form>
    </Paper>
  )
}

export function DepositLeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <SimpleSelect
            name='customerName'
            label='Customer Name'
            options={customers}
          />
          <TextField name='amount' label='Amount Received' placeholder='Enter Amount' />
          <TextField name='amountCurrency' label='Amount Currency' placeholder='USD' />
          <TextField name='remarks' label='Remarks' placeholder='remarks' />
        </Stack>
      </form>
    </Paper>
  )
}

export function RightForm({ formRef, isAdvance }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <TextField name='paymentId' label='Payment ID' placeholder='Payment id' />
          <SimpleDatePicker label='Payment Date' name='paymentDate' />
          <TextField name='paymentRefNo' label='Payment Reference Number' placeholder='refno' />
          {
            isAdvance && (
              <SimpleDatePicker label='Valid Till' name='validTill' />
            )
          }
        </Stack>
      </form>
    </Paper>
  )
}
