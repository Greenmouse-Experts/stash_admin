import React from 'react'
import { Button } from '@/components/UI/button'
import { InputType, TextInput } from '@/components/UI/textInput'
import { TbCurrencyNaira } from 'react-icons/tb'

const ReviewModal = () => {
  return (
    <div>
        <div>
            <p>You are about to review loan for John Odinchazoihechukwu</p>
            <div className='mt-4'>
                <TextInput
                    type={InputType.number}
                    label="Enter amount"
                    icon={<TbCurrencyNaira className='text-2xl'/>}
                    />
            </div>
            <div className='mt-6'>
                <Button
                    title="Review Loan"
                    />
            </div>
        </div>
    </div>
  )
}

export default ReviewModal