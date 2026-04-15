function grade(score:number):string{
    if(score>= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else if(score >= 60){
        return 'D'
    }
    return 'F';
}

console.log(`학점은 ${grade(80)} 입니다.`);