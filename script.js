const Input1 = document.querySelector('.input1');
const Input2 = document.querySelector('.input2');
const body = document.querySelector('body');


function Switchcolor(){
  console.log("click");
  var Inputname = Input1.value;
  var Inputcolor = Input2.value;
  if(Inputname > Inputcolor){
    Input1.style.backgroundColor = "green";
    Input2.style.backgroundColor = 'red';
    body.style.background ="blue";
  }
  else
  if(Inputcolor > Inputname){
     Input2.style.backgroundColor = 'green';
     Input1.style.backgroundColor = 'red';
      body.style.background ="gray";
     
  }
}
setInterval(Switchcolor,3000)


Input2.addEventListener("input", Switchcolor);