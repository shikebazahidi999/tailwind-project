let button = document.getElementById("button");
let light = document.getElementById("light");
let button2 = document.getElementById("button2")
button.addEventListener("click",()=>{
    light.classList.toggle("light");
    if(button.classList.contains("block")){
        button.classList.remove("block");
        button.classList.add("hidden");
        button2.classList.remove("hidden");
        button2.classList.add("block");
    }
})