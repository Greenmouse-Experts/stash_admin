import React from 'react'

const InviteAdmin = () => {
  return (
    <div>
        <form>
            <div>
                <input 
                    type='text' 
                    placeholder='Add Email'
                    className='w-full p-2 border border-gray-400 rounded'
                    />
            </div>
            <div className='mt-4'>
                <input 
                    type='text' 
                    placeholder='Add Role'
                    className='w-full p-2 border border-gray-400 rounded'
                    />
            </div>
            <div className='mt-8 flex justify-between'>
                <button className='bg-primary text-white rounded px-6 py-2'>Mange Access</button>
                <button className='px-6 py-2 border border-indigo-700 rounded text-primary'>Send Invite</button>
            </div>
        </form>
    </div>
  )
}

export default InviteAdmin