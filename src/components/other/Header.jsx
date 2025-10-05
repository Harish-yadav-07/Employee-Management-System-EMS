import React from 'react'

const Header = ({data}) => {

  return (
    <div className='flex items-end justify-between pl-7 pr-7 m-3'>
        <h1 className='text-2xl font-medium' >Hello, <br /><span className='text-3xl font-semibold' >{data.firstname} 👋</span></h1>
        <button className='bg-red-600 text-white px-3 py-2 rounded-sm text-lg font-medium cursor-pointer active:scale-95 transition-all' >Log Out</button>
    </div>
  )
}

export default Header;  
