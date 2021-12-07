import {fullname as fn} from './model.js';
window.addEventListener('load',bind);

export function bind(){
let button=document.getElementById("greetbt");
button.addEventListener('click',takeInput);
document.getElementById('clearbt').addEventListener('click',clearAll);
}

export function takeInput(){
    let firstname=document.getElementById('first').value;
    let lastname=document.getElementById('last').value;
    output(firstname,lastname);
}
export const clearAll=()=>{
    document.getElementById('first').value='';
    document.getElementById('last').value='';
    document.getElementById('msg').innerText='';
    document.getElementById('first').focus();
}
export const output=(firstname,lastname)=> document.getElementById('msg').innerText=`Welcome ${fn(firstname,lastname)}`;