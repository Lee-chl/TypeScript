type PersonName = string;

let name:string = '신호탄';
let name1:PersonName = '국기봉';

function printAge(num:string | number){
    console.log(num);   
}

type Age = string | number;
function printAge1(num:Age){
    console.log(num);
    
}

type Person = {
    uname:string;
    email:string;
}