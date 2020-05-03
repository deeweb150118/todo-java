let input=document.getElementById("input");
let enter=document.getElementById("button");
let ul=document.querySelector("ul");

const displayElements=()=>{

    let li=document.createElement("li");
     li.appendChild(document.createTextNode(input.value))
     ul.appendChild(li);
     input.value="";
}
const checkLength=()=>{
    return input.value.length;
}
const addElementAfterClick=()=>{
   if (checkLength() > 0){
       displayElements();
   }
}
const addElementAfterEnter=(event)=>{
  if(checkLength() >0 && event.keyCode===13){
      displayElements();
  }
}
enter.addEventListener('click',addElementAfterClick);
input.addEventListener('keypress',addElementAfterEnter);

