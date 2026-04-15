let num: number = 10;
const greet: string = "Hello TypeScript";
const isOn: boolean = true;
const person: object = { name: "haha", age: 20 };
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const bts: string[] = ["진", "슈가", "제이홉"];
const item: [string, number, boolean] = ["haha", 30, true];
let name: any = "hihi";
name = 1;
// num= 'haha' //타입 불일치 에러
let empty: null = null;
let notAssigned: undefined = undefined;

function add(num1: number, num2: number): number {
  return num1 + num2;
}
const result = add(3, 4);
const result1 = add("1", "2");
const result2: string = add(2, 3);
const result3: number = add(3);

function sayHello(name: string): string {
  return `Hello ${name}`;
}

let greeting = sayHello("RM");
console.log(greeting);

function sayHi(name: string): void {
  console.log(`Hi ${name}`);
}
const hi = sayHi("hihi");
console.log(hi); // void 여서

/* 콜백 함수 데이터 타입 */
function sayHello1(name: string): string {
  return `Hello ${name}`;
}

function greeting1(name: string, callback: (name: string) => string) {
  return callback(name);
}

const result4 = greeting1('hihi',sayHello1);
const result5 = greeting1('hoho',(name:string)=>`Hello ${name}`);
console.log(result4,result5);

/* 형 추론 */
let name2 = 'hihi';
let age = 30;
let isOn1 = true;
let person1 = {name:'hihi',age:30};
const bts1 = ['진','슈가','제이홉'];

console.log(typeof name2);
console.log(typeof age);
console.log(typeof isOn1);
console.log(typeof person1);
console.log(typeof bts1);
name2 = 1;
age = '1';
// person1 = {name:'RM'};
// bts1 =['a',1];


function sayHello2(name:string):string{
    return `Hello ${name}`;
}

let greett = sayHello2('RM');

function sayHello3(name:string){
    return `Hello ${name}`;
}

function sayHello4(name:string){
    console.log(`Hellllo ${name}`);
    return;
}

function sayHello5(name:string){
    console.log(`Hello ${name}`);
}

let num3: number | string = 10;
num3 = '10';
console.log(typeof num3);

function getAge(age:number|string|boolean):string|number{
    return `저의 나이는 ${age}`;
}

console.log(getAge(20));
console.log(getAge('20'));
console.log(getAge(true));

