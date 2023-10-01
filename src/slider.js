import React, { useState } from 'react'
import './App.css';

function Slider() {

    const [index,setIndex]= useState(0)

    const Arr=[require("./image/image1.jpg"),require("./image/image2.jpg"),require("./image/image3.jpg"),require("./image/image4.jpg"),require("./image/image5.jpg"),require("./image/image6.jpg"),require("./image/image7.jpg"),require("./image/image8.jpg")]


    const Button=(e)=>{
        if(e===("L")){
            if(index===0){
                setIndex(Arr.length-1);
            }else {
                setIndex(index-1)
            }
        }else if(e===("R")){
            if(index===Arr.length-1){
                setIndex(0)
            }else{
                setIndex(index + 1)
            }
        }

    }


    const solid=(e,i)=>{
        setIndex(i)
    }


    const Manish=(e,i)=>{
        setIndex(i)
    }
  return (


   <>
   <div className='top'>
   <center>
   <button onClick={()=>Button("L")} className='up'>Left</button>
  <img src={Arr[index]} className='img'/> 
   <button onClick={()=>Button("R")} className='up'>Right</button>
   <div className='display'>
    {
        Arr.map((e,i)=>{
            return(

                <button key={i} onClick={()=>solid(e,i)}  className={`circle ${ i===index ? 'active':''}`} >{i+1}</button>
            )
        })
    }
   </div>
   <div className='display2'>

    {
        Arr.map((e,i)=>{

            return(

                <button key={i} onClick={() => Manish(e,i)} className={` abcdefg ${i === index ? 'active1' : ''}`} >

                <img src={Arr[i]} style={{width:"100px",height:"50px"}}/>
                </button>
            )
        })
    }
   </div>
   </center>
   </div>   
   </>
  )
}

export default Slider
