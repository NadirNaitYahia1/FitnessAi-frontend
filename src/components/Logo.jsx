import React from 'react'
import img0 from '../img/frame0.svg';
import img1 from '../img/frame1.svg';
import img2 from '../img/frame2.svg';
import '../styles/start.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css';

const Logo = () => {
  return (
 
    <div className='logo d-flex ms-4 mb-3'>
    <img className="img-fluid " src={img1} alt="First slide" />
    
    <div className='mt-4'>
      <p className='text ms-2'>FITNESS-<span>AI</span></p>
    </div>
  </div>
 
  )
}

export default Logo
