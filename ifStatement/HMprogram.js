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
// }2w22222222w23ee3eeeeee

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

// // eight one 8
// for(let i = 0; i<=5;i++){ 
//     for(let b = 0; b<i; b++){
//       console.log("*");
//     }
//     console.log('\n');  
// };
// // ninth one 9
// for(let j =4;j>=1;j--){
//     for(let f = 1;f<=j;f++){    
//       console.log('*');;
//     }
//      console.log("\n"); ;
// }
// tenth one 10;


// }
// eleventh 11;;;;;

// for(let f = 1; f<=10;f++){
//    main += f**2;

//    console.log(main);
// }
// // TEWLVWTH ONE 12;
// let tagsim = 90;
// for(let h =5;h<=90;h++){
//     if(h%9===0){
//         console.log(h);
//     }
// };
// //fourteenth one  14;
// let manfi = [15,-19,8,3,-0,-12,7,-4];
// for(let g= 0; g<=manfi.length;g++){
//     if(manfi[g]>0){
//         console.log(manfi[g]);
//     }
// };
// // fivteenth one 15;
// for(let r = 1; r<=10; r++){
//     for(let n = 1;n<r;n++){
//         console.log(r+"*"+n+'='+r*n);
//     }
// }


// whilte loop program
// // first one 1
// let i = 1;

// while(i<1000000000){

// console.log(i**2);
// i++
// };
// // secound one 2
// let evennums = 0;
// let oddnums = 0;
// let hi = 0;
// let list = [];
// while(true){
// let getnum = Number(prompt('enter a number'));
// if(getnum===0){
//     break
// }
// list.push(getnum)
// while(hi<=list.length){
//     if(list[hi]%2===0){
//         evennums++
//     }
//     else if (list[hi]%2!==0) {
//         oddnums ++
//     }
//     hi++
// }
// }
// console.log(evennums+'عدد جفت');
//  console.log(oddnums+"عدد تاق");
// for loop
// let arr = [1,2,3,4,5,6,7];
// let oddnums = 0;
// let evennums = 0;
// for(let i = 0; i<arr.length;i++){
// if(arr[i]%2===0){
//     oddnums = arr[i];
//     console.log(oddnums);
// }
// else if (arr[i]%2!=0){
//     evennums=arr[i];
//     console.log(evennums);
// };
// };
// third one 3
 let problem1 = ''
// // whith lenght 3
// let resuilt = ""
// let lenghts = 12356789
//  lenghts = lenghts.toString
// let i = 0;
// while(i<=lenghts.length){
//   resuilt = i+'عدد وارد شده '+i+'رقم است';
// i++
// }
// console.log(resuilt)

// // fourth one 4
// let i = 0;
// let p = 0;
// let textlist = []
// let text = "12345";
// let text2 = "";
// while(i<text.length){
//     textlist.push(text[i]);
//     i++
// }
//     while(p<text.length){
//         text2 += textlist.pop();
//         p++
//     }
// console.log(text2)

let problem = ''
// // fivth one 5
// let num = 2;
// let sum = 0
// let num4 = 1000;
// while(num<=1000){
//     let nuber = 2;
//     let prim = true
//  while(nuber< num){
//     if(num%nuber===0){
//        prim = false;
//        break;
//     }
//     nuber++; 
//  }
//    if(prim){
//         console.log(num)
//     }
// num++

// }


// // sixed one 6;
// let numlist = 20;
// let savenum = [];
// let p = 0;
// let g = 0;
// while(p<=numlist){
//    savenum.push(p);
//     p++;
// }
// console.log(savenum);

// // seventh one 7
// let list1 = [1,2,3,4,5,6,7,8,9,0];
// let totext = "";
// let f = 0
// while(f <10){
//     totext += list1.shift();
//     f++;
// }
// console.log(totext);

// // eight one 8;
// let d = 1;

// while(d<=5){
//   let s = 0;
//   let nums = ""; 
//   while(s<d){
//     nums+= d;
//     s++;
//   } 
// console.log(nums);
//     d++;   
// }
// 
// let i = 0;
// let b = 1;
// let d = 0;
// let s = 0;
// let a = 0;
// let w = 0;

