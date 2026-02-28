let addDiv = document.getElementById("addDiv");
let maindiv = document.getElementById("maindiv")
let addbtn = document.getElementById("addbtn");
let showtodo = document.getElementById("showtodo");
let importance1 = document.getElementById("importance").value;
let todolist = [];
// event listner for showing todo div
showtodo.addEventListener("click",()=>{
if(addDiv.classList.contains("flex")){
    addDiv.classList.remove("flex");
    addDiv.classList.add("hidden"); 
    showtodo.textContent = "add Todo" ;

      
}
else{
    addDiv.classList.remove("hidden");
    addDiv.classList.add("flex");
    showtodo.textContent = "Hide Todo";

}
 maindiv.innerHTML=""
});

// showing the todos
addbtn.addEventListener("click",(refresh)=>{
    refresh.preventDefault();
   maindiv.innerHTML=""
   storetodo();
    todostyle()
   
});
function storetodo(){
    let input = document.getElementById("input").value;
let importance = document.getElementById("importance").value;
    todolist.push({
        text : input,
        boxcolor: importance,
        completed:false
    });
   document.getElementById("importance").value ="";
   document.getElementById("input").value ="";

    if(addDiv.classList.contains("flex")){
        addDiv.classList.remove("flex");
        addDiv.classList.add("hidden");
        showtodo.textContent = "add Todo";   
    }
    
};
// styleing the todos
function todostyle (){
    let sortedlist = todolist.sort((a,b)=>a.completed-b.completed)
    sortedlist.map(todo=>{
        
       let div = document.createElement("div");
      
       div.classList.add("divstyle");
       maindiv.appendChild(div);
       let h1 = document.createElement("h1");
       h1.textContent = todo.text;
       h1.classList.add("h1style")
       let box = document.createElement("div");
       box.classList.add("importance");
       div.append(h1,box);

        div.addEventListener("click",()=>{
        todo.completed = !todo.completed;
        maindiv.innerHTML =""
        todostyle()

       });
       if(todo.completed){
 h1.classList.add("decorition");
       }

       
       if(todo.boxcolor==="important"){
        box.classList.add("red")
       }
       else if(todo.boxcolor==="normal"){
        box.classList.add("green")
       }
       else{
        box.classList.add("yellow")
       }
    })
}