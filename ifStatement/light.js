let button = document.getElementById("button");
let light = document.getElementById("light");
let button2 = document.getElementById("button2");
// but
button.addEventListener("click",()=>{
    
    if(button.classList.contains("block")){
        button.classList.remove("block");
        button.classList.add("hidden");
        button2.classList.remove("hidden");
        button2.classList.add("block");
        light.classList.add("light");
    }
});
// buttun 2
button2.addEventListener("click",()=>{
            button.classList.remove("hidden");
        button.classList.add("block");
        button2.classList.remove("block");
        button2.classList.add("hidden");
        light.classList.remove("light");
});
// secound div part
let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent ="this is a text which is added by dom"
div.style.cssText= "border:2px solid white; wight:fix-content; padding:20px; margin:18px";
let maindiv = document.getElementById("div1");
maindiv.appendChild(div);
div.appendChild(h1);
