let button = document.getElementById("button");
let light = document.getElementById("light");
let button2 = document.getElementById("button2");
button.addEventListener("click",()=>{
    
    if(button.classList.contains("block")){
        button.classList.remove("block");
        button.classList.add("hidden");
        button2.classList.remove("hidden");
        button2.classList.add("block");
        light.classList.add("light");
    }
});
// 
button2.addEventListener("click",()=>{
            button.classList.remove("hidden");
        button.classList.add("block");
        button2.classList.remove("block");
        button2.classList.add("hidden");
        light.classList.remove("light");
})