// while( i<=5){ 

// if(i===1){
//      console.log(i)
// }
// else if (i===2){
//      while(d<2){
//         console.log(i)
//         d++
//     }}
//     else if (i===3){
//          while(s<3){
//         console.log(i);
//         s++;
//     }}
//     else if (i===4){
//          while(a<4){
//         console.log(i)
//         a++;
//     }}
//     else if (i===5){
//          while(w<5){
//         console.log(i);
//         w++
//     }}
//     i++ ;
// };

// // ninth one 9
let promlep3 = ''
// let password = prompt('enter your password to sign in');
// let r = 0;
// let numbers = [1,2,3,4,5,6,7,8,9,0];
// let srring = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','r','s','t','u','v','w','x','y','z'];
// let string = [];
// let w = 0;
// let q = 0;
// do{
//   do{
//     do{
//         password.toLowerCase
//    if(password.includes(srring[w])&&password.includes(numbers[q])&&password.length>8){
//     console.log('your password is correct');
//     break;
// }
// else{
//    console.log('your password is not correct') ;
//    break;
// }
// q++
// // number while end
//     }while(q<numbers.length);
//         // string while end;     
// w++
// }while(w<srring.length) ; ;
// r++
// }while(r<1);

// // tenth one 10;
// let strings = "shikeba";;;;
// let lists = [];
// let t = 0;
// while(t<strings.length){
//     lists.push(strings[t]);
//     t++
// }
// console.log(strings);
// console.log(lists);

// // eleventh one 11;
// let s = 0;
// while(s<1000){
//   if(s%2===0&&s%3===0){
// console.log(s);
//   }
//   s++
// }

// // thwelvth one 12;
// let adads = Math.random()*1000;
// let z = 0;
// do{
//  if(adads>1&&adads<100){
//   console.log("you are close to one");
//  }
//  else if (adads>100&&adads<200){
//   console.log('you are a little far then one')
//  }
//  else if (adads>200&&adads<300){
//   console.log('you are in the middel');
//  }
//  else if (adads>300&&adads<400){
//   console.log('you are very far');
//  }
//  else if (adads>400&&adads<500){
//   console.log('you are very very far');
//  }
//  else{
//   console.log("we couildn't find your station");
//  }
// z++;
// }while(z<adads);

// // thirteenth one 13

//   let d = 9;
//   while(d>=1){
//     console.log(d);
//     d--;
//   }

// function lab menual;;

// //  first one 1;;-
// function squire(num){
//  return num**2;
// }

// let resuilt2 = squire (6);
// console.log("جزر مربع عدد وارد شده"+resuilt2);

// // secound one 2
// function gigger(num,num1){
//   if(num>num1){
//     return num;
//   }
//   else{
//     return num1;
//   }
// }
// let bigger1 = gigger(100,16);
// console.log(`عدد بزرگتر`+bigger1);

// // third one 3;
// function greating(name,lastName){
//   return name + lastName;
// }
// let greating1 = greating("shikeba ","zahedi");
// console.log("hello MS."+greating1+", welcome to our company");

// // fourth one 4
// function numbers1(number2){
//   if(number2%2===0){
//     return number2 +' is an even number';
//   }
//   else{
//     return number2 + " is an odd number";
//   }
// }
// let allnum = numbers1(32);
// console.log(allnum);;

// // fivth one 5;
// function selcuse(celsius){
//   return celsius * 9/5 +32;
// }
// let celsuseadad = selcuse(25);
// console.log(celsuseadad);;;

// // sixth one 6;
// let nums4 = 1;;
// function factoryals(mainnum){
//   for(let i = 1 ; i<=mainnum; i++){
//   nums4*=i;
// }
// return nums4;;
// }
// let factoryal1 = factoryals(6);;
// console.log(factoryal1);;


// // seventh one 7;;


// let reversstring = "";;
// function revers(string){
//   for(let i =string.length-1; i>=0; i--){
//    reversstring = reversstring+string[i];
//   };
  
//   return reversstring;
// }
// let alltext = revers('hello');
// console.log(alltext);

// // eight one 8;

