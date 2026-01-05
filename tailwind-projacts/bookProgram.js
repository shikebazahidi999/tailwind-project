// nabbar weith 85%
const bars = document.getElementById("bars");
const listbook = document.getElementById("listbook");
const showform = document.getElementById("showform");
const izafakardan = document.getElementById("izafakardan");
const nav = document.getElementById("nav");
const newlist = document.getElementById("newlist");
const newadded =document.getElementById("newadded");
const addbtn = document.getElementById("addbtn");



// bars part
bars.addEventListener("click",()=>{
    if(listbook.classList.contains("hidden")){
        listbook.classList.remove("hidden");
        listbook.classList.add("flex");
        nav.classList.remove("w-full");
        nav.classList.add("w-[85%]");
        newadded.classList.remove("flex");
        newadded.classList.add("hidded");
    
 }
 
        else{
            listbook.classList.remove("flex");
            listbook.classList.add("hidden");
            nav.classList.remove("w-[85%]");
            nav.classList.add("w-full");
             izafakardan.classList.remove("flex")
        izafakardan.classList.add("hidden");
                newadded.classList.remove("hidded");
        newadded.classList.add("flex");
        }
});
showform.addEventListener("click",()=>{
    if(izafakardan.classList.contains("hidden")){
    izafakardan.classList.remove("hidden");
    izafakardan.classList.add("flex");
    showform.classList.add("bg-green-600");
    newadded.classList.remove("flex");
    newadded.classList.add("hidden");
    newlist.classList.remove("bg-green-600")
    }

    else{
        izafakardan.classList.remove("flex");
        izafakardan.classList.add("hidden");
       
    }
    
});



// input part

let bookinfo = [];
addbtn.addEventListener("click",(event)=>{
    event.preventDefault();
let bookname = document.getElementById("bookname").value;
let booktype = document.getElementById("booktype").value;
let bookimg = document.getElementById("bookimg").value;
let info = document.getElementById("info").value;
    
    
let Allinfo = {
nameb: bookname,
typeb: booktype,
imgb: bookimg,
infob:info,
};

bookinfo.push(Allinfo);
bookinfo.forEach(book=>{



    const maindiv = document.createElement("div");
   
    newadded.appendChild(maindiv);
maindiv.classList.add("div")
    const divinfo = document.createElement("div");
    maindiv.appendChild(divinfo);
   const h1 = document.createElement("h1");
   h1.innerHTML = Allinfo.typeb;
   divinfo.appendChild(h1);
    const h2 = document.createElement("h1");
    h2.innerHTML = Allinfo.nameb;
    divinfo.appendChild(h2);
    const p = document.createElement("p");
    p.innerHTML = Allinfo.infob;
    divinfo.appendChild(p);
    const image = document.createElement("img");
    image.setAttribute("src",Allinfo.imgb);
    maindiv.appendChild(image);



})

   
});


newlist.addEventListener("click",()=>{
    if(izafakardan.classList.contains("flex")){
        izafakardan.classList.remove("flex");
        izafakardan.classList.add("hidden");
        newadded.classList.remove("hidden");
        newadded.classList.add("flex")
         showform.classList.remove("bg-green-600");
         newlist.classList.add("bg-green-600");

    }
})

