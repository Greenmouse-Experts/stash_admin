import React from 'react'

const GoalSavings = () => {
  return (
    <div>
      <form>
        <div className='text-gray-400'>
          <label>From</label>
          <input
            type='text'
            className='w-full p-2 border border-gray-400 rounded mt-2'
            value="14% per annnum"
          />
        </div>
        <div className='mt-4'>
          <label>To</label>
          <input
            type='text'
            className='w-full p-2 border border-gray-400 rounded mt-2'
          />
        </div>
        <div className='text-end mt-8'>
          <button className='btn-primary py-2 px-8'>Save change</button>
        </div>
      </form>
    </div>
  )
}

export default GoalSavings