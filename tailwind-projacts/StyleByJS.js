const body = document.body;
// div
const div = document.createElement("div");
div.classList.add("div")
body.appendChild(div);
// button
const btn = document.createElement("button");
btn.innerText= "Hide Shadow";
btn.classList.add("btnStyle");
body.appendChild(btn);

// image
const image = document.createElement("img");
image.setAttribute("src","../imgs/Screenshot_20250924_083622.jpg");
image.setAttribute("alt","your intertent has promlem");
image.classList.add("imageStyle");

// h1
const h1 = document.createElement("h1");
h1.innerHTML = "FC BARCELONA";
h1.classList.add("h1Style");
// p1
const p1 = document.createElement("p");
p1.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis cumque impedit vel laboriosam enim neque dicta et at? Facilis, nobis. Vero numquam deleniti dolore aut deserunt? Molestiae, ut nostrum!";
p1.classList.add("p1Style");

// secound btn
const btn2 = document.createElement("button");
btn2.innerText= "Reshow Shadow";
btn2.classList.add("btnStyle");
btn2.classList.add("hide")
body.appendChild(btn2);
// btn condition
btn.addEventListener("click",()=>{
    div.classList.add("remove");
    image.classList.add("remove");
    btn.classList.add("hide");
    btn2.classList.remove("hide")
});
btn2.addEventListener("click",()=>{
    div.classList.remove("remove");
    image.classList.remove("remove");
    btn.classList.remove("hide");
    btn2.classList.add("hide")
})


div.append(image,h1,p1);
// secound div
const div1 = document.createElement("div");
div.classList.add("div")
body.appendChild(div1);
// button3
const btn3 = document.createElement("button");
btn3.innerText= "Hide Shadow";
btn3.classList.add("btnStyle");
body.appendChild(btn3);
// image2
const image2 = document.createElement("img");
image2.setAttribute("src","../imgs/Screenshot_20250924_083622.jpg");
image2.setAttribute("alt","your intertent has promlem");
image2.classList.add("imageStyle");

// h1
const h1 = document.createElement("h1");
h1.innerHTML = "FC BARCELONA";
h1.classList.add("h1Style");
