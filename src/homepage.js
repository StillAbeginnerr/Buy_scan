import React from 'react'
import "./homepage.css"
import qr from './QR-1.jpeg'




function Homepage() {

  return (
    <>
    <h2 className='title'> Scan And Pay</h2>
<img className='qr' src={qr} alt=''></img>
    <a href='https://rzp.io/l/XYr6bwyR'><button className='scan'>scan to pay</button></a>
   
    </>
  )
}

export default Homepage