// function numbersSum(...allnums){
//   return allnums.reduce((main,numbers)=>{
// return main+numbers;
//   },0);
// }
// let resuiltnumber = numbersSum(4,7,2,9);
// console.log(resuiltnumber);

// // ninth one 9;
// let isprime = true;
// function primenumber(number){
//   if(number<1){
//    return isprime = false;
//   };
// let num = 2;
// for(let i = 2; i <= Math.sqrt(number); i++){
// if(number%i===0){
//  return isprime =number + " is not a prime numebr";
//   break;
// }
// }
// if(isprime){
//   return number +'  is a prime number';
// }

// }
// let resuiltnum = primenumber(13);
// console.log(resuiltnum);


// // tenth one 10
// function anagram(first="",secound){
// let string1 = first.replace(/\s/,'').toLowerCase();
// let string2 = secound.replace(/\s/,'').toLowerCase();
// return string1.split("").sort().join("")===string2.split("").sort().join("")
// }
// let resuilt = anagram('map','listen');
// console.log(resuilt);

// // eleventh one 11;
// function getnumbers(...numbers){
//     let max = numbers[0];
//     let min = numbers[0];
//     for(let i =0; i<numbers.length; i++){
//         if(numbers[i]>max){
//             max= numbers[i];
//         }
//        else if(numbers[i]<min){
//             min = numbers[i];
//         }
//     }
//     return {minemum: min, maximam: max};
// }
// let resuilt2 = getnumbers(1,3,4,7,9,8);
// console.log(resuilt2);

// // twelvth one 12;
// function repetedtext (text){
//     let liters = {};
//     for(let i = 0 ; i<text.length; i++){
//         const repeted = text[i];
//         if(liters[repeted]){
//             liters[repeted]++;
//         }
//         else{
//             liters[repeted]=1
//         }
//     }
//     return liters
// }
// let g = repetedtext("hello world");
// console.log(g);


// // thirteenth one 13

