// import React, { useState } from 'react'


const Header = (props) => {

  //  const [username, setUsername] = useState('');
  //  if (!data) {
  //   setUsername('Admin');
  //  } else {
  //   setUsername(data.firstname);
  //  }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    props.changeUser('')
    // window.location.reload();
  }

  return (
    <div className='flex items-end justify-between pl-7 pr-7 m-3'>
        <h1 className='text-2xl font-medium' >Hello, <br /><span className='text-3xl font-semibold' >username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-3 py-2 rounded-sm text-lg font-medium cursor-pointer active:scale-95 transition-all' >Log Out</button>
    </div>
  )
}

export default Header;  
