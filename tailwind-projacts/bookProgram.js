// nabbar weith 85%
const bars = document.getElementById("bars");
const listbook = document.getElementById("listbook");
const showform = document.getElementById("showform");
const izafakardan = document.getElementById("izafakardan");
const nav = document.getElementById("nav");
bars.addEventListener("click",()=>{
    if(listbook.classList.contains("hidden")){
        listbook.classList.remove("hidden");
        listbook.classList.add("flex");
        nav.classList.remove("w-full");
        nav.classList.add("w-[85%]");
    
 }
 
        else{
            listbook.classList.remove("flex");
            listbook.classList.add("hidden");
            nav.classList.remove("w-[85%]");
            nav.classList.add("w-full");
             izafakardan.classList.remove("flex")
        izafakardan.classList.add("hidden")
        }
});
showform.addEventListener("click",()=>{
    if(izafakardan.classList.contains("hidden")){
    izafakardan.classList.remove("hidden");
    izafakardan.classList.add("flex");
    }

    else{
        izafakardan.classList.remove("flex");
        izafakardan.classList.add("hidden");
    }
    
})