// function  getevarge (...nums){
//     let sum = 0;
//     let total = 0;
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i>0]){
//             sum++;
//             total +=nums[i];
//         }
//     }
//     return total/sum
// }
// let f = getevarge(28);
// console.log(f)

// fourteenth  one 14;


// // length string && includes && trim && toupercase || lowercase
// let enterName = prompt("enter name");
// let name = enterName.toLowerCase().trim();

// if(name.length>=4&&name>="a"&&name<="z"||(name>="A"&&name<="Z")&&name.includes("!","@","#","$","&","*")){
//     console.log(`your name ${name} is valid`);
// }else{
//     console.log(`your name ${name} is not valid`);
// };
// // split1 && includes2 && tolowercase2 && lenght2 && trim
// let litters = prompt("enter many names put (,) between names").toLowerCase.trim();
// let names = ["ali","mohammad","mahdi","sohaila","amir","naqi"];
// for(let i = 0; i<names.length;i++){
//     if(litters.includes(names[i])){
//         console.log(litters.split(","));
//         break;   
//     }
// };

// // slice&& split && indexof && 
// function properties(text){
//    return text.indexOf("a");   
// }
// let resuilt = properties("mohammad");
// console.log(resuilt);
// let text = "mohammad";
// console.log(text.slice(1,4).replace("oha","mar"));
// console.log(text.split(""));

// // length
// let entertext = "samir"
// let text = "hello";

// // 1
// if(text.length<6){
//     console.log(`IT IS A WEEK PASSWOR`);
// }else{console.log(`srong password`)}
// // 2
// for(let i = 0; i<text.length; i++){
//     console.log(text[i]);
// };
// // 3
// if(text.length===entertext.length){
//     console.log(`${text} ${entertext} has the same length`);
// };
// // 4
// if(text.length%2===0){  
//         console.log(`this text's length is even ${text.length}`);
   
// }else{
//         console.log(`this text's length is odd ${text.length}`);
// }
// // 5
// if(text.length<3){
//     text="";
// }
// else{console.log('this is a text')};

// // toLawerCase&& toupercase
// let text1 = "shikeba";
// let resuilt1 = text1.toLowerCase();
// // 1
// if(text1.length%2===0){
//     let resuilt= text1.toUpperCase();
//     console.log(resuilt);
// }
// else{
    
//     console.log(resuilt1);
// };
// // 2
// let revers = text1.split("").reverse().join("").toUpperCase();
// console.log(revers);
// // 3
//  let toUpperCase =text1.slice(0,1).toUpperCase() + text1.slice(1);
//  console.log(toUpperCase);
// //  4
// let text2 = "Hello World I am Shakiba";
// for(let i =0 ; i<text2.length; i++){
//     if(text2[i]>="A"&&text2[i]<="Z"){
//         console.log(text2[i]);
//     }
// };
// // 5
// let text3 = "HELLO";
// if(text3>"A"&&text3<"Z"){
//     console.log(text3.toLowerCase());
// }
// else if(text3>"a"&&text3<"z"){
// console.log(text3.toUpperCase());
// };

// // trim
// let text4 = "hello evryone";
// // 1
// let trim = text4.trim();
// console.log(trim.length);
// // 2
// // let text5 = prompt("enter a text").trim();
// // if(text5===""){
// //     console.log("input is empty");
// // }else{console.log("valid input")};
// // 3
// let text6 = "    hello    ".trim();
// console.log(text6.toUpperCase());
// // 4
// let text7 = "hello";
// let text8 = "  hello  ";
// let text9 = text8.trim();
// if(text7.length===text8.length){
//     console.log(text6.length + " " + text7.length + " both has the same length");
// }else if(text7.length===text9.length){ 
//     console.log("they  have the same length") ;
// }
// else{
//     console.log("they don't have the same length");
// };

// // charAt
// // 1
// let carat = "hello world";
// console.log(carat.charAt(0));
// console.log(carat.charAt(carat.length -2));
// // 2
// let text10 = "salam";
// for(let i = 0; i<text10.length; i++){
//     console.log(text10.charAt(i));
// };
// // 3
// let i = "salam";
// let n = 0;
// for(let m = 0; m<i.length; m++){
// if(i.charAt(m)==="a"){
//    n++ 
// }
// }
// console.log(`the letter a has used ${n} time here`);
// // 4
// let upercase = "me";
// let conect = upercase.charAt(0).toUpperCase() +upercase.slice(1)
// console.log(conect);

// // carcodeat
// // 1
// let carcode = "shikeba";
// let tocarcode = carcode.charCodeAt(0)
// console.log(tocarcode);
// // 2
// for(let i =0; i<carcode.length; i++){
//     console.log(carcode.charCodeAt(i)+ " " + "the code of" +" "+ carcode[i]);
// }
// // 3
// let carcode2 = "kabir";
// let carcode3 = carcode2.charCodeAt(0);
// console.log(carcode3);
// // 4
// let suma = 0;
// for(let i =0 ; i<carcode2.length; i++){
// if(carcode2.charAt(i)==="a"){
//     suma++
//   console.log(carcode2[i].charCodeAt() + " " +suma);
  
// }
// }
// // indexof && lastindexofs
// // 1
// let indexof = "hello world";
// let index = 0;
// for(let i = 0; i<indexof.length; i++){
// if(indexof[i]==="l"){
//     index++
    
// }
// }
// console.log(indexof.indexOf("l") + " " +index);
// console.log(indexof.lastIndexOf("l"));
// // 2
// let texte = "zebraz";
// for(let i = 0; i<texte.length;i++){
//     if(texte[i]==="z"){
//         console.log(` Z has exist here the number of index is ${texte.indexOf("z")}`);
//         console.log(` Z has exist here the number of lastindex is ${texte.lastIndexOf("z")}`);
//         break;
//     }
//     else{console.log('the litter z does not exists');}
// };
// // 3
// let finde = texte.indexOf("e");
// console.log(finde);

// // startwith && endwith
// // 1
// let start = "mother";
// if(start.startsWith("m")){
//     console.log('mother starts with M ');
// }else{console.log(`mother dosent start with ${start.charAt(0)}`)};
// // 2
// let end = "mom";
// if(start.startsWith('m')===end.endsWith("m")){
//     console.log(` the word mother's start ${start[0]} and the word mom ends with ${end[end.length -1]} are the same litter`)
// }else{console.log(` they are not the same`)};
// // 3
// let ends = "father";
// if(ends.endsWith("r")){
//     console.log(` the word${ends} ends with ${ends[ends.length -1]}`);
// };

// // substring
// // 1
// let sub = "hello world, this is shikeba";
// let subded = sub.substring(0,11);
// console.log(subded);
// // 2
// if(sub.length>15){
//     console.log(sub.substring(0,16));
// }else{console.log(sub)};
// // 3
// let names = "shikeba";
// if(names.length>20){
//     let subdedstring = names.substring(0,21);
//     console.log(`${subdedstring} your name was too long then we had cut your name it must not be more then 20`)
// }else{console.log("your name is apropriate")};

// // repeat
// // 1
// let repeat = "shikeba";
// for(let i =0; i<repeat.length; i++){
//     if(repeat[i]==="a"){
//         console.log(repeat[i].repeat(4));
//     }
// };
// // 2
// for(let i =0; i<5; i++){
//     console.log('hi'.repeat(i));
// };
// // 3
// for(let i = 5; i>0; i--){
//     console.log('\n')
//     console.log('hi'.repeat(i));
// };

// // contact
// // 1
// function contacts(name,fatherName){
//     console.log(name.concat( fatherName))
// }
// contacts("shikeba"," asadullah");
// // 2
// let concat = "samir";
// if(concat.includes("s")){
//    console.log( concat.concat(" ebrahimi"))
// }else{console.log('i think your has not S')};

// // lacalcampare
// // 1
// let compare =  "hello llo"
// console.log(compare.lastIndexOf(""))
// console.log (compare.localeCompare("samir"));
// // 2
// console.log(compare.localeCompare("hello"))

// // padStart && padend
// // 1
// let pads = "1";
// console.log(pads.padStart(4,"0"));
// // 2
// console.log(pads.padEnd(3,"g"));
// // 3
// let strings = "samirdsmnvadjl" 
// if(strings.length<10){
//     console.log(strings.padEnd(14," alizade"))
// }else{
//     console.log(strings.padStart(20," alizade"))
// }

// strings lab menual

// // first one 1
// function onlystring(text){
//     let strings = ""
//     for(let i = 0; i<text.length; i++){
//         if((text[i]>="a"&&text[i]<="z")||text[i]<="A"&&text[i]>="Z"){
//             strings+= text[i];
//         }
//     }
//     return strings;
// }
// let string = onlystring("hel7lo world 123");
// console.log(string);

// // secound one 2
// function lowercase (text){
//     let kochak = "";
//     for(let i =0; i<text.length; i++){
//         if(text[i]>="A"&&text[i]<="Z"){
//             kochak+= '_'+text[i].toLowerCase();
//         }
//         else{
//             kochak+=text[i];
//         }
//     }
// return kochak;
// }
// let lower = lowercase("myName");
// console.log(lower);

// // third one 3
// function shorttext(text){
//     let short = "";
//     for(let i = 0; i<text.length; i++){
//     if(text[i]!==text[i -1]){
//         short+= text[i];
//     }
//     }
//     return short;
// }
// let shorted = shorttext("bookkeper");
// console.log(shorted);

// // fourht one 4
// let trime = " hello world ";
// let trimed =trime.replace(/^\s+|\s+$/g,"");
// console.log(trimed);

// // fivth one 5
// let revers = "hello world i'm what i am";
// let reverses = revers.split(" ");
// let reversed = reverses.map(word => word.split("").reverse().join("")).join(" ")

//   console.log(reversed);

// // sixed one 6;
// let text = "aAABBb";
// let litterlength = {};
// for(let i =0; i<text.length;i++){
//     let litter = text[i];
//    if(litterlength[litter]){
//     litterlength[litter]++;
//    }
//    else{
//     litterlength[litter]=1;
//    }
// }
// console.log(litterlength);

// // seventh one 7;
// let problem2 = '';
// // function littertime(litter){
// //     let savelitter = {};
// // for(let i = 0; i<litter.length; i++){
// //     let litters = litter[i];
// //     if(savelitter[litter]==="a"){
// //         savelitter[litter]++;
// //     }
// //     else{
// //     savelitter[litter]=1;
// //     }
// // }
// // return litter + savelitter;

// // }let ltterresuilt = littertime("javascript");
// // console.log(ltterresuilt);

// // eight ona 8;git in
// function fasela(text){
//     let newtext = "";
//     for(let i =0; i<text.length; i++){
//         if(text[i]!==" "){
//             newtext+= text[i];
//         }
//     }
//     return newtext;
// }
// let resuilt = fasela("hello   world");
// console.log(resuilt);

// // ninth one 9;;
// function uppercase(sectence){
//     let split = sectence.split(" ");
//   let upper =split.map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
//   return upper;
// }
// let resuilt1 =uppercase("hello world i'm shikeba");
// console.log(resuilt1);

// // tenth one 10;;;;
// function matn(text){
//     let alltext = text.split(",");
//     return alltext;
// }
// console.log(matn("hello,iam,shikeba"));

// // elewenth one 11;
// function twines(first,secound){
//      return first.split("").sort().join("")===secound.split("").sort().join("")
// }
// let showtwines = twines("listen","silent");
// console.log(showtwines);

// // twelvth one 12;

// function join(...text){
//     let string = text.join(" ");
//     // for(let i =0; i<text.length; i++){
//     //    string+=text[i];
//     // }
//     return string;
// };
// let resuiltjoin = join("hello","evryone");
// console.log(resuiltjoin);

// // thirteenth one 13;
// function repeat (text){
//     for(let i = 0; i<2;i++){
//        return text.repeat(3);
//     }
// }
// console.log(repeat(" hello"));

// // fourteenth one 14;
// let t = " hello";
// function startwith (text){
//    if (text.startsWith("hello")&&text.endsWith("good by")){
//    return "your condition is true";
//    }
// }
// console.log(startwith("hello and good by"));

// // Array functions;

// // first one push();
// let text = "hello world";
// let texts = []
// for(let i = 0; i<text.length; i++){
// texts.push(text[i]);
// }
// console.log(texts);

// // secound one pop;
// let pops = ["hello","i am","a","good","devloper"];
// let getpop = ""
// for(let i =pops.length; i>0;i--){
//    getpop+= "_"+pops.pop(i);
// };
// console.log(getpop);

// // // third one shift;
// let shift = ["hello","my","name","is","Shikeba"];
// let shifted = "";
// while(shift.length>0){
//     shifted+= " "+shift.shift();
// }console.log(shifted);

// // // fourth one unshift;
// let string = " hello girl";
// let list = [];
// for(let i =string.length ; i>=0; i--){
//   list.unshift(string[i]);
// }console.log(list);

// // fifth one splice && join;
// let splice = "hello every one today we are going to have a fun ";
// if(splice>="a"&&splice<="z"){
//     let splited = splice.split(" ");splited.splice(1,3,"dear ","classmates");
//     let joined = splited.join(" ");
//     console.log(joined);
// };

// // sixed one slice && join;
// let adadlist = ["12","14","43","72"];
// let newlist = adadlist.slice(1,).join(" ");
// console.log(newlist);

// // seventh one concat && join;
// let text8 = ["hello evrery one"];
// let text9 = ["i hope you feel great"];
// for(let i =0; i<text.length; i++){
//     if(text8[i]>="a"&&text8[i]<="z"){
//        let all=  text8.concat(text9).join(" ");
//            console.log(all);
// } };

// // eight one foreach;
// let lists = [23,34,75];
//  let newlisst =lists.forEach(items =>{
//     console.log(items + 2);
// });
// // ninth one map;
// let items = [224,799,334,566];
// let newitems = items.map(items =>{
//     return items*2;

// });
// console.log(newitems);

// // tenth one filter;
// let otherlist = ["mahdi","samir","shaikba","fariba"];
// let newitem = otherlist.filter(item=>{
//     return item.includes("h");
// });
// console.log(newitem);

// function litters (litter){

// }
// let mainlist = otherlist.filter(litters=>{
//     return litters.includes("s");
// });
// console.log(mainlist);
// // find
// let finde = ["moosa","ahmad","nargis","shafiq"];
// function find(item){
//     return item.includes("m")
// }
// let findresuilt = finde.find(find);
// console.log(findresuilt);

// // findindex
// let findindex = [3,7,8,9,10];
// function mosoul(index){
//     return index%2===0;
// };
// let findedindex = findindex.findIndex(mosoul);
// console.log(findedindex);
// // some;
// let som = ["abdul","habib","morteza","mahboba"];
// function finding (find){
//     return find.includes("j");
// }
// let resuilt = som.some(finding);
// console.log(resuilt);
// // every
// let items1 = ["eli","mohammad","samira","alidad"];
// let evryitem = items1.every( items =>{
//     return items.includes("a")
// });

// // rediuse 
// let rediose = ["ali","mohammad","alisena"];
// let rediosed = rediose.reduce((newList,items)=>{
//     return newList+" "+items
// },"");
// console.log(rediosed);
// // function decleration
// let problem5 = '';
// // let reducenum = [12,34,6,7];
// // function reduces (newitem,arritems){
// //     if(newitem>arritems){
// //         return newitem;
// //     }
// //     else{
// //         return arritems;
// //     }
// // };
// // let newlists = reducenum.reduce(reduces);
// // console.log(newlists)

// // sort
// let numbers = [90,80,34,56,1,245];
// let sortednums = numbers.sort((smallnum,bignum)=> smallnum - bignum);
// console.log(sortednums);
// // for string
// let strings = ["zahra","alimohammad","wahida","morteza","bahara"];
// let sortedstring = strings.sort();
// console.log(sortedstring);
// // revers 
// let revres = [1,2,3,4,5,90,100,3556];
// let reversednum = revres.reverse();
// console.log(reversednum);
// // for string;
// let reversstring = ["ali","mohammad",12,"shikeba",54];
// let revrsedstring = reversstring.reverse();
// console.log(revrsedstring);

// object functions;
// adding new value;
let objectarr = [{name:"ali",lastname:"qorbani",age: 23},{name:"mohammad",lastname:"mohammadi",age: 34},{name:"mahdi",lastname:"zahedi",age: 34}];
let resuiltofarr = objectarr.map( (object)=>{
    if(object.name==="ali"){
        object["score"]= 89;
        return object;
    };
    
});
console.log(resuiltofarr);

// removing a value;
let deletvalue = [{name:"ali",lastname:"qorbani",age: 23,class: "a"},{name:"mohammad",lastname:"mohammadi",age: 34,class:"a"},{name:"mahdi",lastname:"zahedi",age: 34,class:"b"}];
let resuiltdeletvalue = deletvalue.map( objects=>{
    if(objects.class==="a"){
        return objects;
    }else{
        delete objects.class;
    }
});
console.log(resuiltdeletvalue);

// function in object;
let objectfun = [{name:"ali",lastname:"qorbani",age: 23,class: "a",aliinfo:function (){ return ` hello MR.${this.name} ${this.lastname} you are ${this.age} years old and you are in class ${this.class}`}},{name:"mohammad",lastname:"mohammadi",age: 34,class:"a",mohammadinfo:function (){ return ` hello MR.${this.name} ${this.lastname} you are ${this.age} years old and you are in class ${this.class}`}},{name:"mahdi",lastname:"zahedi",age: 34,class:"b",mahdiinfo:function (){ return ` hello MR.${this.name} ${this.lastname} you are ${this.age} years old and you are in class ${this.class}`}}];
let objectmap = objectfun.map(items =>{
    if(items.name==="ali"){
        return items.aliinfo();
    }
    else if(items.name==="mohammad"){
        return items.mohammadinfo();
    }
    else{
        return  items.mahdiinfo();
    }
});
console.log(objectmap);

// object keys
let aliInfo = {name:"ali",lastname:"zahedi",class:"a"};
let resuiltofinfo = Object.keys(aliInfo);
console.log(resuiltofinfo);
// object values
let valueofaliinfo = Object.values(aliInfo);
console.log(valueofaliinfo)