const body = document.body;
const lists = document.querySelectorAll("li:nth-child(2)");

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


// secound div/////////////////////////////////////////////
const div1 = document.createElement("div");
div1.classList.add("div");
div1.style.marginLeft= "500px"
body.appendChild(div1);
// button3
const btn3 = document.createElement("button");
btn3.innerText= "Hide Shadow";
btn3.classList.add("btnStyle");
btn3.style.marginLeft = "500px";
body.appendChild(btn3);
// image2
const image2 = document.createElement("img");
image2.setAttribute("src","../imgs/Screenshot_20250724_234201.jpg");
image2.setAttribute("alt","your intertent has promlem");
image2.classList.add("imageStyle");

// h12
const h12 = document.createElement("h1");
h12.innerHTML = "FC BARCELONA";
h12.classList.add("h1Style");
// p2
const p2 = document.createElement("p");
p2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis cumque impedit vel laboriosam enim neque dicta et at? Facilis, nobis. Vero numquam deleniti dolore aut deserunt? Molestiae, ut nostrum!";
p2.classList.add("p1Style");

// buttton 4
const btn4 = document.createElement("button");
btn4.innerText= "Reshow Shadow";
btn4.classList.add("btnStyle");
btn4.classList.add("hide");
btn4.style.marginLeft = "500px";

body.appendChild(btn4);

// btn condition
btn3.addEventListener("click",()=>{
    div1.classList.add("remove");
    image2.classList.add("remove");
    btn3.classList.add("hide");
    btn4.classList.remove("hide")
});
btn4.addEventListener("click",()=>{
    div1.classList.remove("remove");
    image2.classList.remove("remove");
    btn3.classList.remove("hide");
    btn4.classList.add("hide")
})
div1.append(image2,h12,p2);


