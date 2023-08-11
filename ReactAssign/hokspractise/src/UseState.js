import React from 'react';
import { useState } from 'react';

function State(){

    let [count ,setcount]= useState(1);

  let [name, setNmae] = useState("dummy")

  let [Details,setDetails] = useState({name: "Condiate Name", Country:"Nationality"})


  function countIncrementer(){

    if(count<10){
      setcount(count +1)

    }
    else{
      alert("Count camn Not be Greater than 10 ")
    }
   

  }

  function DecrementCount(){

    if(count>0){
      setcount(count -1);

    }
    else{
      alert("Count can not be less than 0")
      
    }
  

  }





  return(
    <div className="">
    <h1>State Numer ={count} </h1>
    <button onClick={countIncrementer}>Count++</button>
    <button onClick={DecrementCount}>Count --</button>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <h1>{name}</h1>
    <input placeholder='Enter Your Name Here!' type='text' id='input1' onChange={function(event){
      setNmae(event.target.value)

      setDetails({...Details,name:event.target.value})
    }}/>

    <br/><br></br>

    <input placeholder='Enter Your Country Here!' type='text' id='input2' onChange={(event)=>{
        // let input2 = document.getElementById('input2');
        setDetails({...Details,Country:event.target.value})
        
    }}/>



    <br/>
    <br/>
    <br/>
    <br/>

    <h1>{Details.name}</h1>
    <h1>{Details.Country}</h1>







    
  </div>


  )

}

export default State;