import React from 'react'
import Logo from './Logo'
import '../styles/form1.css'
import img4 from '../img/frame4.svg'
import { useControls } from 'leva';
import { useState , useEffect } from 'react';
const Form2 = () => {
    const [screen, setScreen] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      if (window.innerWidth < 768) {
     
        setScreen(true ) ;

    
      } else {
        setScreen(false);
      }
    }, [window.innerWidth]);
  
    const handelclick = () => {
      window.location.href ='/loged/form1';
    }
  
    const [ballPosition, setBallPosition] = useState('');
   
    const [isDragging, setIsDragging] = useState(false);
  
    const handleMouseDown = () => {
      setIsDragging(true);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (event) => {
      const newBallPosition = event.clientX ;
      console.log(newBallPosition);
      setBallPosition(newBallPosition);
    };
  
 
     
  
  
  
    const [st, setSt] = React.useState([false,false,false,false,false])
    const [st1, setSt1] = React.useState(false)
  
    const [st2, setSt2] = React.useState([false,false])
    const [st22, setSt22] = React.useState(false)
    
    const [st3, setSt3] = React.useState([false,false,false,false])
    const [st33, setSt33] = React.useState(false)
    
    const handelchange1 =(props)=>{
      if (props==='1'){
          setSt1(!st1)
          setSt([st1,false,false,false,false])
   
      }
      if (props==='2'){
          setSt1(!st1)
          setSt([false,st1,false,false,false])
      }
      if (props==='3'){
          setSt1(!st1)
          setSt([false,false,!st1,false,false])
      }
      if (props==='4'){
          setSt1(!st1)
          setSt([false,false,false,!st1,false])
      }
      if (props==='5'){
          setSt1(!st1)
          setSt([false,false,false,false,!st1])
      }   
    }
  
    const handelchange2 =(props)=>{
      if (props==='1'){
          setSt22(!st22)
          setSt2([st22,false])
   
      }
      if (props==='2'){
          setSt22(!st22)
          setSt2([false,st22])
      }
   
    }
  
    const handelchange3 =(props)=>{
      if (props==='1'){
          setSt33(!st33)
          setSt3([st33,false,false,false])
   
      }
      if (props==='2'){
          setSt33(!st33)
          setSt3([false,st33,false,false])
      }
      if (props==='3'){
        setSt33(!st33)
        setSt3([false,false,st33,false])
  
    }
    if (props==='4'){
        setSt33(!st33)
        setSt3([false,false,false,st33])
    }
    
  
   
    }
  
    return (
      <div className='container-fluid '>
        <div className='row col-12 '>
  
          <div className="  col-12  ms-auto mx-auto mt-2 " >
              <img className='img' src={img4}  alt='image'/>
          </div>
        
          <div className="cl1  row  d-flex cote1 col-12 mt-5 ms-4 " >
                <p className= "d-flex ms-4 ">DEFINE YOUR GOALS </p>
                <div className= {screen ?"input1  mobile  mt-1 col-12  mx-auto mb-4": "input1  mt-1 col-12 d-flex mb-4"}>
                  
                    <div className="btm-1   order-5 mt-2   ">
                      <button className={screen ? (st[0] ? "btn1m  ms-2 p-2":"btn1 ms-2  p-2"):( st[0] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }   onClick={() =>handelchange1("1")} >LOOSE WEIGHT</button>
                    </div>
                    
                    <div className="btm-1  order-3  mt-2 ">
                  <button className={screen ? (st[1] ? "btn1m ms-2   p-2":"btn1 ms-2   p-2"):( st[1] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }  onClick={() =>handelchange1("2")}  >GAIN WEIGHT</button>
                 
                    </div>
  
                  <div className="btm-1   order-2 mt-2 ">
                  <button className={screen ? (st[2] ? "btn1m ms-2   p-2":"btn1 ms-2  p-2"):( st[2] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }   onClick={() =>handelchange1('3')}  >GENERAL</button>
                  
                  </div>
  
                  <div className="btm-1 order-4   mt-2 ">
                  <button className={screen ? (st[3] ? "btn1m ms-2  p-2":"btn1 ms-2 p-2"):( st[3] ?"btn1m  ms-3  p-3":"btn1   ms-3 p-3" ) }  onClick={() =>handelchange1('4')}  >ENDURANCE</button>
                 
                  </div>
                  <div className="btm-1  order-1  mt-2 ">
                  <button className={screen ? (st[3] ? "btn1m ms-2  p-2":"btn1 ms-2 p-2"):( st[3] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }  onClick={() =>handelchange1('4')}  >BULK</button>
            
                  </div>
  
   
                </div>
  
                  <p className="d-flex ms-4 mt-2">HOW IS YOUR WEEKLY SCHEDULE</p>
                <div className="input2 d-flex  text-center">
  
                  <button className={st2[0] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange2("1")}> OPEN</button>
                  <button className={st2[1] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange2("2")}> FLEXIBLE</button>
                    
                  <button className={st2[0] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange2("1")}> BUSY</button>
                </div>
                 
                 

  

  
              
              </div>
   
            
 

          
          <div className={screen ? 'kol col-12  d-flex  mb-4 mt-5 ':' kol col-lg-12 d-flex mb-4 mt-5 ' }>
            <div className="firstbtm  col-6">
                <button className='btn btn-primary btn-lg   ' onClick={handelclick}><p class="text-center text-nowrap">PREVIOUS</p></button>
            </div>


            <div className="secondbtm col-6 ">
                <button className='btn btn-primary btn-lg  ' onClick={handelclick}><p class="text-left text-nowrap">SUBMIT</p></button>
            </div>
     
  
          </div>
  
        </div>
      </div>
    )  
}

export default Form2
