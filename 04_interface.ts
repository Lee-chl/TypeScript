const person = {name:'hihi',age:30};

interface Person{
    name:string;
    age:number;
}

const person1:Person = {name:'hihi',age:20};
const person2:Person ={name:'1'};
const person3:Person = {name:'1',age:2,team:'12'};

interface Movie{
    title:string;
    rank:number|string;
}
const m1:Movie = {title:'mmm',rank:12};
const m2:Movie = {title:'1'};
const m3:Movie = {title:'mm2',rank:1,author:'12'};


/* interface 상속 */
interface Student extends Person{
    major:string;
}

const s:Student = {name:'hoho',age:11,major:'dd'};
const s1:Student = {name:'hihi',age:22};

/* 선언 병합 */
interface Person2{
    name:string;
}

/* 이런 식으로 병합 됨 
interface Person2{
    age:number;
}
*/

/* 객체 모델링 */
interface Maker{
    name:string;
    country:string;
}

interface Car{
    model: string;
    maker:Maker;
}