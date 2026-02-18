let button = document.getElementById("button");
let light = document.getElementById("light");
button.addEventListener("click",()=>{
    light.classList.toggle("light");
    if(button.textContent==="turn on the light"){
        button.textContent= "turn of the light"
    }
})