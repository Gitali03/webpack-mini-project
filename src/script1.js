 
import './style1.css';
import './style2.css';

const helloWorld=()=>(
    console.log("Hello World")
)
helloWorld()

document.querySelector(".btn").addEventListener("click", ()=>{
    alert ("Pressed Hello World")
})
