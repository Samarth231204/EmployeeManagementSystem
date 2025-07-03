import React from 'react'

const FailedTask = ({data, taskIndex, updateTaskStatus}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className=' mt-3 text-sn nt-2'>
                {data.description}
            </p>
            <div className='mt-4 space-y-2'>
                <div className='text-center py-2 px-3 bg-red-700 rounded text-white font-semibold'>
                    ✗ Failed
                </div>
                <div className='flex gap-2'>
                    <button 
                      onClick={() => updateTaskStatus(taskIndex, 'active')}
                      className='flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 px-3 text-sm rounded text-white transition-colors'
                    >
                      Reopen Task
                    </button>
                    <button 
                      onClick={() => updateTaskStatus(taskIndex, 'completed')}
                      className='flex-1 bg-green-500 hover:bg-green-600 py-2 px-3 text-sm rounded text-white transition-colors'
                    >
                      Mark as Complete
                    </button>
                </div>
            </div>
    </div>

  )
}

export default FailedTask
