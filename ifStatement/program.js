const myInfo = {
    name: 'Shakiba',
    FatherName: "Asadullah" ,
    LastName: "Zahedi",
    country: "Afghanistan",
    city: "Ghazni",
}
switch(myInfo.name){
case "ahmad":
    alert("Your father name is Ahmad");
    break;
case "Shakiba":
    console.log("your name is Shakiba");
    break;

    default:"we don't know your name" ;   
}
switch(myInfo.FatherName){
    case "Asadullah":
        console.log("your father's name is Asadullah ");
        break;
    case "ali":
        console.log("your father's name is ali");
        break;
        default:"we don't know your father's name";

}
for(let myInfo = 0; myInfo<=10;myInfo++){
    console.log(myInfo.LastName);
}
if(myInfo.country==="kanada"||myInfo.country==="Afghanistan"){
     
    console.log('you are from afghanistan')
}
// function whit argument and parametr
let info = "my name is Shikeba ";
let info2 = "my father's name is Asadullah";
function AllInfo(name,fatherName){
    console.log(name+fatherName);
}
AllInfo(info, info2);
AllInfo(34,78);
 AllInfo("Hello everyone " ,"how are you");
