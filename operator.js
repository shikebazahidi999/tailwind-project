// // function whit argument and parametr
// let info = "my name is Shikeba ";
// let info2 = "my father's name is Asadullah";
// function AllInfo(name,fatherName){
//     console.log(name+fatherName);
// }
// AllInfo(info, info2);
// AllInfo(34,78);
// AllInfo("Hello everyone " ,"how are you");

// // function without argument and parametr
// // hoisting
//  number();
// function number(){
//      console.log("Hello everyone");
// }
// number();
// // return expression

// const returnInfo = function(name, name2){
//     return  name+name2;         
// }
// const resuilt = returnInfo("Shikeba ", "Zahedi");
// console.log(resuilt)

// // templet litral
// const Me = "Shikeba";
// const You = "Zahra";
// const us = `Hello i am ${Me} And today i'll itrouduce you my freind ${You}`;
// console.log(us);
// // ternary operator
// const HomePrice = "$4500";
// const homepricesForYou = HomePrice==="$4500"? `The home with ${HomePrice} price is a really beuti full hous that we suggest for you`:HomePrice==="$455"? "there are many houses that you can by with a good price":"we don't have any suggestion for you";
// console.log(homepricesForYou);
// // if statement
// const mainNumber = 200;
// if(mainNumber<100){
//     console.log("the number you interd is more then the number in the box");

// }
// else if (mainNumber===200){
//     console.log("the number you intered is correct and the same with the number in the box");

// }
// else{
//     consol.log("you didn't enter the write number")
// }


// // anonymous function or arrow function
// const number1 = (a,b,c)=>{
//     return a+b+c
// }
// const resuilt= number1(12,45.54)
// console.log(resuilt)

// // defuilt argument

// function multiply(name="mohammad", lastname="mohammadi"){
//     return name+lastname;
// }
// const total = multiply("masoma ","mosawi");
// console.log(total);

// // spread opretors

// const adding = (...number)=>{
//     let mainNumber = 0;
//     for(let number2 = 0; number2<number.length ; number2++){
//         mainNumber = mainNumber+ number[number2]
//     }
//     console.log(mainNumber)
// }
// adding(2,45,1,12,13,14)

// // method push

// const mainNumber =[12,45,32];
// const interNumber = Number(prompt("enter a number that you eant to collect togrther"));
// mainNumber.push(interNumber);
// let AllNumbers =0;
// for(let sum =0; sum<mainNumber.length ; sum++){

// AllNumbers = AllNumbers+ mainNumber[sum];
// console.log(AllNumbers);
// };

// // method pop
// const numberget = "array numbers"
// const popNumbr = [12,45,2,45,677,78,78,64,87,87];
// if(numberget==="array numbers"){
//      popNumbr.pop();
//     console.log(popNumbr)
// }
// // array method SLICE and FINDs
// const listStudents = ["fatima","fahima","ferishta","shikeba","amir","mohammad","simir"];
// const  partStudents = listStudents.slice(1,5);
// const students = partStudents.find(student=>{
//     return student =="shikeba"
// })
// console.log(students);
// // method includs and filter
// const studentName = listStudents.filter((nams)=>{
//     return nams.includes("a");
// })
// console.log(studentName);
let computer ="";
let randomNumber = Math.random()*100;

let player = prompt("chooce Rock Paper or Sissores");
const Sissores = "Sissores";
const Paper = "Paper";
const Rock = "Rock";

if((randomNumber>60&&player===Paper)||(randomNumber>30&&player===Sissores)||(randomNumber<30&&player===Rock)){
    alert("computer won");
}
else if((player===Rock&&randomNumber>60)||(player===Paper&&randomNumber>30)||(player===Sissores&&randomNumber<30)){
    alert("you won")
}
else{
    alert("you both have the same choice")
}

// Number ParseInt
let Number = "12";
let number2 = 30;
parseInt.Number
let numbers = Number*number2;
console.log(numbers);




