import React from 'react'
import { useSelector } from 'react-redux'

const ProfileAvatar = () => {

    const firstName = useSelector((state) => state.auth.auth.firstName)
    const lastName = useSelector((state) => state.auth.auth.lastName)
    const first = firstName.charAt(0)
    const last = lastName.charAt(0)
  return (
    <div className='w-10 h-10 lg:w-12 lg:h-12 circle grid place-content-center bg-primary'>
        <div>
            <p className='fw-600 lg:text-xl text-white'>{first} {last}</p>
        </div>
    </div>
  )
}

export default ProfileAvatar