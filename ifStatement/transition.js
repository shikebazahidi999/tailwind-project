const button = document.getElementById("btn");
const mainDiv = document.getElementById("allDiv");
let familybtn = document.getElementById("familybtn");

button.addEventListener("click",()=>{
    if(mainDiv.classList.contains("hidden")){
        mainDiv.classList.remove("hidden");
        mainDiv.classList.add("block");
        familybtn.classList.remove("hidden");
        familybtn.classList.add("inline-block")
    }
    else{
        mainDiv.classList.add("hidden");
        mainDiv.classList.remove("block");
        familybtn.classList.remove("inline-block");
        familybtn.classList.add("hidden")
    }
});

const h1 = document.createElement("h1");
mainDiv.appendChild(h1);
h1.textContent = "THANKS FOR  YOUR WATCHING";
h1.classList.add("text-white")
h1.classList.add("ml-[400px]");
h1.classList.add("text-5xl");
h1.classList.add("text-shadow");
h1.classList.add("shadow-white");
h1.classList.add("shadow-[2px_2px_20px]");
h1.classList.add("w-fit");
h1.classList.add("bg-linear-150" );
h1.classList.add("from-gray-800");
h1.classList.add("to-black");
h1.classList.add("text-transparent");
h1.classList.add("mt-12");

// another divs will add by map function


