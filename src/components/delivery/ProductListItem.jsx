import { Paper } from '@mui/material'
import React from 'react'

export default function ProductListItem({ product }) {
  return (
    <div className='flex flex-col items-start w-full' key={Math.random()}>
      <div className='rounded-t-lg bg-white border-x border-t border-border-gray p-2'>
        <div className='flex flex-row items-center gap-x-2'>
          <p className='font-bold text-secondary-grey'>
            Sales Order ID:
          </p>
          <p className='text-sm'>
            {product.soId}
          </p>
        </div>
      </div>
      <div
        className='w-full border border-border-gray flex flex-row justify-around items-center p-4 gap-x-4 rounded-b-lg rounded-r-lg'>
        {[
          { label: 'Product', attr: 'productName' },
          { label: 'Ordered Quantity', attr: 'orderedQty' },
          { label: 'Delivered Quantity', attr: 'deliveredQty', balance: product.orderedQty - product.deliveredQty },
          { label: 'Delivery Quantity', attr: 'deliveryQty' }
        ].map(box => (
          <div className='flex flex-col justify-between items-center p-2 gap-y-2' key={Math.random()}>
            <p className='font-bold text-secondary-grey'>{box.label}</p>
            <p className='px-4 py-2 border border-border-gray rounded-lg'>{product[box.attr]}</p>
            {
              box.balance && (<p className='text-primary-blue font-thin'>Balance: {box.balance}</p>)
            }
          </div>
        ))}
        <Paper className='p-4 bg-blue-200' sx={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
          <div className='grid grid-cols-2 gap-12 gap-y-4'>
            {[
              { label: 'Packing Code', attr: 'packingCode' },
              { label: 'Tax Rate', attr: 'taxRate' },
              { label: 'Per Pack Qty', attr: 'perPackQty' },
              { label: 'Gross Weight', attr: 'grossWeight' }
            ].map(item => (
              <div className='flex flex-row gap-x-4'>
                <p className='font-bold text-secondary-grey'>{item.label}</p>
                <p className='text-black'>{product[item.attr]}</p>
              </div>
            ))}
          </div>
        </Paper>
      </div>
    </div>
  )
}
