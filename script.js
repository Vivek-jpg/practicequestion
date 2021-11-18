const Input1 = document.querySelector('.input1');
const Input2 = document.querySelector('.input2');
const Input3 = document.querySelector('.input3');
const Output = document.querySelector('.output');
const Output1 = document.querySelector('.output1');
const Output2 = document.querySelector('.output2');


const Btn = document.querySelector('.btn');
const body = document.querySelector('body');


function calculateAge(){
  console.log("click");
  var date = Number(Input1.value);
  var month = Number(Input2.value);
  var year = Number(Input2.value);
  if(date == 0 || month ==0 ||year==0){
    console.log("invalid date")
    
  }
  
  var date1= 19-date;
  var month1 = 12-month;
  var year1 = year-2021;
  console.log(typeof year1)
  Output.innerText = date1;
  Output1.innerText = month1;
  Output2.innerText = year1;

  

  
}



Btn.addEventListener("click", calculateAge);