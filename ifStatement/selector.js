// lists style
let lists = document.firstElementChild.querySelectorAll("li:nth-child(even)")
for(let i = 0 ; i<lists.length; i++){
   lists[i].classList.add("listStyle")
}
// previuosSibling
const ul = document.getElementById("uls");
const h1 = ul.previousElementSibling;
h1.classList.add("h1Style");
// parent h1 or clossest
const div = h1.parentElement;
div.classList.add("divSt");
// next sibling
const nexth1 = ul.nextElementSibling;
nexth1.classList.add("h2")




// const svlist = lists.foreach((list)=>{
//    list.classList.add("listStyle")
// })
