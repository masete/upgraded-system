import React from 'react'

const Story = ({img, username}) => {
  return (
    <div>
        <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer' src={img} alt='profile'/>  
        <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story