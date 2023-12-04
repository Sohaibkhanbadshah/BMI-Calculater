function bmiResult(){
  let weight= document.querySelector(".weight").value;
  let height= document.querySelector(".height").value;
  
  
   weight=Number(weight)
   height=Number(height)
   if (weight ===NaN ){
    alert("not a walid number")
   }
   else if(weight===0){
    alert("Please select the required information")
   }
   else if(weight===""){
    alert("not a number")
   }
   let bmi=weight /(height*height);
  alert(bmi);
  document.querySelector(".result").textContent=bmi;
  if(bmi<=18.5){
    document.querySelector(".bmisay").textContent="underWeight";
  }
  else if(bmi=>18.5){
    document.querySelector(".bmisay").textContent="Normal"
  }
  else if(bmi>25){
    document.querySelector(".bmisay").textContent="Owerweight"
  }
}

