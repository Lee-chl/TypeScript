interface Student{
    name:string;
    grade:number;
    major?:string;
}

function studentInfo(s:Student){
    console.log(s.name);
    console.log(s.grade);
}

studentInfo({name:'hihi',grade:1,major:'컴공'});

const s1:Student = {name:'hoho',grade:2};
studentInfo(s1);

const s2:Student={name:'23',grade:3,major:'컴공'};
studentInfo(s2);
