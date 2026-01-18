// // first program 1
// let nagativenum = -4;
// if(nagativenum<0 &&nagativenum>=-5){
//     console.log(`the number ${nagativenum} is a negative number`);
// }
// else if(nagativenum>=0){
//     console.log(`the number ${nagativenum} is a positive number`);
// }
// else{
//     console.log("this is not a number");
// }

// // secound prohram 2
// let evenNum = 42;
// if(evenNum%2===0){
//     console.log(`the number ${evenNum} is even`);
// }
// else{
//     console.log(`the number ${evenNum} is an odd number`);
// }

// // third program 3
// let adult ={
//     name: "ali",
//     fatherName: "hatif",
//     age: 18,
//     class: 12,
// }
// if(adult.age>=18){
//     console.log(`MR ${adult.name}  you can enter your vote`);
// }
// else{
//     console.log(`Sorry baybe you can not enter vote becouse the age ${adult.age} not legal`);
// }
//          4
// // fourth program 4
// let letters = prompt("enter a letter to check is voul or no");
// let lowercase = letters.toLowerCase()
// if(lowercase==="a"||lowercase==="e"||lowercase==="i"||lowercase==="o"||lowercase==="u"){

//     console.log(`the letter (${letters}) you intered is a vaoul letter`);
    
// }
// else{
//     console.log(`the letter (${letters}) you entered is not a vaoul letter`);
// }
//             5
// // fivth program 5
// // am morning pm afternoon
// let time = 14;
// if(time>=1&&time<12){
//     console.log("good morning");
// }
// else if(time>=12&&time<15){
//     console.log("good afternoon");
// }
// else if(time>=15 &&time<=18){
//     console.log("good evening");
// }
// else if(time>18&&time<=24){
//     console.log("good night");
// }
// else{
//     console.log("i don't know what time is it now");
// }
//         6
// // // sixed program 6
// let num1 = prompt("enter a number");
// let num2 = prompt("enter a number");
// let num3 = prompt("enter a number");
// if(num1>num2&&num1>num3){
//     console.log(`the number (${num1}) is bigger then (${num2}) and (${num3})`);
// }
// else if(num2>num1&&num2>num3){
//     console.log(`the number (${num2}) is bigger then number (${num1}) and number (${num3})`);
// }
// else if (num3>num1&&num3>num2){
//     console.log(`the number (${num3}) is bigger then number (${num1}) and number (${num2})`);
// }
// else{
//     console.log(`you didn't enter number`);
// }
//           7
// // seventh program 7
// let score = prompt("enter your score to know in which group are you in");
// if(score<=100&&score>=90){
//     console.log("you are in group (A)");
// }
// else if (score>=80){
//     console.log("you are in group (B)");
// }
// else if(score>=70){
//     console.log("you are in group (C)");
// }
// else if(score>=60){
//     console.log("you are in group (D)");
// }
// else{
//     console.log("ummmm sorry you faild the exam try more");
// }
//               8
// // eighteth program 8
// let trafic = prompt("enter the trafic color to know what to do");
// let trafic1 = trafic.toLowerCase();
// if(trafic1==="red"){
//     console.log("stop")
// }
// else if (trafic1==="yellow"){
//     console.log("drive slow");
// }
// else if(trafic1==="green"){
//     console.log("you can go");
// }
// else{
//     console.log("you didn't enter the right color of trafic");
// }
//             9
// // nineth program 9
// let weather = prompt("inter the weather score to know how is the weather");
// if(weather>=35){
//     console.log("the weather is too hot");
// }
// else if(weather<34&&weather>=20){
//     console.log("the weather is good");
// }
// else if (weather<20&&weather>10){
//     console.log("the weather is a littel cold");
// }
// else{
//     console.log("the weather is too cold");
// }
//            10
// // thinth program 10
// const numbers = Number(prompt("enter a number"));
// if(numbers<=100&&numbers>=1){
//     console.log("the number is in the limitted area");
// }
// else{
//     console.log("the number is not in the limitted area");
// }
//                 11
// // eleventh program 11
// let taqsim = prompt("enter a number that you want to divide");
// let adad = prompt("enter a number that you want to divide the ex number on");
// if(taqsim%adad===0){
//     console.log(`the number ${taqsim} is full able to divide on number ${adad}`);
// }
// else{
//     console.log(`the number ${taqsim} is not able to divide on ${adad}`);
// }
//               12
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
//     console.log(firstnum+"/"+secoundnum+"="+resuilt1);
// }
// else if (opretor==="-"){
//     let resuilt1 = firstnum-secoundnum
//     console.log(firstnum+"-"+secoundnum+"="+resuilt1);
// }
// else{
//     console.log("sorry we coudn't understand try again");
// }
//            13
// // thiteenth program 13
// // paper <rock sissores <paper rock <sissores 
// let randomNumber = Math.random()*100;

