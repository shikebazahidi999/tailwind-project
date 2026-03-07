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
        if(isNaN(name)){
             this.names= name;
        }
        else{
            console.log("your name is invalid");
        }
    };
    getname(){
        return this.names;
    }
    setAge(age){
        if((!isNaN(age))&&age<100&&age>=1){
            this.age = "age "+age;
        }
        else{
            console.log("your age is invalid or you are too old");
        }
    };
    getage(){
        return this.age;
    }
    setEmail(email){
        if(email.includes("@")&&email.includes(".")){
             this.email = "email "+email;
        }
        else{
            console.log("your email is not valid");
        }
    }
    getemail(){
        return this.email;
    }
};

class Teacher extends MyInfo{
    salary;
    phoneNumber;
   static workTime(){
    console.log(`my work starts at 12am to 6pm`)

    }
};
let Teacher1 = new Teacher();
let getnames = prompt("enter your name");
Teacher1.setName(getnames);
let getages = prompt("enter your age");
Teacher1.setAge(getages);
let getemails = prompt("enter your email");
Teacher1.setEmail(getemails);
let salary = prompt("enetr your salary how much is thit");
console.log(Teacher1.salary = salary)
let phoneNumber = prompt("enter your phone number");
console.log(Teacher1.phoneNumber = phoneNumber);
Teacher.workTime()
// let Me =  new MyInfo();
// let getnames = prompt("enter your name");
// Me.setName(getnames)
//  console.log(Me.getname() );

// let getages = prompt("enter your age");
// Me.setAge(getages)
// console.log(Me.getage()) ;

// let getemails = prompt("enter your email");
// Me.setEmail(getemails);
console.log(Me.getemail());

