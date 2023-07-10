import React from 'react';
import Logo from './Logo';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css';
import img0 from '../img/frame0.svg';
import img3 from '../img/frame3.svg';
import '../styles/login.css';


const Login = () => {
  return (
    <div className='container-fluid'>
      <div className='row col-12'>
        <div className="main1 col-lg-6 col-md-12 ">
          <div className="logo">
          </div>
          <div className='img mt-5 col-12 d-flex flex-column  align-items-end '>
            <img className="img0" src={img0} alt="First slide" />
          </div>

          <div className="login col-12 ms-5">
            <form>

              <div className="email col-12 mt-5">
           
                <input className="input " type="email" placeholder="    Username" />
              </div>

              <div className="password col-12 mt-5">
                <input className="input " type="password" placeholder="   Password"  />
              </div>

              <div className="button col-12 d-flex flex-column  align-items-center mt-5 ">
              <button>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                    <span>Login</span>
                </button>
              </div>
            </form>

          </div>
        </div>

        <div className="main2 col-lg-6 col-12 mt-5">
          <img className='img-fluid' src={img3} alt="First slide" />

        </div>
      </div>
    </div>
  );
}

export default Login;
