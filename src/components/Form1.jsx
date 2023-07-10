import React from 'react'
import Logo from './Logo'
import '../styles/form1.css'
import img4 from '../img/frame4.svg'
import { useControls } from 'leva';
import { useState , useEffect } from 'react';

const Form1 = () => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  }, [window.innerWidth]);

  const handelclick = () => {
    window.location.href ='/loged/form2';
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


  const { HEIGHT} = useControls(

    {HEIGHT : { value: 0, min: 0, max: 200 }}
  )


   



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
    <div className='container-fluid  '>
      <div className='row col-12'>

        {/* <div className="col-12  ms-auto mx-auto " >
            <img className='img' src={img4}  alt='image'/>
        </div>
       */}
        <div className="cl1  row  d-flex cote1 col-lg-8 col-12 " >
              <p className={ "d-flex ms-4 "}>Age</p>
              <div className= "input1  mt-1 col-12 d-flex">
 
                  <div className="btm-1 ">
                    <button className={screen ? (st[0] ? "btn1m  ms-2 p-2":"btn1 ms-2 p-2"):( st[0] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }   onClick={() =>handelchange1("1")} >CHILD</button>
                    <p className='mt-1'>12</p>
                  </div>
            
            
                  <div className="btm-1  ">
                  <button className={screen ? (st[1] ? "btn1m ms-2  p-2":"btn1 ms-2 p-2"):( st[1] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }  onClick={() =>handelchange1("2")}  >TEEN</button>
                    <p className='mt-1'>18</p>
                  </div>
           
                  

                <div className="btm-1 ">
                  <button className={screen ? (st[2] ? "btn1m ms-2   p-2":"btn1 ms-2 p-2"):( st[2] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }   onClick={() =>handelchange1('3')}  >YOUNG ADULT</button>
                  <p className='mt-1'>30</p>
                </div>

                <div className="btm-1 ">
                  <button className={screen ? (st[3] ? "btn1m ms-2  p-2":"btn1 ms-2 p-2"):( st[3] ?"btn1m  ms-3 p-3":"btn1  ms-3 p-3" ) }  onClick={() =>handelchange1('4')}  >MIDDLE AGED</button>
                  <p className='mt-1'>50</p>
                </div>

 
              </div>

                <p className="d-flex ms-4 mt-2">Gender</p>
              <div className="input2 d-flex  text-center">

                <button className={st2[0] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange2("1")}> MALE</button>
                <button className={st2[1] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange2("2")}> FEMALE</button>
              </div>
               
               
                <p className="d-flex ms-4 mt-3">DAILY ACTIVITY LEVEL</p>
              <div className="input3 d-flex">
                <div className="btm-1 ">
                  <button className={st3[0] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange3("1")}>LOW</button>
                  <p className='mt-1'>0-12</p>
                </div>

                <div className="btm-1 ">
                  <button className={st3[1] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange3("2")}>MEDUIM</button>
                  <p className='mt-1'>12-20</p>
                </div>

                <div className="btm-1 ">
                  <button className={st3[2] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange3("3")}>HIGH</button>
                  <p className='mt-1'>20-30</p>
                </div>

                <div className="btm-1 ">
                  <button className={st3[3] ? "btn1m  ms-3 p-3":"btn1  ms-3 p-3" } onClick={()=>handelchange3("4")}>VERY HIGH</button>
                  <p className='mt-1'>30+</p>
                </div>
              </div>

            
            </div>
 
          
          
   

        <div className="cote2  d-flex col-lg-4 col-12 mt-5">
     
                      {/* ... Votre code existant ... */}
                   
                        <div    onClick={handleMouseMove}  >
                          <svg width="400" height="400"   >
                            <line x1="0" y1="200" x2="400" y2="200" stroke="black" strokeWidth="2" />
                            <circle cx={ballPosition} cy={200} r="20" fill="red" />
                          
                          </svg>
                        </div>
                        
               
        

 
        </div>

        
        <div className={screen ? 'firstbtm btms col-12  d-flex  justify-content-center  mb-4 ':'btms    col-lg-11 d-flex  mb-4 ' }>
        
            <button className='btn btn-primary btn-lg   ' onClick={handelclick}><p class="text-center text-nowrap">NEXT</p></button>
      
        </div>

      </div>
    </div>

  )
}

export default Form1
