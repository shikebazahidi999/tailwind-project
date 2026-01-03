// nabbar weith 85%
const bars = document.getElementById("bars");
const listbook = document.getElementById("listbook");
const showform = document.getElementById("showform");
const izafakardan = document.getElementById("izafakardan");
const nav = document.getElementById("nav");
const newlist = document.getElementById("newlist");
const newadded =document.getElementById("newadded")

// bars part
bars.addEventListener("click",()=>{
    if(listbook.classList.contains("hidden")){
        listbook.classList.remove("hidden");
        listbook.classList.add("flex");
        nav.classList.remove("w-full");
        nav.classList.add("w-[85%]");
        newadded.classList.remove("flex");
        newadded.classList.add("hidded")
    
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
const name = 'اسم کتاب:';
const type = "نوعیت کتاب :";
const img = "عکس کتاب :";
const information = "اطلاعات کتاب :";


const addbtns = document.getElementById("addbtn");
addbtns.addEventListener("click",(event)=>{
    event.preventDefault();
    
})


function addbook(){
let bookname = document.getElementById("bookname").value;
let booktype = document.getElementById("booktype").value;
let bookimg = document.getElementById("bookimg").value;
let info = document.getElementById("info").value;

let li = document.createElement("li");
li.innerHTML= `${name} ${bookname}<br>
${type} ${booktype}<br>
 ${img} ${bookimg}<br>
 ${information} ${info}

`;

li.classList.add("text")
document.getElementById("booklist").appendChild(li);
document.getElementById("bookname").value = "";
  document.getElementById("booktype").value = "";
 document.getElementById("bookimg").value = "";
 document.getElementById("info").value = "";
}

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

