import React, { useState} from "react";
import '../styles/App.css';

function App(){
    const [firstName,setFirstName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [ans,setAns] = useState("");
    const flames = ["Siblings","Friends","Love","Affection","Marriage","Enemy"];

const handleClick= (e)=>{
    if(firstName==="" || secondName===""){
        setAns('Please Enter valid input');
    }
    else{

        let first = firstName.replace(/\s+/g, '').toLowerCase();
        let second = secondName.replace(/\s+/g, '').toLowerCase();
        console.log(first);
        console.log(second);
        
for(let i=0;i<first.length;i++){
    for(let j=0;j<second.length;j++){
        if(first.charAt(i)===second.charAt(j)){
            first = first.substring(0,i) + first.substring(i+1,first.length);

            second = second.substring(0,j)+second.substring(j+1,second.length);
            i--;
        }
    }
}
const len = first.length + second.length;
console.log(len);
setAns(flames[len % 6]);
    }
}


        return(
            <div id="main">
            <input type="text" 
            data-testid="input1" placeholder="First Name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            ></input>

            <input type="text" 
            data-testid="input2" placeholder="Second Name"
            value={secondName}
            onChange={(e)=>setSecondName(e.target.value)}
            ></input>
              
              <button data-testid="calculate_relationship"
              onClick={handleClick}
              >Calculate Relationship Future</button>

              <button data-testid="clear"
              onClick={()=>{
                  setFirstName("");
                  setSecondName("");
                  setAns("");
              }}
              >Clear</button>
              <h3 data-testid="answer">{ans}</h3>
            </div>
        )
}


export default App;
