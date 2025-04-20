import React from 'react'

const CompleteTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>12 apr 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Play Badminton</h2>
    <p className=' mt-3 text-sn nt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic quo eius, debitis distinctio cupiditate veniam aliquid perferendis, iure officiis maiores animi ipsum reiciendis suscipit!
    </p>
    <div className=' mt-2 '>
        <button className='w-full'>Completed</button>
    </div>
</div>
  )
}

export default CompleteTask