// let player = prompt("chooce Rock Paper or Sissores");
// const Sissores = "Sissores";
// const Paper = "Paper";
// const Rock = "Rock";

// if((randomNumber>60&&player===Paper)||(randomNumber>30&&player===Sissores)||(randomNumber<30&&player===Rock)){
//     alert("computer won");
// }
// else if((player===Rock&&randomNumber>60)||(player===Paper&&randomNumber>30)||(player===Sissores&&randomNumber<30)){
//     alert("you won");
// }
// else{
//     alert("you both have the same choice");
// }



// // switch program

// // fisrt 1
// let week = Number(prompt("enter a number to show the day of the week"));
// switch(week){
//     case 1:
//         console.log(`${week} is satarday`);
//     break
//     case 2:
//         console.log(`${week} is sunday`);
//     break;
//     case 3:
//         console.log(`${week} is monday`);
//     break;
//     case 4:
//         console.log(`${week} is tuseday`);
//     break;
//     case 5:
//         console.log(`${week} is wednsday`);
//     break;
//     case 6:
//         console.log(`${week} is thirsday`);
//     break;
//     case 7:
//         console.log(`${week} is friday`);
//     break;
//     default:console.log(`the number ${week} you entered is can't show what day is today`) ;                           
// };
// // secound one 2
// let month = Number(prompt("enter a number of months to show how many days does it have"));
// switch(month){
//     case 1:
//         console.log(`${month} month  is 30 days`);
//     break;
//     case 2:
//         console.log(`${month} month is 60 days`);
//     break;
//     case 3:
//         console.log(`${month} month is 90 days`);
//     break;
//     case 4:
//         console.log(`${month} month is 120 days`);
//     break;
//     case 5:
//         console.log(`${month} month is 150 days`);
//     break;
//     case 6:
//         console.log(`${month} month is 180 days`);
//     break;
//     case 7:
//         console.log(`${month} month is 210 days `);
//     break;
//     case 8:
//         console.log(`${month} month is 240 days`);
//     break;
//     case 9:
//         console.log(`${month} month is 270 days`);
//     break;
//     case 10:
//         console.log(`${month} month is 300 day`);
//     break;
//     case 11:
//         console.log(`${month} month is 330 days`);
//     break;
//     case 12:
//         console.log(`${month} month is 360 days`);
//     break;
//     default:console.log(`sorry i don't know how many days is this ${month} month`) ;                       
// };
// // third one 3
// let number = prompt("enter your group letter to show is it good or bad");
// let number1 = number.toLocaleLowerCase;
// switch(number1){
//     case a:
//         console.log(`your are in group (A) it is perfect`);
//     break;
//     case b:
//         console.log(`you are in group (B) it is great`);
//     break ;
//     case c:
//         console.log(`you are in group (C) it is good`);
//     break;
//     case d:
//         console.log(`your are in group (D) try more `);
//     break ;
//     case e:
//         console.log(`you are in group (E) ohhhh you need to start again`);
//     break;
//     case f:
//         console.log(`ohhh i think you are carzy`);
//     break;
//     default:console.log(`the letter ${number1} you entered is not a letter of score`);    
// };
// // fourth one 4
// let site = prompt("enter the one of north south east west to see wher to go");
// switch(site){
//     case south:
//         console.log(`go ahead`);
//     break;
//     case north:
//         console.log(`go back`);
//     break;
//     case east:
//         console.log(`go to the right site`);
//     break;
//     case west:
//         console.log(`got to the left site`);
//     break;
//     default:console.log(`i think you didn't enter the roght letter of site`);                
// };
// // fivth one 5
// let fruits = prompt("enter a kind of fruite to see what color is that");
// switch(fruits){
//     case banana:
//         console.log(`the fruit (banana) ha  yellow color`);
//     break;
//     case oranges:
//         console.log(`the fruit (oranges) has orange color`);
//     break;
//     case apple:
//         console.log(`the friute (Apples) usully have two colors red or yellow even sometimes green`);
//     break;
//     case garpe:
//         console.log(`the fruit (grape) has usully two colors green or black`);
//     break;
//     default:console.log(`ummm i don'nt know what kind of friut is it ${fruits}`);                
// };
// // sixed one 6
// let users = prompt(`enter your position that we let you to asign`);
// switch(users){
//     case admin:
//         console.log(`you are admin you can do everything you want`);
//     break;
//     case editor:
//         console.log(`you are an editor you only can edite not another thing`);
//     break;
//     case viewer:
//         console.log(`sorry you are just a viewer you can't remove any comments`);
//     break;
//     case guest:
//         console.log(`welocome , but sorry you are a gust only admin can changes this file`)  ;
//     default:console.log(`umm we don't know you so you can't sign in`) ;             
// };
// // sevsnth one 7
// let math = prompt("یک عملگر ریلضی را وارد نمایید تا اسم آن را برایت بگویم");
// switch(math){
//     case "*":
//         console.log(`اسم این (*) ضرب است`);
//     break;
//     case "+":
//         console.log (`اسم این (+) جمع است`);
//     break;
//     case "-":
//         console.log(`اسم این (-) منف است`);
//     break;
//     case "/":
//         console.log(`اسم این (/) تقسیم است`);
//     break;
//     case "%":
//            console.log(`اسم این (%) موژیول است`);
//     break;
//     default:console.log(`soory i don't know this one`);                   
// };
// // eight one 8
// let season = Number(prompt("enter a season that i suiggest you some funs"));
// switch(season){
//     case 1:
//         console.log(`Spring is a great season you can go to defrent placec for picninc `);
//     break;
//     case 2:
//         console.log(`Summer is hot and in this season you can go to swimming pools have ice drinks and have lots of fun`);
//     break;
//     case 3:
//         console.log(`Fall is a good season with color ful trees you can have a cap of tea and just enjoing the moment`);
//     break;
//     case 4:
//         console.log(`Winter is agood season with gold weahter in this season you can go skiing setting at home and have a hot tea with something for eat `);
//     break;
//     default:console.log(`i thing this we can't have season more then four`);
// };
// // ninth one 9
// let phoneNumberCode = Number(prompt(`enter the code of a phone number to know from which country is it`));
// switch(phoneNumberCode){
//     case 93:
//         console.log("93 Afghanistan");
//     break;
//     case 98:
//         console.log(`98 iran `);
//     break;
//     case 90:
//         console.log(`90 turkish `);
//     break;
//     case 971:
//         console.log(`39 italy`);
//     break;
//     case 1 :
//         console.log(`33 france`);
//     break;
//     case 2:
//     console.log(`34 spain`);
//     default:console.log(`i don't know what code is this ${phoneNumberCode}`);                   
// };
// // tenth one 10
// let numletter = Number(prompt('enter a number to know what is it in person'));
// switch(numletter>1&&numletter<10){
//     case 0:
//         console.log("صفر");
//     break;    
//     case 1:
//         console.log("یک");
//     break;
//     case 2:
//         console.log("دو");
//     break;
//     case 3:
//         console.log("سه");
//     break;
//     case 4:
//         console.log("چهار");
//     break;
//     case 5:
//         console.log("پنج");
//     break;
//     case 6:
//         console.log("شش");
//     break;
//     case 7:
//         console.log ("هفت");
//     break;
//     case 8:
//         console.log("هشت");
//     break;
//     case 9:
//         console.log("نوه");
//     break;
//     case 10:
//         console.log("ده");
//     break;
//     default:console.log("you enter a number more then 10")                                             
// };
// // eleventh one 11
// let paswand = prompt("enter th paspawand of your file to know what is aproperiate to open it");
// switch(paswand){
//     case "pdf":
//         console.log("microsoft ege is agood opetion for pdfs");
//     break;
//     case "jpg":
//         console.log(" xn view mp is a great option ");
//     break;
//     case "png":
//         console.log("xn view mp is good option for png too");
//     break;
//     case "mp4":
//         console.log("window media player is good option for openning adiuos");
//     break;
//     case "txt":
//         console.log("Note pad is a good option") ;
//     break;
//     default:console.log("coud't get the passwand");                   
// };
// // twlvth one 12
// let charge = prompt("enter your battery situation");
// switch(charge){
//     case 'low':
//         console.log("you need to charge you battry now");
//     break;
//     case "medium":
//         console.log("it can be enough for about 4 houres ");
//     break;
//     case 'high':
//         console.log('your battry is enough for about ond day');
//     break;
//     case 'full':
//         console.log(`your battry is ful you don't need to charege it `);
//     break;
//     case 'charging':
//         console.log("your battry is charging it is better to don't use it now");
//     break;
//     default:console.log("i don't know what to do now") ;                   
// };
// // thirteenth one 13
// let weekDays = prompt("enter the today's day to show what is your job");
// switch(weekDays){
//     case "saturday":
//         console.log("work");
//     break;
//     case  'sunday':
//         console.log("work"); 
//     break;
//     case "monday":
//         console.log("work");
//     break;
//     case "tuseday":
//         console.log("work");
//     break;
//     case "wendsday":
//         console.log("work");
//     break; 
//     case "thirsday":
//         console.log("free");
//     break; 
//     case "friday":
//         console.log("free");
//     break;    
// };

