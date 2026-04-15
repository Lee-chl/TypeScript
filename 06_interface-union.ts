interface Person{
    name:string;
    age:number
}

interface Student extends Person{
    major:string;
}

interface Player extends Person{
    skill:string;
}

const p1:Student={name:'hihi',age:25,major:'컴공'};
const p2:Player={name:'hoho',age:23,skill:'축구'}

function description(p:Student|Player){
    if('major' in p){
        const info = `${p.major},${p.age},${p.name}`;
        console.log(info);
        return;
    }
    if('skill' in p){
        const info =`${p.name},${p.age},${p.skill}`;
        console.log(info);
    }
}

description(p1);
description(p2);

function info(p:Student & Player){
    const result = `${p.name},${p.major},${p.skill}`;
    console.log(result);
}

info({name:'hoho',age:24,major:'컴공',skill:'축구'});
