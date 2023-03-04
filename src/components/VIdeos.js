

import React from 'react'

const VIdeos = () => {
  return (
    <div className='flex flex-col w-1/4 px-2 mt-3 mb-8 cursor-pointer'> 
       <div> <img src="https://media.sproutsocial.com/uploads/2022/02/YouTube-Shorts.svg" className='rounded-lg' alt="video icon" />
       <span className='relative bottom-7 right-1 w-fit border-transparent bg-gray-900 rounded-md px-1 float-right'>19:24</span>
       </div>
        <div className='flex flex-row'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66byqWRJH5s3bMsdbQ3UF4D2NAiYW0V2XIA&usqp=CAU" alt="logo" className=' w-1/4 h-11 rounded-full px-3' />
            <p className='flex flex-col w-3/4'>
                <p className='text-md font-bold'> this is how we do this </p>
                <p className='text-sm mt-2 text-gray-400 hover:text-white'> code with harry</p>
                <p className='text-sm text-gray-400'>1M views . 1 year ago</p>
            </p>
        </div>
    </div>
  )
}

export default VIdeos;