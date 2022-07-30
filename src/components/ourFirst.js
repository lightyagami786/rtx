import React, { useState } from "react";

export default function OurFirst() {
  

  const[text,setText]=useState("");
  const[countPara,setPara]=useState("0");
  const[countPara2,setPara2]=useState("0");
  
  const afterChange=(e)=>{
    let cVal=e.target.value;
    setText(cVal);
    let characterss=cVal.length;
    let wordss=cVal.split(" ").length;
    //console.log(wordss);
    setPara(characterss);
    setPara2(wordss);    
    
  };
  
  const transformIt=(e)=>{
    
    let vall=text.toUpperCase();
    setText(vall);
    
  };


const[theme,setTheme]=useState({
  color:'red',
  backgroundColor:'blue'
});


const[alertt,changeAlertt]=useState(null);


const showAlert=(message,type)=>{
  changeAlertt({
    msg:message,
    type: type
  });
};

 
  const themeChange=()=>{
    if(theme['backgroundColor']=='blue'){
      setTheme({
        color:'yellow',
        backgroundColor:'black'
      })
    }else{
      setTheme({
        color:'red',
        backgroundColor:'blue'
      })
    }

    showAlert("successfully done","success");


  };

  
  return (
    <>
    <div  style={theme} >
    <div id="inputContainer" >
      <input type="text" id="myInput"  value={text} onChange={afterChange} placeholder="ENTER TEXT HERE"  />
      </div>
      <div id="ourBtnCont" >
      <button onClick={transformIt} >uppercase</button>
      </div>
      
      <div id="countDiv" >
        <p id="countPara"  > no of characters are {countPara} and  no of words are {countPara2}</p>
      </div>
      <button type="button" className="btn btn-primary" onClick={themeChange}  >dark/light mode</button>
      </div> 
      </>
  
    
  );
}
