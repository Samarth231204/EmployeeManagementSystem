import React from 'react'

const NewTask = ({data, taskIndex, updateTaskStatus}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className=' mt-3 text-sn nt-2'>
                {data.description}
            </p>
            <div className='mt-4 space-y-2'>
                <button 
                  onClick={() => updateTaskStatus(taskIndex, 'active')}
                  className='w-full bg-blue-500 hover:bg-blue-600 py-2 px-3 text-sm rounded text-white transition-colors'
                >
                  Accept Task
                </button>
                <div className='flex gap-2'>
                  <button 
                    onClick={() => updateTaskStatus(taskIndex, 'completed')}
                    className='flex-1 bg-green-500 hover:bg-green-600 py-2 px-3 text-sm rounded text-white transition-colors'
                  >
                    Mark as Complete
                  </button>
                  <button 
                    onClick={() => updateTaskStatus(taskIndex, 'failed')}
                    className='flex-1 bg-red-500 hover:bg-red-600 py-2 px-3 text-sm rounded text-white transition-colors'
                  >
                    Mark as Failed
                  </button>
                </div>
            </div>
        </div>
  )
}

export default NewTask
