let addDiv = document.getElementById("addDiv");
let input = document.getElementById("input");
let importance = document.getElementById("importance");
let addbtn = document.getElementById("addbtn");
let showtodo = document.getElementById("showtodo");

showtodo.addEventListener("click",()=>{
if(addDiv.classList.contains("flex")){
    addDiv.classList.remove("flex");
    addDiv.classList.add("hidden"); 
    showtodo.textContent = "add Todo"  
}
else{
    addDiv.classList.remove("hidden");
    addDiv.classList.add("flex");
    showtodo.textContent = "Hide Todo"
}
})