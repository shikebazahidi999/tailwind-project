// first program 1
let nagativenum = -4;
if(nagativenum<0 &&nagativenum>=-5){
    console.log(`the number ${nagativenum} is a negative number`);
}
else if(nagativenum>=0){
    console.log(`the number ${nagativenum} is a positive number`);
}
else{
    console.log("this is not a number");
}

// secound prohram 2
let evenNum = 42;
if(evenNum%2===0){
    console.log(`the number ${evenNum} is even`);
}
else{
    console.log(`the number ${evenNum} is an odd number`)
}

// third program 3
let adult ={
    name: "ali",
    fatherName: "hatif",
    age: 18,
    class: 12,
}
if(adult.age>=18){
    console.log(`MR ${adult.name}  you can enter your vote`)
}
else{
    console.log(`Sorry baybe you can not enter vote becouse the age ${adult.age} not legal`)
}
         4
// fourth program 4
let letters = prompt("enter a letter to check is voul or no");
let lowercase = letters.toLowerCase()
if(lowercase==="a"||lowercase==="e"||lowercase==="i"||lowercase==="o"||lowercase==="u"){

    console.log(`the letter (${letters}) you intered is a vaoul letter`)
    
}
else{
    console.log(`the letter (${letters}) you entered is not a vaoul letter`)
}
            5
// fivth program 5
// am morning pm afternoon
let time = 14;
if(time>=1&&time<12){
    console.log("good morning")
}
else if(time>=12&&time<15){
    console.log("good afternoon")
}
else if(time>=15 &&time<=18){
    console.log("good evening")
}
else if(time>18&&time<=24){
    console.log("good night")
}
else{
    console.log("i don't know what time is it now")
}
        6
// // sixed program 6
let num1 = prompt("enter a number")
let num2 = prompt("enter a number")
let num3 = prompt("enter a number")
if(num1>num2&&num1>num3){
    console.log(`the number (${num1}) is bigger then (${num2}) and (${num3})`)
}
else if(num2>num1&&num2>num3){
    console.log(`the number (${num2}) is bigger then number (${num1}) and number (${num3})`)
}
else if (num3>num1&&num3>num2){
    console.log(`the number (${num3}) is bigger then number (${num1}) and number (${num2})`)
}
else{
    console.log(`you didn't enter number`)
}
          7
// // seventh program 7
// let score = prompt("enter your score to know in which group are you in");
// if(score<=100&&score>=90){
//     console.log("you are in group (A)")
// }
// else if (score>=80&&score<90){
//     console.log("you are in group (B)")
// }
// else if(score>=70&&score<80){
//     console.log("you are in group (C)")
// }
// else if(score>=60&&score<70){
//     console.log("you are in group (D)")
// }
// else{
//     console.log("ummmm sorry you faild the exam try more")
// }
              8
// // eighteth program 8
// let trafic = prompt("enter the trafic color to know what to do");
// let trafic1 = trafic.toLowerCase();
// if(trafic1==="red"){
//     console.log("stop")
// }
// else if (trafic1==="yellow"){
//     console.log("drive slow")
// }
// else if(trafic1==="green"){
//     console.log("you can go")
// }
// else{
//     console.log("you didn't enter the right color of trafic")
// }
            9
// // nineth program 9
// let weather = prompt("inter the weather score to know how is the weather");
// if(weather>=35){
//     console.log("the weather is too hot")
// }
// else if(weather<34&&weather>20){
//     console.log("the weather is good")
// }
// else if (weather<20&&weather>10){
//     console.log("the weather is a littel cold")
// }
// else{
//     console.log("the weather is too cold")
// }
           10
// // thinth program 10
// const numbers = prompt("enter a number")
// if(numbers<=100&&numbers>=1){
//     console.log("the number is in the limitted area")
// }
// else{
    // console.log("the number is not in the limitted area")
// }
                11
// // eleventh program 11
// let taqsim = prompt("enter a number that you want to divide");
// let adad = prompt("enter a number that you want to divide the ex number on");
// if(taqsim%adad===0){
//     console.log(`the number ${taqsim} is full able to divide on number ${adad}`)
// }
// else{
//     console.log(`the number ${taqsim} is not able to divide on ${adad}`)
// }
              12
// // twelvth program 12
// let firstnum = Number(prompt("enter a number"));
// let opretor = prompt("what do you want to do whith this number");
// let secoundnum = Number(prompt("enter the secound number"));
// if(opretor==="+"){
//    let resuilt = firstnum+secoundnum
//    console.log(firstnum+"+"+secoundnum+"="+resuilt) ;
// }
// else if (opretor==="*"){
//     let resuilt1 = firstnum*secoundnum
//     console.log(firstnum+"*"+secoundnum+"="+resuilt1);
// }
// else if (opretor==="/"){
//     let resuilt1 = firstnum/secoundnum
//     console.log(firstnum+"/"+secoundnum+"="+resuilt1)
// }
// else if (opretor==="-"){
//     let resuilt1 = firstnum-secoundnum
//     console.log(firstnum+"-"+secoundnum+"="+resuilt1)
// }
// else{
//     console.log("sorry we coudn't understand try again")
// }
           13
// thiteenth program 13
// paper <rock sissores <paper rock <sissores 
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