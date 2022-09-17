import React from 'react'
import "./homepage.css"
import qr from './QR-1.jpeg'




function Homepage() {

  return (
    <>
    <h2 className='title'> Scan And Pay Section</h2>
    <h3 className='title-1'>Mi Smart Band</h3>
    <img className='product-image' src='https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/mi_kewrzajyj7uw3q.jpeg'></img>
<div>
  <h4 className='pro-des'>
  Large 2.79cm (1.1”) dynamic AMOLED colour-display
<br></br>


Everything on one screen.
<br></br>
Approximately 20% further increase in display area*
<br></br>
makes incoming calls,
<br></br>
messages and alerts easier to see and ushers in a
<br></br>
new era of unlimited watch faces.
  </h4>
</div>

<h3 className='amount'>2499/-</h3>
<img className='qr' src={qr} alt=''></img>
    <a href='https://rzp.io/l/XYr6bwyR'><button className='scan'>click or scan to pay</button></a>
   
    </>
  )
}

export default Homepage