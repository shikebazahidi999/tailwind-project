// class studentsInfo {
//     name;
//     lastname;
//     fathername;
//     age;
//     gender;
//     country;
//     constructor(name,fathername,lastname,age,gender,country){
//         this.name =name;
//         this.lastname =lastname;
//         this.fathername =fathername;
//         this.age =age;
//         this.gender =gender;
//         this.country =country;
//     }
// };
// let names = prompt("enter your name");
// let lastnames = prompt("enter your lastname");
// let fathernames = prompt("enter your father's name");
// let ages = prompt("enter your age");
// let genders = prompt("enter your gender");
// let countrys = prompt("enetr your country");
// let studentsInfos = new studentsInfo(names,lastnames,fathernames,ages,genders,countrys);
// console.log(studentsInfos);

class MyInfo{
    setName(name){
        if(isNaN(name)&&name>=3){
             this.name= "name " +name;
        }
        else{
            console.log("your name is invalid");
        }

    };
    getname(){
        return this.name;
    }
    setAge(age){
        if((!isNaN(age))&&age<100&&age>=1){
            this.age = "age "+age;
        }
        else{
            console.log("your age is invalid or you are too old");
        }
    };
    setEmail(email){
        if(email.includes("@")&&email.includes(".")){
             this.email = "email "+email;
        }
        else{
            console.log("your email is not valid");
        }
    }
}
let getnamess = prompt("enter your name");
let Me =  new MyInfo();
 console.log(Me.setName );
let getage = prompt("enter your age");
console.log(Me.setAge = getage) 