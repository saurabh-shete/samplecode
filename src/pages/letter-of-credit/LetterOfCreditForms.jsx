import Paper from '@mui/material/Paper'
import { Stack, TextField } from '@mui/material'
import { SimpleDatePicker, SimpleSelect } from '../../utils/index.jsx'
import React from 'react'

const typeOfLc = [
  { label: 'Irrevocable', val: 'irrevocable' },
  { label: 'Revocable', val: 'revocable' },
  { label: 'Irrevocable Transferable', val: 'irrevocableTransferable' },
  { label: 'Revocable Transferable', val: 'revocableTransferable' },
  { label: 'Irrevocable Standby', val: 'irrevocableStandby' },
  { label: 'Revocable Standby', val: 'revocableStandby' },
  { label: 'Irrevocable Transferable Standby', val: 'irrevocableTransferableStandby' },
]
const subtypeOfLc = [
  { label: 'Red Clause', val: 'redClause' },
  { label: 'Green Clause', val: 'greenClause' },
  { label: 'Revolving LC', val: 'revolvingLc' },
  { label: 'Transferred', val: 'transferred' },
  { label: 'Back to Back LC', val: 'backToBackLc' },
]

const soNumbers = [
  { label: 'SO 1', val: 'so1' },
  { label: 'SO 2', val: 'so2' },
  { label: 'SO 3', val: 'so3' },
  { label: 'SO 4', val: 'so4' }
]

export function LeftForm({ formRef }) {
  return (
    <Paper className='p-4'>
      <form ref={formRef}>
        <Stack direction='column' rowGap={2}>
          <SimpleSelect
            name='soNumber'
            label='SO Number'
            options={soNumbers}
          />
          <p className='text-sm text-secondary-grey'>PO Number: PO1200</p>
          <p className='text-sm text-secondary-grey'>PO Date: 23/02/2023</p>
          <SimpleSelect
            name='typeOfLc'
            label='Type of LC (40 A)'
            options={typeOfLc}
          />
          <SimpleSelect
            name='subTypeOfLc'
            label='Subtype of LC'
            options={subtypeOfLc}
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
          <TextField name='lcNumber' label='LC Number' placeholder='Enter LC number' />
          <SimpleDatePicker label='Date of Issuance' name='dateOfIssuance' />
          <SimpleDatePicker label='Date of Expiry' name='dateOfExpiry' />
          <TextField name='placeOfExpiry' label='Place of Expiry' placeholder='place of expiry' />
        </Stack>
      </form>
    </Paper>
  )
}
