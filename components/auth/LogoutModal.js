import React from 'react'
import { Button } from '../UI/button'
import { resetAuth } from '@/redux/reducers/authSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export const LogoutModal = ({CloseModal}) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const logoutAdmin = () => {
        dispatch(resetAuth())
        toast.success("Logout Successful")
        router.push('/')
    }
  return (
    <div className='text-center mx-auto lg:w-11/12'>
        <p>Are you sure you want to logout from stash admin panel</p>
        <div className='mt-8 grid grid-cols-2 gap-x-8 lg:gap-x-24 justify-between'>
            <Button title='No, Cancel' altClassname='fs-500 border-gray-400 border-2 text-primary w-full py-2 rounded' onClick={CloseModal}/>
            <Button title='Logout' altClassname='btn-primary w-full py-2' onClick={logoutAdmin}/>
        </div>
    </div>
  )
}
