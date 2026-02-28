class studentsInfo {
    constructor(name,fathername,lastname,age,gender,country){
        this.name =name;
        this.lastname =lastname;
        this.fathername =fathername;
        this.age =age;
        this.gender =gender;
        this.country =country;
    }
};
let names = prompt("enter your name");
let lastnames = prompt("enter your lastname");
let fathernames = prompt("enter your father's name");
let ages = prompt("enter your age");
let genders = prompt("enter your gender");
let countrys = prompt("enetr your country");
let studentsInfos = new studentsInfo(names,lastnames,fathernames,ages,genders,co)