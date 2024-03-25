import React from 'react'
import "./loading.css"

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div  className='spinner w-20 h-20'></div>
    </div>
  )
}

export default Loading
