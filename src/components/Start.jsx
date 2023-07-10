import React from 'react';
import '../styles/start.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css';
import img0 from '../img/frame0.svg';
import img1 from '../img/frame1.svg';
import img2 from '../img/frame2.svg';
import Logo from './Logo';
import Slogon from './Slogon';

const Start = () => {
  return (
    <div className='container-fluid'>
      <div className='row '>
        <div className="part1 col-lg-6 col-md-12">
        
          <Slogon />

          <div className='texts2 col-12 mt-5 ms-4'>
            <div className="text2 ms-3">
              <p className="text2">MAKE YOUR BODY SHAPE WITH</p>
              <p className='text2'><span>ARTIFICIAL INTELLIGENCE</span></p>
            </div>
            <div className="button">
              <button className="btn btn-sm btn-block"><p>START NOW</p></button>
            </div>
          </div>
        </div>
        <div className="part2 col-lg-6 col-md-12">
          <img className="img-fluid" src={img2} alt="First slide" />
        </div>
 
      </div>
    </div>
  );
}

export default Start;
