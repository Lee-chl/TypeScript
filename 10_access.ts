class Student{
    public name : string;
    private grade: number;
    constructor(name:string,grade:number){
        this.name = name;
        this.grade = grade;
    }
    public get Grade():number{ // getter
        return this.grade
    }
    public set Grade(value:number){
        if(value < 1 || value > 4){
            throw new Error('학년은 1~4사이여야 합니다.')
        }
        this.grade = value;
    }
    public getGrade():number{
        return this.grade;
    }
    public setGrade(value:number):void{
              if(value < 1 || value > 4){
            throw new Error('학년은 1~4사이여야 합니다.')
        }
        this.grade = value;
    }
}

const student = new Student('hihi',30);
const age = student.Grade;
console.log(age);

student.setGrade(1);
console.log(student.getGrade());

student.Grade = 3;
console.log(student.Grade);


class Student1{
    name:string;
    protected grade:number;

    constructor(name:string,grade:number){
        this.name = name;
        this.grade=grade;
    }
    getGrade():number{
        return this.grade;
    }
}

class HighSchoolStudent extends Student1{
    constructor(name:string,grade:number){
        super(name,grade);
    }

    public printGrade(){ // 상속이라서 가능 
        console.log(`학년: ${this.grade}`);
    }
    public printGrade2(){
        console.log(`학년: ${this.getGrade()}`);
    }
}

const s = new HighSchoolStudent('hoho',1);
s.grade = 2; // error