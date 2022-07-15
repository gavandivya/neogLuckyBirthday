import './App.css';
import { useRef, useState } from "react";

export default function App() {

  var birthdate = useRef(0);
  var luckynumber = useRef(0);
  var [BirthdayMessage,setMessage] = useState('');
  var [errorMessage,setError] = useState('');

  function checkLucky(){
    const birthDate = birthdate.current.value;
    const luckyNumber = luckynumber.current.value;
    let sum = 0;
    if(birthDate && luckyNumber){
      if(luckyNumber > 0){
        sum = calculateSum(birthDate);
        if(sum == luckyNumber){
          setMessage("Your Birthday is lucky");
        }
      else{
        setMessage("Your Birthday is NOT lucky, so sad");
      }
      }
      else{
        setError("Please enter positive number");
      }}
      else{
        setError("Please fill the details");
      }
    // console.info(sum);
    // console.info(typeof sum);
    // console.info(typeof luckyNumber);
  }

  function calculateSum(birthDate){
    birthDate = birthDate.replaceAll("-","");
    // console.info(birthDate);
    let sum = 0;
    while(birthDate !== 0){
      sum = sum + birthDate % 10;
      birthDate = Math.floor(birthDate / 10);
    }
    // for(let i = 0; i < birthDate.length;i++){
    //   sum = sum + Number(birthDate.charAt(i));
    // }
    return sum;
  }

  return (
    <div className="App">
      <h4>Is your birthday lucky?🥳</h4>
      <div className='borderClass'>
      <div>
        <label>Date of Birth : </label>
        <input type="date" ref={birthdate} />
      </div>
      <div>
        <label>Lucky Number : </label>
        <input type="number" placeholder='Enter your Lucky Number' ref={luckynumber} />
      </div>
      <div style={{textAlign:"center"}}>
      <button onClick={checkLucky}>Check Number</button>
      <br></br><span style={{color:"red", fontSize:"12px"}}>{errorMessage}</span>
      <p>{BirthdayMessage}</p>
      </div>
      </div>
    </div>
  );
}