// loop program
// first one;

// for(let i = 1 ; i<=10;i++){
//     console.log(i);
// };
// // seacound one2;


// for(let n = 1;n<=20;n++){
// if(n% 2===0){
//     console.log(n);
// } 
// }
// // third one 3
// let sum = 0;
// for(let m =1;m<=100;m++){
//     sum +=m;
   
// };
//  console.log(sum);
// // fourth one 4;
// let multiply= 7;
// for(let v = 1; v<=10;v++){
//     console.log(v+"*"+7+"="+v*multiply);
// };
// // fivth one 5
// for(let b = 20;b>=1;b--){
//    console.log(b);
// };
// // sixed one 6
// for(let c = 1 ; c<=50; c++){
//     if(c%5===0){
//         console.log(c);
//     }
// };
// // seventh one 7
// let factoryal = 1;
// for(let d = 1;d<=8;d++){
//  let resuilt =factoryal*=d;
//     console.log(d+'x'+resuilt+'='+factoryal);
// };
// // TEWLVWTH ONE 12
// let tagsim = 90;
// for(let h =5;h<=90;h++){
//     if(h%9===0){
//         console.log(h);
//     }
// };
// 14
let manfi = [15,-19,8,3,-0,-12,7,-4];
for(let g= 0; g<=manfi.length;g++){
    if(manfi[g]>0){
        console.log(manfi[g]);
    }
};
// 8,9,11,13,