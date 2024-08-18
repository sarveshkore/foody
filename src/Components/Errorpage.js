import React from 'react'
import Logo from '../asset/images/something_went_wrong.jpg'
import { useRouteError } from 'react-router-dom'
const Errorpage = () => {
  const errorDetails=useRouteError();
  console.log(errorDetails);
  return (
    <div >
      <img className='errorimg' src={Logo}/>
      {/* <div>
        <h2>Error : {errorDetails?.status} ({errorDetails?.statusText})</h2>
        <h2>Description : {errorDetails?.data}</h2>
      </div> */}
    </div>
  )
}

export default Errorpage
